<template>
  <div class="flex flex-col gap-2">
    <n-card size="medium">
      <div class="flex flex-col gap-2">
        <n-button class="flex-grow" @click="navigateToCreate">Create</n-button>
        <n-button class="flex-grow" @click="navigateToJoin">Join</n-button>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import fetch from 'node-fetch'
import { ref } from 'vue'
import { storageKey } from '@/storage-keys'

const parseUrl = import.meta.env.VITE_PARSE_URL
const parseAppId = import.meta.env.VITE_PARSE_APPLICATION_ID
const parseClientKey = import.meta.env.VITE_PARSE_CLIENT_KEY

const router = useRouter()

const playerId = ref(getPlayerId())

function getPlayerId(): string | undefined {
  return localStorage.getItem(storageKey.playerId) ?? undefined
}

function navigateToCreate() {
  router.push('/create')
}

function navigateToJoin() {
  router.push('/join')
}

async function callCreateRoomWithPlayer(playerId: string): Promise<void> {
  const url = `${parseUrl}/functions/createRoomWithPlayer`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': parseAppId,
        'X-Parse-Client-Key': parseClientKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerId })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Room creation result:', data)
  } catch (error) {
    console.error('Error calling cloud function:', error)
  }
}

async function handleCreate() {
  loading.value = true
  try {
    const result = await callCreateRoomWithPlayer()
    const roomCode = result?.data?.createRoom?.room?.code
    if (!roomCode) throw new Error('Room creation failed.')
    router.push(`/room/${roomCode}`)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
