<template>
    <div class="timeline__container">
            <section class="portfolio">
                <div class="portfolio__container">
                    <div class="portfolio__container-information">
                        <h3>{{ title }}</h3>
                        <p>{{ description }}</p>
                        <p>{{ tecnologies }}</p>
                        <p>{{ image }}</p>
                    </div>
                    <picture class="portfolio__container-image">
                        <img :src="require(`@/assets/${image}`)" :alt="`${title}`">
                    </picture>
                </div>
                
            </section>
            <hr />
    </div>
</template>

<script setup>
    import { toRefs, defineProps } from 'vue';
    const props = defineProps({
        id: {
            type: Number 
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
        tecnologies:{
            type: String
        }
    });

    console.log(props.image)

    const { title,  description, tecnologies, image } = toRefs(props);

</script>

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
        background-color: #cecece;
        border-radius: 1rem;
    }
        
        /* background-image:  url('../assets/escritorio.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; */

        /* box-shadow: 0 0 10px #21f3d0, 0 0 15px #21f3d0; */
    
    .portfolio__container-image > img{
        width: 90%;
        height: 90%;
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