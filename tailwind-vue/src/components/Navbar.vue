<script setup>
import ReviewRating from "../components/ReviewRating.vue";
import Button from "../components/Button.vue";

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header class="p-6 bg-white shadow-md">
      <nav class="hidden lg:flex max-w-desktop m-auto justify-between items-center font-title">
        <div class="flex items-center gap-4">
            <img src="../assets/logo-light.svg" alt="logo" />
    
            <ul class="flex justify-start">
              <li class="hover:text-secondary-green cursor-pointer px-4 transition active">
                Modulair bouwen
              </li>
              <li class="hover:text-secondary-green cursor-pointer px-4 transition">
                Over ons
              </li>
              <li class="hover:text-secondary-green cursor-pointer px-4 transition">
                Contact
              </li>
            </ul>
        </div>

        <div class="flex items-center gap-4">
            <ReviewRating />

            <Button variant="primary" icon="arrow-right">
                Vraag offerte aan
            </Button>
        </div>
      </nav>

      <nav class="lg:hidden">
        <div class="flex justify-between">
          <img src="../assets/logo-light.svg" alt="logo" />

          <button @click="toggleMenu" class="font-title text-lg">menu</button>
        </div>

        <template v-if="isMenuOpen" class="text-2xl">
          <ul class="flex flex-col justify-start gap-10 mt-10">
            <li class="active">
              Modulair bouwen
            </li>
            <li>
              Over ons
            </li>
            <li>
              Contact
            </li>
          </ul>

          <div class="flex flex-col gap-4 mt-20">
              <ReviewRating />

              <Button variant="primary" icon="arrow-right">
                  Vraag offerte aan
              </Button>
          </div>
        </template>
      </nav>
    </header>
</template>

<style lang="scss">
  .active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -6px;
      width: 16px;
      height: 16px;
      background-image: url('../assets/icons/leaf.svg');
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
</style>
  