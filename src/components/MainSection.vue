<template>
    <section class="main_section">
        <div class="main_section-left">
            <div class="wrapper">
                <h3>Soy...</h3>
                <ul>
                    <li><span>FrontEnd</span></li>
                    <li><span>BackEnd</span></li>
                    <li><span>Fullstack</span></li>
                    <li><span>Freelancer</span></li>
                </ul>
            </div>
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
        font-size: 3rem;
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
    .wrapper{
        display: inline-flex;
    }
    .wrapper > h3{
        font-size: 2.5rem;
    }
    .wrapper ul{
        line-height: 3rem;
        height: 3rem;
        overflow: hidden;
    }
    .wrapper > ul li{
        list-style: none;
        font-size: 2.5rem;
        font-weight: bold;
        color: #1CD6CE;
        position: relative;
        top: 0;
        animation: slide 6s steps(4) infinite;
    }
    @keyframes slide {
        100%{
            top: -12rem;

        }
    }

    ul li span{
        position: relative;
    }
    ul li span::after{
        left: 0;
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #F7F9FA;
        border-left: 2px solid darkblue;
        animation: typing 1.5s steps(10) infinite;
    }
    @keyframes typing {
        100%{
            left: 100%;
            margin: 0 -35px 0 35px;
        }
    }
</style>