<template>
  <n-button @click="increment">Count is {{ count }}</n-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
