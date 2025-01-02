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

const PARSE_URL = import.meta.env.VITE_PARSE_URL
const PARSE_APP_ID = import.meta.env.VITE_PARSE_APPLICATION_ID
const PARSE_CLIENT_KEY = import.meta.env.VITE_PARSE_CLIENT_KEY

const router = useRouter()

const playerId = inject('playerId') as Ref<string | undefined, string | undefined>

async function handleCreate() {
  if (playerId.value) {
    const room = await createRoomWithPlayer(playerId.value)
    router.push('/room/' + room.code)
  }
}

function navigateToJoin() {
  router.push('/join')
}

async function createRoomWithPlayer(playerId: string): Promise<Room> {
  const url = `${PARSE_URL}/functions/createRoomWithPlayer`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': PARSE_APP_ID,
        'X-Parse-Client-Key': PARSE_CLIENT_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerId })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.result as Room
  } catch (error) {
    throw new Error(`Error calling cloud function: ${error}`)
  }
}
</script>
