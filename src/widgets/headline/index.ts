import { defineAsyncComponent } from 'vue';

export const Headline = defineAsyncComponent(() => import('./headline.vue'));
