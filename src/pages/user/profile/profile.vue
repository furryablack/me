<template>
  <Widgets.Summary />
  <Widgets.JobsTrack />
  <Widgets.Skills :simple="false" />
</template>

<script lang="ts" setup>
import { Widgets } from '@widgets';
</script>