<template>
    <n-button @click="increment">Count is {{ count }}</n-button>
</template>
  
<script lang="ts" setup>
    import { ref } from 'vue'
    import { NButton } from 'naive-ui'

    const count = ref(0);

    function increment() {
        count.value++;
    }
 </script>