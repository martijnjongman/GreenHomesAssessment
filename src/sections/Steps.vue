<script setup lang="ts">
    import Step from '../components/Step.vue';
</script>

<template>
    <section id="stappenplan" class="max-w-screen-2xl m-auto px-4 mb-60 lg:mb-80">
        <div class="flex flex-col">
            <h2 class="text-2xl lg:text-4xl font-title font-bold mb-4">Stappenplan</h2>

            <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-10">
                <Step :step="1" title="Je krijgt een voorstel en prijs voor je vraag." text="Geen verrassingen bij GreenHomes: je krijgt van ons één vaste prijs voor  een modulair huis volledig volgens jouw wensen en zonder extra kosten  achteraf." />

                <Step class="translate-y-12" :step="2" title="Het plan voor een modulaire huis van je dromen." text="Samen met jou bekijken we wat je precies van je ecowoning verwacht. We  werken een plan uit en adviseren je over afwerkingsmogelijkheden,  elektriciteit, isolatie en zo meer." />

                <Step class="translate-y-24" :step="3" title="Jij bepaalt hoe er gebouwd wordt." text="Met begeleiding van een professional kan je zelf aan de slag als handige harry. Heb je liever kant-en-klaar geleverd en geplaatst?" />

                <Step class="translate-y-36" :step="4" title="Levenslang genieten." text="De woningen zijn niet enkel 120% circulair, ze zijn ook bijzonder duurzaam. Je geniet van jarenlange garantie op de  verschillende onderdelen van de constructie." />
            </div>
        </div>
    </section>
</template>