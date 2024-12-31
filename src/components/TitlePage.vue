<template>
  <div class="page">
    <div class="title-container">
      <n-icon size="50px">
        <Alien />
      </n-icon>
      <h1>Push the Button</h1>
    </div>
    <n-card title="Me" size="medium">
      <n-form
        v-if="!playerId"
        ref="joinForm"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
      >
        <n-form-item label="Name" path="name">
          <n-input v-model:value="formValue.name" placeholder="Player Name" />
        </n-form-item>
        <n-form-item>
          <n-button @click="handleJoin" :disabled="!formValue.name"> Join </n-button>
        </n-form-item>
      </n-form>
      <PlayerCard v-else :playerId="playerId" />
    </n-card>
    <n-card title="Players" size="medium"> Tonight I'm a rock 'n' roll star </n-card>
  </div>
</template>

<script setup lang="ts">
import { NIcon, NCard, NForm, NFormItem, NInput, NButton } from 'naive-ui'
import { Alien } from '@vicons/tabler'
import { ref } from 'vue'
import { storageKey } from '@/storage-keys'
import PlayerCard from '@/components/PlayerCard.vue'

const playerId = ref(getPlayerId())

const formValue = ref({
  name: ''
})

const rules = {
  name: {
    required: true,
    message: 'Please input your name.',
    trigger: 'blur'
  }
}

function getPlayerId(): string | null {
  return localStorage.getItem(storageKey.playerId)
}

function setPlayerId(newPlayerId: string | null) {
  if (newPlayerId === null) {
    localStorage.removeItem(storageKey.playerId)
  } else {
    localStorage.setItem(storageKey.playerId, newPlayerId)
  }
  playerId.value = newPlayerId
}

async function handleJoin() {
  throw new Error('Player creation failed.')
  // setPlayerId(result.data.createPlayer.player.id)
  // formValue.value.name = ''
}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  font-family: 'Courier New', monospace;
}
</style>
