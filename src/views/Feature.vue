<template>
    <HeroFeature />

    <TextImage
        id="modulair bouwen" 
        title="Modulair bouwen"
        text="Modulair bouwen is een snelle en erg milieuvriendelijke bouwtechniek waarbij grote delen van de woning vooraf in een fabriek worden geproduceerd. Die gefabriceerde modules worden getransporteerd en vervolgens gemonteerd in een korte tijd tot één gebouw. Een groot pluspunt van modulaire huizen is hun flexibiliteit. Zo zijn ze makkelijk te demonteren of uit te breiden met andere modules. Alle elementen kunnen tot jaren nadien hergebruikt worden in andere constructies, zelfs als de aard van het gebouw verschilt."
        buttonText="Klik voor meer informatie"
        image="factory"
    />

    <TextImage 
        id="voordelen"
        title="Voordelen van een modulaire woning"
        text="De modulaire woningen van Flexwoning zorgen voor flexibele huisvesting. Deze modulaire woningen zijn geschikt voor elke doelgroep. Zoals gezegd kan een modulaire woning flexibel en snel geleverd worden. Maar wat zijn nog meer voordelen van een modulaire woning? Modulaire constructie halveert het netto afval in vergelijking met  conventionele constructie. De geoptimaliseerde omstandigheden van de productiefaciliteit resulteren in een vermindering van het aantal fouten en onopzettelijke schade. "
        buttonText="Klik voor meer informatie"
        image="house"
        variant="reversed"
    />

    <HouseTypes />
</template>

<script setup>
    import HeroFeature from "../sections/HeroFeature.vue";
    import HouseTypes from "../sections/HouseTypes.vue";
    import TextImage from "../sections/TextImage.vue";
</script>