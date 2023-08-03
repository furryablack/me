<template>
  <Shared.UI.Layout.Section 
    without-indent 
    is-fluid
    height-full
    class-name="grid-rows-auto/1fr/auto overflow-y-hidden"
  >
    <div class="border-solid border-b-2 border-191919 border-opacity-30">
      <Shared.UI.Layout.Section>
        <Widgets.Headline />
      </Shared.UI.Layout.Section>
    </div>

    <Shared.UI.Layout.Section class="overflow-y-auto py-5">
      <router-view />
    </Shared.UI.Layout.Section>

    <Shared.UI.Layout.Section 
      is-fluid
      without-indent
      class="border-solid border-t-2 border-191919 border-opacity-30"
    >      
      <Shared.UI.Layout.Section>
        <Widgets.ContactToMe />
      </Shared.UI.Layout.Section>
    </Shared.UI.Layout.Section>
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';
import { Widgets } from '@widgets';
</script>

