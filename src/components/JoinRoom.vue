<template>
  <n-card>
    <h1>Join Room</h1>
    <div class="flex flex-row gap-2 justify-center mb-4">
      <n-input
        v-for="(_, index) in roomCode"
        :key="index"
        ref="inputs"
        maxlength="1"
        placeholder="-"
        class="text-center"
        v-model:value="roomCode[index]"
        @input="handleInput($event, index)"
        @keydown.backspace="handleBackspace($event, index)"
        @paste="handlePaste"
      />
    </div>
    <n-button @click="handleJoin" :disabled="!isRoomCodeComplete" :loading="loading">
      Join
    </n-button>
  </n-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const roomCode = ref(['', '', '', ''])
const loading = ref(false)

// Computed property to check if all inputs are filled
const isRoomCodeComplete = computed(() => roomCode.value.every((char) => char.trim().length === 1))

const inputs = ref<(HTMLInputElement | null)[]>([])

onMounted(() => {
  // Focus the first input on page load
  if (inputs.value[0]) {
    inputs.value[0]?.focus()
  }
})

// Handle input character validation and focus jump
function handleInput(inputValue: string, index: number) {
  const upperCaseValue = inputValue.toUpperCase()

  // Allow only alphanumeric characters
  if (/^[A-Z0-9]$/.test(upperCaseValue)) {
    roomCode.value[index] = upperCaseValue

    // Move focus to the next input
    if (index < roomCode.value.length - 1) {
      inputs.value[index + 1]?.focus()
    }
  } else {
    // Clear invalid input
    roomCode.value[index] = ''
  }
}

// Handle backspace functionality
function handleBackspace(event: KeyboardEvent, index: number) {
  if (event.key === 'Backspace' && index > 0 && !roomCode.value[index]) {
    inputs.value[index - 1]?.focus()
  }
}

// Handle paste functionality
function handlePaste(event: ClipboardEvent) {
  const pastedData = event.clipboardData?.getData('text') || ''
  const sanitizedData = pastedData.toUpperCase().replace(/[^A-Z0-9]/g, '')

  if (sanitizedData.length !== 4) return // Ignore invalid room codes

  // Populate roomCode and focus the last input
  sanitizedData.split('').forEach((char, index) => {
    if (index < roomCode.value.length) {
      roomCode.value[index] = char
    }
  })

  // Focus the last input after paste
  inputs.value[Math.min(sanitizedData.length - 1, roomCode.value.length - 1)]?.focus()
}

// Handle join action
function handleJoin() {
  loading.value = true
  try {
    const code = roomCode.value.join('')
    if (code.length !== 4) throw new Error('Invalid room code.')
    router.push(`/room/${code}`)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
