import {createApp} from 'vue';
import '@/assets/scss/app.scss';
import App from '@/App.vue';
import {createPinia} from 'pinia';
import {clickOutside} from "@/directives/clickOutside.ts";

const pinia = createPinia();

createApp(App)
    .directive('click-outside', clickOutside)
    .use(pinia).mount('#app');
