<template>
    <header>
        <NavBar class="navbar" />
        <div class="header_container">
            <h1 class="title">I'm a Full-Stack Developer</h1>
            <p class="header_description">Mi nombre es <span> Armando Amezquita</span>, y soy desarrollador front-end, desarrollador back-end y desarrollador de bases de datos y servidores.
            </p>
            <ButtonContact class="button"/>
            <Bubbles />
        </div>
        
    </header>
</template>

<script setup>
    import NavBar from '../components/NavBar.vue';
    import ButtonContact from '@/components/ButtonContact.vue';
    import Bubbles from '@/components/BubblesSection.vue';
    
</script>

<style scoped>
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        background-color: var(--dark-black);
        text-align: center;
        border-bottom-right-radius: 10rem;
        box-shadow: 1rem 1rem 2rem var(--gray);
        margin-bottom: 1rem;
        overflow: hidden;
    }
    .navbar{
        position: absolute;
        top: 0;
        width: 100%;
    }
    .header_container{
        width: 80%;
        padding-top: 5rem;
    }
    .title{
        margin-bottom: 3rem;
        font-size: 7rem;
        font-weight: 600;
        text-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE, 0 0 60px #1CD6CE;
    }
    .header_description{
        font-size: 1.5rem;
        color: var(--gray);
        margin-bottom: 2rem;
        overflow: hidden;
    }
    span{
        color: #1CD6CE;
        text-decoration: underline;
    }
    /* @media screen and (min-width: 400px) {
        .title{
            font-size: 5rem;
        }
    } */

</style>