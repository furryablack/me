<template>
  <div class="relative">
    <div 
      class="relative z-10 rounded-sm"
      :class="[heightFull && 'h-full', className]"
    >
      <slot />
    </div>
    
    <span
      v-if="shadow" 
      class="absolute inset-0 -z-1" 
      style="background-color: #f3f1f1; filter: blur(120px)"
    />
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  className?: string,
  heightFull?: boolean,
  shadow?: boolean,
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
  heightFull: false,
  shadow: false,
});
</script>