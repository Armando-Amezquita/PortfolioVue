<template>
    <section class="contact">
            <h2>Estas interesad@ en colaborar conmigo</h2>
            <p>Siempre estoy dispuesto a escuchar nuevas ideas, oportunidades y proyectos para empezar a trabajar. </p>
            <ButtonContact class="contact__button" />
        </section>
</template>

<script setup>
    import ButtonContact from './ButtonContact.vue';
</script>

<style scoped>
    .contact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 70vh;
    }
    .contact__button{
        background-color: var(--dark-black);
        padding: 0;
        text-align: center;
        padding: .5rem 1rem;
    }
    .contact h2{
        margin: 2rem 0;
        font-size: 2rem;
        /* text-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE, 0 0 60px #1CD6CE; */
        text-decoration: underline;
    }
    .contact p {
        font-size: 1.2rem;
        color: var(--dark-black);
        margin-bottom: 2rem;
    }
</style>