<template>
  <div class="flex flex-col gap-2">
    <n-card size="medium">
      <div class="flex flex-col gap-2">
        <n-button class="flex-grow" @click="handleCreate">Create</n-button>
        <n-button class="flex-grow" @click="navigateToJoin">Join</n-button>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { inject, type Ref } from 'vue'
import type { Room } from '@/types/objects'

const Parse = inject('ParseClient') as any
const router = useRouter()

const playerId = inject('playerId') as Ref<string | undefined>

async function handleCreate() {
  if (playerId.value) {
    try {
      const room = await createRoomWithPlayer(playerId.value)
      router.push('/room/' + room.code)
    } catch (error) {
      console.error('Failed to create room:', error)
    }
  } else {
    console.error('Player ID is missing.')
  }
}

async function createRoomWithPlayer(playerId: string): Promise<Room> {
  try {
    const result = await Parse.Cloud.run('createRoomWithPlayer', { playerId })
    return result as Room
  } catch (error) {
    console.error('Error calling createRoomWithPlayer:', error)
    throw error
  }
}

function navigateToJoin() {
  router.push('/join')
}
</script>
