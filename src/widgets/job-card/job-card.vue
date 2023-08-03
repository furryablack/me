<template>
  <Shared.UI.Card
    :height-full="heightFull"
    :class-name="className"
    :shadow="shadow"
    class="max-w-screen-sm"
  >
    <div class="font-semibold text-18 underline">
      {{ position }}
    </div>
    <div class="pt-1 font-semibold">
      {{ company }}
    </div>
    <div class="italic pb-1">
      {{ date }}
    </div>

    <template v-if="descriptionIsArray">
      <template v-for="description of descriptions">
        <div class="first-letter:font-semibold first-letter:underline pb-2 leading-5">
          {{ description }}
        </div>
      </template>
    </template>
      
    <template v-else>
      <div class="first-letter:font-semibold first-letter:underline pb-2 leading-5">
        {{ description }}
      </div>
    </template>
  </Shared.UI.Card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Shared } from '@shared';

// todo: duplicate from shared/ui/card/card.vue
// need to review this case
interface ICardProps {
  className?: string,
  heightFull?: boolean,
  shadow?: boolean,
}

export interface IProps extends ICardProps {
  position: string,
  company: string,
  date: string,
  description: string | string[],
}

const props = withDefaults(defineProps<IProps>(), {
  className: undefined,
  heightFull: false,
  shadow: false,
});

const descriptionIsArray = computed(() => Array.isArray(props.description));
const descriptions = computed(() => props.description);
</script>