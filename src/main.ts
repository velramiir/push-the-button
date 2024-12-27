import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import routes from '@/routes/routes';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createRouter, createWebHashHistory } from 'vue-router';

const parseAppId = import.meta.env.VITE_PARSE_APPLICATION_ID;
const parseClientKey = import.meta.env.VITE_PARSE_CLIENT_KEY;
if (!parseAppId || !parseClientKey) {
  console.error('The Parse application id or client key is missing.');
}

const app = createApp(App);
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  uri: 'https://parseapi.back4app.com/graphql',
  headers: {
    'X-Parse-Application-Id': parseAppId ?? '',
    'X-Parse-Client-Key': parseClientKey ?? ''
  },
  cache
});
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.provide(DefaultApolloClient, apolloClient);
app.use(router);
app.mount('#app');
