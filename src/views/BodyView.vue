<template>
    <main class="main">
        <MainSection />

        <section class="knowledge">
            <h2>Conocimientos técnicos y habilidades. </h2>
            <div class="knowledge__section-left">
                <h3>Desarrollo Back-end(Servidor)</h3>
                <ul>
                    <li>Html5</li>
                    <li>Css3, Flexbox, Css Grid</li>
                    <li>Javascript</li>
                    <li>Responsive web Design(Diseño adaptable)</li>
                    <li>React.Js</li>
                    <li>Vue.Js, Vue3.Js</li>
                    <li></li>
                </ul>
            </div>
            <div class="knowledge__section-rigth">
                <h3>Desarrollo Front-end(Cliente)</h3>
            </div>
        </section>

    </main>
</template>

<script setup>
    import MainSection from '@/components/MainSection.vue';
</script>

<style scoped>
    main{
        width: 100%;
        min-height: 100vh;
        padding-top: 3rem;
    }
    .knowledge {
        min-height: 100vh;
        width: 100%;
        background-color: var(--dark-black);
    }
</style>