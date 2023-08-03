import { defineAsyncComponent } from 'vue';

export const Section = defineAsyncComponent(() => import('./section.vue'));
