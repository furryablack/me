import { defineAsyncComponent } from 'vue';

export const Card = defineAsyncComponent(() => import('./card.vue'));
