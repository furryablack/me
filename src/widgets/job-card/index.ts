import { defineAsyncComponent } from 'vue';

export const JobCard = defineAsyncComponent(() => import('./job-card.vue'));
