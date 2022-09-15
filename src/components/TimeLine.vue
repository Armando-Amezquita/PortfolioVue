<script setup >
    import { toRefs, defineProps } from 'vue';
    import AOS from 'aos';
    AOS.init({
        duration: 1000
    });

    const props = defineProps({
        id: {
            type: String 
        },
        title: {
            type: String 
        },
        description: {
            type: String 
        },
        image: {
            type: String 
        },
        technologies:{
            type: String
        },
    });
    const { title,  description, technologies, /* image */  } = toRefs(props);

</script>

<template>
    <div class="timeline__container"  data-aos="fade-up" >
            <section class="portfolio">
                <div class="portfolio__container">
                    <div class="portfolio__container-information">
                        <h3>{{ title }}</h3>
                        <p>{{ description }}</p>
                        <h3>Tecnologias utilizadas</h3>
                        <p>{{ technologies }}</p>
                    </div>
                    <!-- <picture class="portfolio__container-image">
                        <img :src="require(`@/assets/${image}`)" :alt="`${title}`">
                    </picture> -->
                </div>
                
            </section>
            <hr />
    </div>
</template>

<style scoped>
    .portfolio{
        width: 90%;
        min-height: 90vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .portfolio__container{
        display: grid;
        /* grid-template-columns: repeat(2, 1fr); */
        grid-template-columns: 40% 60%;
        gap: 1rem;
    }
    .portfolio__container-information{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2rem;
    }
    picture{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-color: #F7F9FA;
        border-radius: 1rem;
        box-shadow: 3px 13px 35px -3px rgba(0,0,0,0.52);
        margin-top: 2rem;
    }
        
        /* background-image:  url('../assets/escritorio.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */

        /* box-shadow: 0 0 10px #21f3d0, 0 0 15px #21f3d0; */
    
    .portfolio__container-image > img{
        width: 95%;
        height: 95%;
        border-radius: .5rem;
    }
    h3 {
        font-size: 1.5rem;
        color: #000;
        margin-bottom: 2rem;
    }
    p{
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
</style>