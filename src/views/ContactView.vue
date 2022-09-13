<script setup> 
    import NavBar from '@/components/NavBar.vue';
    import FormContact from '@/components/FormContact.vue';

    const socialNetworks = [
        {
            id: 1,
            title: "LinkedIn",
            image: `fa-brands fa-linkedin`,
            url: "https://www.linkedin.com/in/armando-amezquita-molina/"
        },
        {
            id: 2,
            title: "github",
            image: "fa-brands fa-github",
            url: "https://github.com/Armando-Amezquita"
        }
    ]

</script>

<template>
    <header>
        <NavBar class="navbar"/>
    </header>
    <body>
        <h2>Hola.. Quieres colaborar conmigo, te dejo mis redes sociales al final. 
            <br />
            O dejame tus datos si prefieres que te contacte.
        </h2>
        <FormContact />
    </body>
    <footer>
        <ul>
            <i v-for="social in socialNetworks" :key="social.id">
                <a :href="social.url">
                    <font-awesome-icon class="icons" :icon="social.image" />
                </a>
            </i>
        </ul>
    </footer>
</template>

<style scoped>
    header{
        min-height: 4rem;
        width: 100%;
        background-color: var(--dark-black);
    }
    .navbar{
        width: 90%;
        margin: 0 auto;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 90vh;    
        width: 100%;
        padding: 2rem 0;
        background-color: var(--dark-black);
    }
    h2{
        margin-bottom: 2rem;
        font-size: 2rem;
        width: 60rem;
        text-align: center;
        text-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE;
    }
    a{
        color: var(--white);   
    }
    .icons{
        font-size: 3rem;
    }
    footer{
        width: 100%;
        background-color: var(--dark-black);
        height: 4rem;
    }
    footer > ul{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 4rem;
        margin: 0 auto;
        padding-bottom: 1rem;
    }
    i {
        margin: 0 3rem;
    }
</style>




