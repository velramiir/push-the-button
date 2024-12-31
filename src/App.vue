<template>
  <header class="mb-2">
    <div class="flex flex-row items-center gap-2 pb-4">
      <n-icon size="50px">
        <Alien />
      </n-icon>
      <h1>Push the Button</h1>
    </div>
    <PlayerCard v-model="playerId" @update:modelValue="setPlayerId($event)" />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { Alien } from '@vicons/tabler'
import PlayerCard from './components/PlayerCard.vue'
import { ref } from 'vue'
import { storageKey } from './storage-keys'

const playerId = ref(getPlayerId())

function getPlayerId(): string | undefined {
  return localStorage.getItem(storageKey.playerId) ?? undefined
}

function setPlayerId(newPlayerId: string | undefined) {
  if (newPlayerId === undefined) {
    localStorage.removeItem(storageKey.playerId)
  } else {
    localStorage.setItem(storageKey.playerId, newPlayerId)
  }
  playerId.value = newPlayerId
}
</script>
