<template>
    <button
    :class="[
      'flex items-center justify-center w-full lg:w-fit px-6 py-3 rounded-lg font-bold text-sm transition bg-grey hover:bg-grey-hover text-dark-grey text-nowrap', 
      props.variant
    ]"
    >
      <slot></slot>

      <img v-if="props.icon" :src=iconPath alt="icon" class="ml-2 w-3 h-3" />
    </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    variant: { type: String, },
    icon: { type: String, default: '' },
  });

  const iconPath = ref<string>(`/GreenHomesAssessment/${props.icon}.svg`);
</script>

<style lang="scss">
    .accent {
        @apply bg-accent-purple hover:bg-accent-purple-hover text-white
    }

    .secondary-accent {
        @apply bg-white text-accent-purple
    }

    .green {
        @apply bg-primary-green hover:bg-primary-green-hover text-white
    }
</style>

