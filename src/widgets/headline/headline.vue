<template>
  <div class="flex flex-col items-start px-2 xs:px-4 py-4">
    <span class="text-20 xs:text-32 font-semibold">Aleksei Kosianov</span>

    <ul class="flex flex-col text-14 leading-5 list-decimal list-inside whitespace-nowrap">
      <li v-if="isAreaDashboard">
        <Widgets.UserLinks.Phone />
      </li>

      <li v-if="isAreaDashboard">
        <Widgets.UserLinks.EMail />
      </li>

      <li v-if="isAreaDashboard">
        <Widgets.UserLinks.Linkedin />
      </li>

      <li>
        <Widgets.UserLinks.Github />
      </li>

      <li v-if="!isAreaDashboard">
        <router-link to="/">
          back to index
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { Widgets } from '@widgets';

const route = useRoute();
const isAreaDashboard = computed(() => route?.meta?.isArea?.dashboard);
</script>