import { defineAsyncComponent } from 'vue';

export const NativeLink = defineAsyncComponent(() => import('./native-link.vue'));
