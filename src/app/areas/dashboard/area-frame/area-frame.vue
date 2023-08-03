<template>
  <Shared.UI.Layout.Section
    without-indent 
    is-fluid
    class-name="pb-5"
  >
    <Widgets.Headline />
    <router-view />
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
import { Widgets } from '@widgets';
</script>