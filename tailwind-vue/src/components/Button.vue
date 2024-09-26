<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  variant: { type: String, required: true },
  icon: { type: String, default: '' },
});

const iconPath = ref<string>('');
iconPath.value = new URL(`../assets/icons/${props.icon}.svg`, import.meta.url).href;
</script>

<template>
    <button
      :class="[
        'flex items-center w-fit px-6 py-3 rounded-lg font-bold text-sm transition', 
        props.variant === 'primary' ? 'primary' : 'secondary'
      ]"
    >
      <slot></slot>

      <img v-if="props.icon" :src=iconPath alt="icon" class="ml-2 w-3 h-3" />
    </button>
  </template>

<style lang="css">
    .primary {
        @apply bg-accent-purple hover:bg-accent-purple-hover text-white
    }

    .secondary {
        @apply text-accent-purple hover:bg-grey text-accent-purple
    }
</style>

