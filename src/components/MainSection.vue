<template>
    <section class="main_section">
        <div class="main_section-left">
            <h3>Sobre mí</h3>
            <hr>
            <p>
                Actualmente desarrollo y programo proyectos, sitios de aplicaciones web o servidores, tanto Front-end, como Back-end.
                Me gusta estar continuamente aprendiendo nuevas habilidades en demanda y tendencias técnologicas que me ayuden a crear mejores aplicaciones.
                <br>
                Apacionado con el trabajo que realizo, soy capaz de autogestionar proyectos de manera eficaz, tengo buenas habilidades de colaboración dentro de un equipo, ofreciendo, aportando mis conocimientos y habilidades para generar nuevas ideas y soluciones.
            </p>
        </div>
        <div class="main_section-rigth">
            <img src="../assets/foto.jpg" alt="">
        </div>
    </section>
</template>

<style scoped>
    .main_section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        min-height: 90vh;
        margin: 0 auto;
        padding: 0 2rem;
        margin-bottom: 3rem;
    }
    .main_section-left{
        width: 50%;
        text-align: left;
    }
    .main_section-left h3{
        font-size: 4rem;
        color: var(--black);
    }
    .main_section-left hr{
        width: 10rem;
        margin-bottom: 2rem;
    }
    .main_section-left p{
        font-size: 1.2rem;
        color: var(--dark-black);
        margin-bottom: 2rem;
    }
    .main_section-rigth{
        width: 50%;
        text-align: right;
    }
    .main_section-rigth img{
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
    }
</style>