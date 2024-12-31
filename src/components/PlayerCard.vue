<template>
  <n-card size="medium">
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
        <n-button @click="handleJoin" :disabled="!formValue.name"> Save </n-button>
      </n-form-item>
    </n-form>
    <PlayerIndicator v-else :playerId="playerId" />
  </n-card>
</template>

<script setup lang="ts">
import type { Mutation } from '@/types/gql/graphql'
import type { FetchResult } from '@apollo/client'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed, ref } from 'vue'
import PlayerIndicator from './PlayerIndicator.vue'

const model = defineModel({ type: String })

const playerId = computed(() => {
  return model.value ?? null
})

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

const { mutate: createPlayer } = useMutation(gql`
  mutation TitlePageCreatePlayer($name: String!) {
    createPlayer(input: { fields: { name: $name } }) {
      player {
        id
      }
    }
  }
`)

async function handleJoin() {
  const result: FetchResult<Mutation> | null = await createPlayer({ name: formValue.value.name })
  if (!result?.data?.createPlayer) {
    throw new Error('Player creation failed.')
  }
  model.value = result.data.createPlayer.player.id
  formValue.value.name = ''
}
</script>
