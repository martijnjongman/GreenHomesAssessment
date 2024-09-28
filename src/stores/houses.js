import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHouseStore = defineStore('houses', () => {
    const houses = ref([
      {
        name: 'Standaard huis',
        type: '2-onder-1 kap',
        image: 'house1.jpg'
      },
      {
        name: 'Gezinswoning',
        type: 'Gezinswoning',
        image: 'house2.jpg'
      },
      {
        name: 'Mini tiny house',
        type: 'Kleine woning',
        image: 'house3.jpg'
      },
      {
        name: 'Tiny house',
        type: 'Kleine woning',
        image: 'house4.jpg'
      },
      {
        name: 'Grote woning',
        type: 'Gezinswoning',
        image: 'house5.jpg'
      },
      {
        name: 'Vrijstaand huis',
        type: 'Gezinswoning',
        image: 'house6.jpg'
      }
    ])

    return { houses }
  })