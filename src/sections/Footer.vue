<template>
    <section class="max-w-screen-2xl m-auto px-4 border-t-4 border-secondary-green">
        <div class="flex flex-col lg:items-center">
            <div class="flex flex-col lg:flex-row gap-5 justify-between mb-8 w-full lg:px-48 lg:py-12">
                <img class="w-56 h-56 hover:scale-110" src="/logo-light.svg">

                <ul class="flex flex-col gap-4 lg:gap-2 mb-8 font-bold text-lg text-primary-green">
                    Contactgegevens
                    <li class="text-dark-grey font-normal text-lg">Nieuwe straat 7a,  2743 GH Steendijk</li>
                    <li class="text-dark-grey font-normal text-lg">06 92433123</li>
                    <li class="text-dark-grey font-normal text-lg">nietindenacht@mailen.com</li>
                </ul>

                <ul class="flex flex-col gap-4 lg:gap-2 font-bold text-lg text-primary-green">
                    Navigatie
                    <li class="text-dark-grey font-normal text-lg hover:text-secondary-green"><router-link to="/home/">Home</router-link></li>
                    <li class="text-dark-grey font-normal text-lg hover:text-secondary-green"><router-link to="/GreenHomesAssessment/">Modulair bouwen</router-link></li>
                    <li class="text-dark-grey font-normal text-lg">Over ons</li>
                    <li class="text-dark-grey font-normal text-lg">Contact</li>
                </ul>
            </div>

            <span>Alle rechten voorbehouden | Privacy | Cookies</span>
        </div>
    </section>
</template>