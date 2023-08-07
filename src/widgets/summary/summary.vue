<template>
  <Shared.UI.Layout.Section is-fluid>
    <Shared.UI.TitleBlock 
      class="max-w-screen-sm" 
      title="Summary" 
      :class="[className]"
    />
    
    <div class="max-w-screen-sm">
      Skilled specialist with 7 years of experience in front-end development.
    </div>
    <div class="max-w-screen-sm">
      Have a passion for simplify complex matters. Simple matters give simple solutions.
    </div>
  </Shared.UI.Layout.Section>
</template>

<script lang="ts" setup>
import { Shared } from '@shared';

export interface IProps {
  className?: string,
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
});
</script>