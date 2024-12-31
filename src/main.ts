import { createApp } from 'vue'
import routes from '@/routes/routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import naiveUi from 'naive-ui'

import './assets/main.css'
import App from './App.vue'

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

app.use(router)
app.use(naiveUi)
app.mount('#app')
