import { createApp, ref } from 'vue'
import routes from '@/routes/routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import naiveUi from 'naive-ui'

import './assets/index.css'
import App from './App.vue'
import { storageKey } from './storage-keys'

const parseAppId = import.meta.env.VITE_PARSE_APPLICATION_ID
const parseClientKey = import.meta.env.VITE_PARSE_CLIENT_KEY
if (!parseAppId || !parseClientKey) {
  console.error('The Parse application id or client key is missing.')
}

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function getPlayerId(): string | undefined {
  return localStorage.getItem(storageKey.playerId) ?? undefined
}
const playerId = ref(getPlayerId())

app.provide('playerId', playerId)
app.use(router)
app.use(naiveUi)
app.mount('#app')
