<template>
  <n-card embedded :bordered="false" class="player-card">
    <n-spin :show="!playerName">
      <Avatar
        :class="{
          invisible: !playerName
        }"
        :size="40"
        variant="bauhaus"
        :name="playerName"
      />
    </n-spin>
    <div>
      <n-p class="player-name">{{ playerName }}</n-p>
      <!-- <n-tag>Alien</n-tag> -->
    </div>
  </n-card>
</template>

<script setup lang="ts">
import type { Player } from '@/types/gql/graphql'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import Avatar from 'vue-boring-avatars'
import { computed } from 'vue'

const props = defineProps<{
  playerId: string
}>()

const playerQuery = useQuery<{ player: Player }>(
  gql`
    query PlayerCardGetPlayer($id: ID!) {
      player(id: $id) {
        id
        name
      }
    }
  `,
  { id: props.playerId }
)

const playerName = computed(() => playerQuery.result.value?.player.name ?? '')
</script>

<style scoped>
.player-card:deep(.n-card__content) {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
}
.player-name {
  margin: 0;
}
</style>
