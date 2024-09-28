<template>
    <div class="bg-white border border-secondary-green rounded-lg p-4 h-fit hover:bg-light-green cursor-pointer">
      <div class="flex justify-between items-center"  @click="isOpen = !isOpen">
        <h3
          class="font-bold font-title text-dark-grey cursor-pointer"
        >
          {{ props.question }}
        </h3>
        <span class="ml-2 text-xl">
          {{ isOpen ? '-' : '+' }}
        </span>
      </div>
  
      <div v-if="isOpen" class="pl-4 mt-4">
        <p>{{ props.answer }}</p>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { ref } from 'vue';
    
    const isOpen = ref(false);

    const props = defineProps({
        question: { type: String },
        answer: { type: String },
    });
</script>
  