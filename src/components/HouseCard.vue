<template>
    <div class="p-4 border rounded-lg shadow hover:shadow-lg transition duration-200">
      <h4 class="font-bold text-lg mb-2">{{ name }}</h4>
      <p class="text-gray-600">{{ type }}</p>
    </div>
</template>

<script setup lang="ts">
    defineProps({
    name: String,
    type: String
    });
</script>