<template>
  <header class="flex flex-row justify-center my-2">
    <n-image src="banner.png">
      <template #error>
        <n-icon size="50px">
          <Alien />
        </n-icon>
      </template>
    </n-image>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { Alien } from '@vicons/tabler'
</script>
