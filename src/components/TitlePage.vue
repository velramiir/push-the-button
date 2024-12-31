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

function handleCreate() {
  console.log('create')
}

function navigateToJoin() {
  router.push('/join')
}
</script>
