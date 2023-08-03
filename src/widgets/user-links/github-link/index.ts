import { defineAsyncComponent } from 'vue';

export const GithubLink = defineAsyncComponent(() => import('./github-link.vue'));
