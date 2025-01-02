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
import { computed, inject, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import Avatar from 'vue-boring-avatars'

const PARSE_URL = import.meta.env.VITE_PARSE_URL
const PARSE_APP_ID = import.meta.env.VITE_PARSE_APPLICATION_ID
const PARSE_CLIENT_KEY = import.meta.env.VITE_PARSE_CLIENT_KEY

const route = useRoute()
const roomCode = computed(() => route.params.roomCode as string)

const playerId = inject('playerId') as Ref<string | undefined, string | undefined>
const players = []
</script>
