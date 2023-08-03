<template>
  <div
    class="flex items-center pb-3"
    :class="[className]"
  >
    <div class="text-22 pr-3 font-bold whitespace-nowrap border-solid border-191919 border-b-4 border-opacity-10">
      {{ title }}
    </div>

    <div class="bg-191919 grow h-full bg-opacity-10" />
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  className?: string,
  title: string,
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
  title: undefined,
});
</script>