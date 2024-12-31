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
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const roomCode = computed(() => route.params.roomCode)

const players = []
</script>
