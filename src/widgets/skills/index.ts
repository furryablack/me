import { defineAsyncComponent } from 'vue';

export const Skills = defineAsyncComponent(() => import('./skills.vue'));
