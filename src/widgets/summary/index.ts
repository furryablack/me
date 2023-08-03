import { defineAsyncComponent } from 'vue';

export const Summary = defineAsyncComponent(() => import('./summary.vue'));
