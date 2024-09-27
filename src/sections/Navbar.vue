<template>
    <header class="absolute p-4 bg-white shadow-md w-screen">
      <nav class="flex max-w-desktop m-auto justify-between items-start lg:items-center w-full">
          <div class="flex flex-col lg:flex-row lg:items-center w-full">
            <router-link class="home" to="/home">
              <img class="hover:scale-110 transition" src="../assets/logo-light.svg" alt="logo" />
            </router-link>

            <template v-if="isMenuOpen">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between lg:flex-1 lg:ml-4">
                <ul class="flex flex-col lg:flex-row lg:items-center justify-start gap-10 lg:gap-5 mt-10 lg:mt-0 text-lg">
                  <li class="hover:text-secondary-green cursor-pointer lg:px-4 transition">
                  <router-link to="/GreenHomesAssessment/">Modulair bouwen</router-link>
                  </li>
                  <li class="lg:px-4 ">
                    Over ons
                  </li>
                  <li class="lg:px-4 ">
                    Contact
                  </li>
                </ul>
  
                <div class="flex flex-col lg:items-center lg:flex-row gap-4 mt-20 lg:mt-0">
                    <ReviewRating />
  
                    <Button variant="accent" icon="arrow-right">
                        Vraag offerte aan
                    </Button>
                </div>
              </div>
            </template>
          </div>

          <button @click="toggleMenu" class="lg:hidden font-title text-lg mt-2">menu</button>
      </nav>
    </header>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import ReviewRating from "../components/ReviewRating.vue";
  import Button from "../components/Button.vue";

  const isMenuOpen = ref(false);

  const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
  };

  const checkViewport = () => {
      if (window.innerWidth >= 1024) {
          isMenuOpen.value = true;
      } else {
          isMenuOpen.value = false;
      }
  };

  onMounted(() => {
      checkViewport();
    
      window.addEventListener('resize', checkViewport);
  });

  onBeforeUnmount(() => {
      window.removeEventListener('resize', checkViewport);
  });
</script>

<style lang="scss">
  .router-link-active:not(.home)  {
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
  