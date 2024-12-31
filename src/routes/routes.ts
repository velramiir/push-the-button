import TitlePage from '@/components/TitlePage.vue'
import JoinRoom from '@/components/JoinRoom.vue'
import RoomPage from '@/components/RoomPage.vue'

export default [
  { path: '/', component: TitlePage },
  { path: '/join', component: JoinRoom },
  { path: '/room/:roomCode', component: RoomPage }
]
