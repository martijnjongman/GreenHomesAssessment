<template>
    <section class="max-w-screen-2xl m-auto mb-20 lg:mb-40 px-2 pt-20">
        <div class="hidden lg:flex gap-2 py-4 font-title text-sm">
            <router-link class="home hover:text-secondary-green transition" to="/home">Home</router-link>
            -
            <span class="font-bold">Modulair bouwen</span>
        </div>

        <div class="flex flex-col lg:flex-col-reverse">
            <div class="flex flex-col lg:items-center lg:flex-col-reverse">
                <InpageNavigation />

                <span class="fluid font-bold font-title m-auto">GREEN HOMES</span>
            </div>

            <div class="relative flex flex-col items-center">
                <div class="relative image-container w-full">
                    <img class="object-cover image-container w-full h-full rounded-xl" src="/public/hero-image.jpg" />

                    <div class="tooltip1 absolute hidden lg:flex">
                        <Tooltip>Bepaal zelf welke type woning je wilt hebben.</Tooltip>
                    </div>

                    <div class="tooltip2 absolute hidden lg:flex">
                        <Tooltip>Bedenk welke materialen je wilt gebruiken.</Tooltip>
                    </div>

                    <div class="tooltip3 absolute hidden lg:flex">
                        <Tooltip>Maak de woning die bij je persoonlijkheid past!</Tooltip>
                    </div>
                </div>

                <div class="flex flex-col gap-4 bg-white shadow-md mt-5 p-4 lg:p-8 rounded-xl max-w-sm md:absolute md:bottom-6">
                    <h1 class="font-bold text-3xl font-title">Stel jouw nieuwe woning samen!</h1>

                    <p class="font-text text-sm lg:text-base leading-6">Ben jij opzoek naar je nieuwe starterswoning? Bekijk de mogelijkheden van <span class="text-secondary-green font-bold">modulaire ontwerpen</span> en <span class="text-secondary-green font-bold">duurzame</span> woningen</p>

                    <div class="flex flex-col lg:flex-row gap-2 items-center">
                        <Button variant="accent" icon="arrow-right">
                            Vraag offerte aan
                        </Button>

                        <span>of lees verder</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import Button from "../components/Button.vue";
    import InpageNavigation from "../components/InpageNavigation.vue";
    import Tooltip from "../components/Tooltip.vue"
</script>

<style lang="scss">
    .image-container {
        max-height: 768px;
    }

    .fluid {
        font-size: clamp(2rem, 8vw, 12rem);
    }

    .tooltip1 {
        left: 12%;
        top: 20%;
    }

    .tooltip2 {
        left: 60%;
        top: 12%;
    }

    .tooltip3 {
        left: 75%;
        top: 65%;
    }
</style>