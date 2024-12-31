<template>
  <n-card embedded :bordered="false" class="player-card">
    <n-spin :show="!playerName">
      <Avatar
        :class="{
          hidden: !playerName
        }"
        :size="40"
        variant="bauhaus"
        :name="playerName"
      />
    </n-spin>
    <div>
      <n-p class="player-name">{{ playerName }}</n-p>
      <n-tag>Alien</n-tag>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NP, NTag, NSpin } from 'naive-ui'
import Avatar from 'vue-boring-avatars'
import { computed } from 'vue'

const props = defineProps<{
  playerId: string
}>()

const playerName = computed(() => '')
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

.hidden {
  visibility: hidden;
}
</style>
