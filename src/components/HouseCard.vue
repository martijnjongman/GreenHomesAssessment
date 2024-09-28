<template>
    <router-link to="/house">
        <div class="bg-white border rounded-lg border-secondary-green hover:shadow-xl transition hover:-translate-y-1 cursor-pointer">
            <div class="overflow-hidden rounded-tr-lg rounded-tl-lg max-h-64">
                <img :src="imagePath" alt="image" class="object-fit w-full h-full" />
            </div>
            
            <div class="p-8 flex flex-col font-title">
                <h4 class="font-bold font-title text-2xl mb-2">{{ name }}</h4>
                <div class="flex flex-col">
                    <span class="text-sm">Type:</span>
                    <p class="font-semibold">{{ type }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { ref} from 'vue';

const props = defineProps({
        name: String,
        type: String,
        image: String
    });

    const imagePath = ref<string>('');
    imagePath.value = new URL(`/public/${props.image}`, import.meta.url).href;
</script>