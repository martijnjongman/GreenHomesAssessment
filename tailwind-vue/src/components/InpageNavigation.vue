<template>
    <div class="flex gap-2 py-2 overflow-y-scroll no-scrollbar">
      <Button 
        v-for="id in idArray" 
        :key="id" 
        @click="scrollToSection(id)" 
        >
        {{ id }}
      </Button>
    </div>
</template>

<script setup lang="ts">
    import Button from "../components/Button.vue";

    const idArray: string[] = ['modulair bouwen', 'voordelen', 'samenstellen', 'stappenplan', 'veelgestelde vragen', 'offerte aanvragen'];

    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
</script>

<style lang="scss">
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
</style>