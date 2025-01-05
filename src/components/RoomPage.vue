<template>
  <div class="room-details">
    <h1 class="room-code">{{ roomCode }}</h1>
    <div class="players-list">
      <div v-for="player in players" :key="player.id" class="player-item">
        <Avatar :size="50" variant="bauhaus" :name="player.name" />
        <span class="player-name">{{ player.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import Avatar from 'vue-boring-avatars'
import type { Player } from '@/types/objects'
import Parse from 'parse/dist/parse.min.js'

const route = useRoute()
const roomCode = computed(() => route.params.roomCode as string)

const playerId = inject('playerId') as Ref<string | undefined, string | undefined>

const players = ref<Partial<Player>[]>([])
let liveQuery: any

// Function to call removePlayerFromRoom cloud function
async function removePlayerFromRoom(playerId: string, roomCode: string) {
  try {
    await Parse.Cloud.run('removePlayerFromRoom', { playerId, roomCode })
    console.log(`Player ${playerId} removed from room ${roomCode}`)
  } catch (error) {
    console.error(`Error removing player ${playerId} from room ${roomCode}:`, error)
  }
}

async function getCurrentRoom() {
  const Room = Parse.Object.extend('Room')
  const roomQuery = new Parse.Query(Room)
  roomQuery.equalTo('code', roomCode.value)
  return await roomQuery.first()
}

onMounted(async () => {
  if (roomCode.value && playerId.value) {
    const currentRoom = await getCurrentRoom()

    if (!currentRoom) {
      console.error('Room not found.')
      return
    }

    // Link the player to the current room
    try {
      const Player = Parse.Object.extend('Player')
      const playerQuery = new Parse.Query(Player)
      const player = await playerQuery.get(playerId.value)

      player.set('room', currentRoom)
      await player.save(null)
      console.log(`Player ${playerId.value} linked to room ${roomCode.value}`)
    } catch (error) {
      console.error(`Error linking player ${playerId.value} to room ${roomCode.value}:`, error)
    }

    await updatePlayersList(currentRoom)

    // Set up LiveQuery for Player objects linked to the room
    const Player = Parse.Object.extend('Player')
    const playerQuery = new Parse.Query(Player)

    liveQuery = await playerQuery.subscribe()

    liveQuery.on('create', () => {
      updatePlayersList(currentRoom)
    })

    liveQuery.on('update', () => {
      updatePlayersList(currentRoom)
    })

    liveQuery.on('delete', () => {
      updatePlayersList(currentRoom)
    })

    // Add unload event listener to ensure player is removed when the page is closed
    window.addEventListener('beforeunload', handleBeforeUnload)
  }
})

// Update the players list when changes occur
async function updatePlayersList(room: any) {
  try {
    const Player = Parse.Object.extend('Player')
    const playerQuery = new Parse.Query(Player)
    playerQuery.equalTo('room', room)
    playerQuery.ascending('name')

    const results = await playerQuery.find()

    // Update the players array with the current players in the room
    players.value = results.map((player: any) => ({
      id: player.id,
      name: player.get('name')
    }))
  } catch (error) {
    console.error('Error fetching players:', error)
  }
}

async function handleBeforeUnload() {
  if (roomCode.value && playerId.value) {
    await removePlayerFromRoom(playerId.value, roomCode.value)
  }
}

onBeforeUnmount(async () => {
  // Clean up LiveQuery subscription
  if (liveQuery) {
    liveQuery.unsubscribe()
  }

  // Remove the player from the room
  if (roomCode.value && playerId.value) {
    await removePlayerFromRoom(playerId.value, roomCode.value)
  }

  // Remove unload event listener
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<style scoped>
.room-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.room-code {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.player-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
