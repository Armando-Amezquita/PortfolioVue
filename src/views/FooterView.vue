<template>
    <footer>
        <p class="footer__section-left">
            Si quieres preguntar sobre mis servicios, o solamente saludarme, no dudes en contactarme. A continuacion te adjunto mis redes sociales y correo electronico:
            <br>
            Saludos... 
        </p>
        <ul class="footer__section-rigth">
            <li v-for="social in socialNetworks" :key="social.id">
                <a href="">
                    <!-- <img :src="`@/assets/${social.image.src}`" :alt="social.image.alt"> -->
                    <!-- <img src="@/assets/linkedin.png" :alt="social.image.alt"> -->
                    <img :src="`@/assets/${social.image.src}`" :alt="social.image.alt">
                    <!-- <p class="prueba">{{social.image}}</p> -->
                </a>
                    <!-- <img v-bind:src="`@/assets/${social.image}`" :alt="social.image.alt">
                    <img v-bind:src="`@/assets/${i}`" :alt="social.image.alt"> -->
            </li>
        </ul>
    </footer>
</template>

<script setup>

    const socialNetworks = [
        {
            id: 1,
            title: "LinkedIn",
            image: {
                src: "linkedin.png",
                alt: "linkeding"
            }
        },
        {
            id: 2,
            title: "github",
            image: {
                src: "email.png",
                alt: "email"
            }
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
        color: var(--white);
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
    li{
        list-style: none;
        color: aliceblue;
    }
    
    img{
        width: 2rem;
        height: 2rem;
    }
    .prueba{
        color: aliceblue;
    }
</style>