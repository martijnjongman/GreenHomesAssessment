<template>
    <section class="max-w-screen-2xl m-auto px-4 mb-20 lg:mb-40">
        <div :class="['flex flex-col lg:flex-row gap-6 lg:gap-32 justify-between', props.variant === 'reversed' ? 'lg:flex-row-reverse' : '']">
            <div class="flex flex-col px-2">
                <h2 class="relative w-fit mr-6 text-2xl lg:text-4xl font-title font-bold mb-4">{{ props.title }}</h2>

                <p class="font-text leading-8 mb-4">
                    {{ props.text }}
                </p>

                <Button variant="green">{{ props.buttonText}}</Button>
            </div>

            <div class="img__container relative max-h-96 max-w-screen-sm">
                <img class="object-cover w-full h-full rounded-xl max-h-96 lg:max-h-none" :src=imagePath alt="image">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Button from "../components/Button.vue";

    const props = defineProps({
        title: { type: String },
        text: { type: String },
        buttonText: {type: String },
        variant: { type: String, default: ''},
        image: { type: String }
    });

    const imagePath = ref<string>('');
    imagePath.value = new URL(`/public/${props.image}.jpg`, import.meta.url).href;
</script>

<style lang="scss" scoped>
    h2::after {
      content: '';
      position: absolute;
      top: -8px;
      right: -32px;
      width: 24px;
      height: 24px;
      background-image: url('/leaf.svg');
      background-size: contain;
      background-repeat: no-repeat;
    }

    .img__container {
        &::after {
            z-index: -1;
            content: '';
            position: absolute;
            left: 10px;
            top: 10px;
            width: 100%;
            height: 100%;
            border-radius: 12px;

            @apply bg-secondary-green
        }
    }
</style>