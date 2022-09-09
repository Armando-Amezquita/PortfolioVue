<template>
    <footer>
        <p class="footer__section-left">
            Si quieres preguntar sobre mis servicios, o solamente saludarme, no dudes en contactarme. A continuacion te adjunto mis redes sociales y correo electronico:
            <br>
            Saludos... 
        </p>
        <ul class="footer__section-rigth">
            <i v-for="social in socialNetworks" :key="social.id">
                <a href="">
                    <font-awesome-icon class="icons fa-solid fa-money-check-dollar fa-flip" :icon="social.image" />
                </a>
                    <!-- <img v-bind:src="`@/assets/${social.image}`" :alt="social.image.alt">
                    <img v-bind:src="`@/assets/${i}`" :alt="social.image.alt"> -->
            </i>
        </ul>
    </footer>
</template>

<script setup>

    const socialNetworks = [
        {
            id: 1,
            title: "LinkedIn",
            image: `fa-brands fa-linkedin`,
        },
        {
            id: 2,
            title: "github",
            image: "fa-brands fa-github"
        },
        {
            id: 3,
            title: "gmail",
            image: "fa-regular fa-envelope"
        },
        {
            id: 4,
            title: "vue",
            image: "fa-brands fa-vuejs"
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