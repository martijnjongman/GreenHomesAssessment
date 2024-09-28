import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useQuestionsStore = defineStore('questions', () => {
    const questions = ref([
      {
        question: 'Heb ik een bouwvergunning nodig voor een modulair huis?',
        answer: 'Ongeacht het om een gewone woning gaat of het plaatsen van een klein  huisje in je tuin. Voor het bouwen moet je overal in België een bouw- of omgevingsvergunning hebben. Voor bijgebouwen zoals tuinhuizen,  serres of carports is dat meestal niet nodig als u de door uw gewest of  gemeente voorgeschreven maximale oppervlakte, hoogte en afstand tot uw  eigen woning en andere gebouwen respecteert.',
      },
      {
        question: 'Krijg ik voor modulair bouwen subsidies?',
        answer: 'Ongeacht het om een gewone woning gaat of het plaatsen van een klein  huisje in je tuin. Voor het bouwen moet je overal in België een bouw- of omgevingsvergunning hebben. Voor bijgebouwen zoals tuinhuizen,  serres of carports is dat meestal niet nodig als u de door uw gewest of  gemeente voorgeschreven maximale oppervlakte, hoogte en afstand tot uw  eigen woning en andere gebouwen respecteert.',
      },
      {
        question: 'Kan ik meerdere verdiepingen bouwen?',
        answer: 'Ongeacht het om een gewone woning gaat of het plaatsen van een klein  huisje in je tuin. Voor het bouwen moet je overal in België een bouw- of omgevingsvergunning hebben. Voor bijgebouwen zoals tuinhuizen,  serres of carports is dat meestal niet nodig als u de door uw gewest of  gemeente voorgeschreven maximale oppervlakte, hoogte en afstand tot uw  eigen woning en andere gebouwen respecteert.',
      },
      {
        question: 'Kan ik een modulair huis later uitbreiden?',
        answer: 'Ongeacht het om een gewone woning gaat of het plaatsen van een klein  huisje in je tuin. Voor het bouwen moet je overal in België een bouw- of omgevingsvergunning hebben. Voor bijgebouwen zoals tuinhuizen,  serres of carports is dat meestal niet nodig als u de door uw gewest of  gemeente voorgeschreven maximale oppervlakte, hoogte en afstand tot uw  eigen woning en andere gebouwen respecteert.',
      },
    ])

    return { questions }
  })