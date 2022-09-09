<template>
    <section class="knowledge">
            <div class="knowledge__container">            
                <h2>Conocimientos técnicos y habilidades. </h2>
                <div class="knowledge__container-sections">
                    <div class="knowledge__section-left"  data-aos="fade-up-right">
                        <h3>Desarrollo Back-end(Servidor)</h3>
                        <ul >
                            <li>Javascript.</li>
                            <li>Node.Js.</li>
                            <li>Express.Js.</li>
                            <li>MongoDb.</li>
                            <li>Moongose.</li>
                            <li>SQL.</li>
                            <li>API-RestFull.</li>
                        </ul>
                    </div>
                    <div class="knowledge__section-rigth"  data-aos="fade-up-left">
                        <h3>Desarrollo Front-end(Cliente)</h3>
                        <ul >
                            <li>Html5.</li>
                            <li>Css3, Flexbox, Css Grid.</li>
                            <li>Javascript.</li>
                            <li>Responsive web Design(Diseño adaptable).</li>
                            <li>React.Js.</li>
                            <li>Vue.Js, Vue3.Js.</li>
                            <li>Redux.</li>
                        </ul>
                    </div>
                </div>
                <div class="knowledge__section-images">
                    <img data-aos="zoom-in" src="@/assets/kisspng-node-js-javascript-server-side-scripting-font-node-js-5b203968c89182.8095874215288385048215.png" alt="">
                    <img data-aos="zoom-in" src="@/assets/kisspng-logo-brand-product-design-mongodb-inc-mongodb-stickker-5b6abb6692b4a4.5287731615337214466009.png" alt="">
                    <img data-aos="zoom-in" src="@/assets/kisspng-javascript-html5-cascading-style-sheets-css3-5ba40e8074f1c0.561934001537478272479.png" alt="">
                    <img data-aos="zoom-in" src="@/assets/kisspng-aperture-laboratories-science-technology-laborator-atom-5b509166447444.0005616615320067582804.png" alt="">
                    <img data-aos="zoom-in" src="@/assets/kisspng-vue-js-javascript-front-and-back-ends-web-browser-gulp-5b2a9db5941b40.8963458515295195416067.png" alt="">
                    <img data-aos="zoom-in" src="@/assets/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde424ee15.8061979615260584681513.png" alt="">
                </div>
            </div>
        </section>
</template>

<script setup>
    import AOS from 'aos';
    AOS.init({
        duration: 1500
    });
</script>

<style scoped>
    .knowledge {
        min-height: 100vh;
        width: 100%;
        background-color: var(--dark-black);
        padding: 3rem 0;
        border-top-left-radius: 10rem;
        border-bottom-right-radius: 10rem;
        box-shadow: -5rem -1rem 2rem var(--gray);
        margin-bottom: 4rem;
    }
    .knowledge__container{
        width: 90%;
        margin: 0 auto;
    }
    .knowledge__container h2{
        font-size: 2rem;
        text-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE, 0 0 60px #1CD6CE;
    }
    .knowledge__container-sections{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 0;
        width: 100%;
        padding: 0 1.5rem;
    }
    .knowledge__section-rigth,
    .knowledge__section-left{
        width: 50%;
    }
    
    h3{
        font-size: 1.5rem;
        color: var(--white);
        letter-spacing: .1em;
        margin-bottom: 2rem;
    }

    ul{
        list-style-type: circle;
        padding-left: 3rem;
    }
    
    li {
        font-size: 1rem;
        color: var(--gray);
        line-height: 2em;
    }
    .knowledge__section-images{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
    img{
        min-width: 7rem;
        width: auto;
        height: 6rem;
        margin-right: 1rem;
    }
</style>