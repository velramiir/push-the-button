import { createApp, ref } from 'vue'
import routes from '@/routes/routes'
import { createRouter, createWebHistory } from 'vue-router' // Change this import

import naiveUi from 'naive-ui'

import './assets/index.css'
import App from './App.vue'
import { storageKey } from './storage-keys'
// Use browser-friendly version of the Parse SDK
import Parse from 'parse/dist/parse.min.js'

// Environment variables for Parse initialization
const PARSE_APP_ID = import.meta.env.VITE_PARSE_APPLICATION_ID
const PARSE_JAVASCRIPT_KEY = import.meta.env.VITE_PARSE_JAVASCRIPT_KEY
const PARSE_SERVER_URL = import.meta.env.VITE_PARSE_SERVER_URL

if (!PARSE_APP_ID || !PARSE_JAVASCRIPT_KEY || !PARSE_SERVER_URL) {
  console.error('The Parse application id, client key, or server URL is missing.')
} else {
  // Initialize Parse SDK
  Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_KEY)
  Parse.serverURL = PARSE_SERVER_URL
}

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes
})

function getPlayerId(): string | undefined {
  return localStorage.getItem(storageKey.playerId) ?? undefined
}
const playerId = ref(getPlayerId())

app.provide('ParseClient', Parse)
app.provide('playerId', playerId)
app.use(router)
app.use(naiveUi)
app.mount('#app')
