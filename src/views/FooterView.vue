<template>
    <footer>
        <p class="footer__section-left">
            Si quieres preguntar sobre mis servicios, o solamente saludarme, no dudes en contactarme. A continuacion te adjunto mis redes sociales y correo electronico:
            <br>
            Saludos... 
        </p>
        <ul class="footer__section-rigth">
            <i v-for="social in socialNetworks" :key="social.id">
                <a :href="social.url" target="_blank">      
                <!-- <router-link to="https://www.linkedin.com/in/armando-amezquita-molina/" target="_blank">       -->
                    <font-awesome-icon class="icons fa-solid fa-money-check-dollar fa-flip" :icon="social.image" />
                </a>
            </i>
        </ul>
        <!-- <a href="mailto:rafa@gmail.com?Subject=Interesado%20en%20el%20curso">Contactar por correo</a> -->
    </footer>
</template>

<script setup>

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
        },
        {
            id: 3,
            title: "gmail",
            image: "fa-regular fa-envelope"
        }
    ]
</script>

<style scoped>
    footer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        min-height: 30vh;
        background-color: var(--dark-black);
    }
    .footer__section-left,
    .footer__section-rigth{
        width: 40%;
        text-align: center;
    }
    .footer__section-left{
        color: var(--gray);
    }
    .footer__section-rigth{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    p{
        font-size: 1.2rem;
        color: var(--dark-black);
    } 
    .icons{
        color: aliceblue;
        font-size: 3rem;
        animation-duration: 3s;
        /* box-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE;
        border-radius: 50%; */
    }
</style>