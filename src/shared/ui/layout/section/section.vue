<template>
  <div 
    class="relative"
    
    :class="[
      !withoutIndent && 'px-2 xs:px-6 sm:px-14',
      heightFull && 'h-full',
    ]"
  >
    <div 
      class="grid mx-auto relative"
      
      :class="[
        !isFluid && 'container',
        heightFull && 'h-full',
        className,
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface IProps {
  className?: string,
  isFluid?: boolean,
  heightFull?: boolean,
  withoutIndent?: boolean,
}

withDefaults(defineProps<IProps>(), {
  className: undefined,
  isFluid: false,
  heightFull: false,
  withoutIndent: false,
});
</script>