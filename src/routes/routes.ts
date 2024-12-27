
import TitlePage from "@/components/TitlePage.vue";

export default [
    { path: "/", component: TitlePage },
    { path: "/room/:roomCode", component: TitlePage }
];
