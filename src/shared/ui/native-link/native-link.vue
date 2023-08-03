<template>
  <a 
    :href="href"
    :class="[className]"
    target="_blank" 
    :download="download"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
export interface IProps {
  className?: string,
  href: string,
  download?: string,
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
  download: undefined,
});
</script>