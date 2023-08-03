<template>
  <pre v-if="simple">
• Hasura/Postgres, Next.js
• React, Vue 2|3, Angular 2+
• CSS, HTML, LESS/SASS/SCSS
• Bootstrap, Tailwind, etc
• Material UI, etc
• git, git-flow, docker
• GraphQL, REST, Apollo
• Webpack, Vite, Rollup, etc
• ESLint, Prettier
• Effector.js, Pinia, Vuex, etc
• Vue Router, React Router
• Vitest, Jest, VueTestUtils, etc
• Linear, JIRA, Hubstaff
</pre>

  <Shared.UI.Layout.Section
    v-else
    class-name="pt-5"
    is-fluid
  >
    <Shared.UI.TitleBlock
      class="max-w-screen-sm"
      title="Skills"
    />

    <ul>
      <li>• Hasura/Postgres, next.js</li>
      <li>• React, Vue 2|3, Angular 2+</li>
      <li>• CSS, HTML, LESS/SASS/SCSS/</li>
      <li>• Bootstrap, Tailwind, Bulma, BEM, linaria, StyleSheet, etc</li>
      <li>• Material UI, etc</li>
      <li>• git, git-flow, docker, docker-compose</li>
      <li>• GraphQL, REST, Apollo</li>
      <li>• Webpack, Vite, Rollup, etc</li>      
      <li>• ESLint, Prettier, etc</li>
      <li>• Effector.js, Pinia, Vuex, Redux, redux-thunks, etc</li>
      <li>• Vue Router, React Router</li>
      <li>• Vitest, Jest, VueTestUtils, etc</li>
      <li>• Linear, JIRA, Hubstaff</li>
    </ul>
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';

export interface IProps {
  simple: boolean,
}

withDefaults(defineProps<IProps>(), {
  simple: true,
});
</script>