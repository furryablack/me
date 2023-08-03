<template>
  <Shared.UI.Layout.Section
    height-full
    class-name="py-2 xs:py-5"
  >
    <router-view />
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
</script>