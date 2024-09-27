<template>
    <div class="relative flex">
      <img 
        :src="iconPath"  
        class="w-12 h-12"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      />
  
      <transition name="fade">
        <div 
          v-if="isHovered" 
          class="popup-content absolute text-dark-grey bg-white py-3 px-4 shadow-lg rounded left-16 font-text w-max max-w-48"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, computed } from 'vue';

    const isHovered = ref(false);

    const defaultIcon = '../assets/icons/popup-plus.svg';
    const hoverIcon = '../assets/icons/popup-min.svg';

    const iconPath = computed(() => {
        return new URL(isHovered.value ? hoverIcon : defaultIcon, import.meta.url).href;
    });
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from, .fade-leave-to {
    opacity: 0;
    }
</style>
  