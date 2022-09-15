<template>
    <main class="main">
        <MainSection />
        <MainKnowledge />
        <TimeLines 
            :projects = "projects"
        />
        <ContactDescription />
    </main>
</template>

<script setup>
    import MainSection from '@/components/MainSection.vue';
    import MainKnowledge from '@/components/MainKnowledge.vue';
    import TimeLines from '@/views/TimeLinesView.vue';
    import ContactDescription from '@/components/ContactDescription.vue';
    import { computed, onMounted} from 'vue';
    import { useStore, /* mapActions */ } from 'vuex';
    const store = useStore();

    onMounted(() => {
        store.dispatch('getProjects')
    });

    const projects = computed(() => store.state.projectsDb);

</script>

<style scoped>
    main{
        width: 100%;
        min-height: 100vh;
        padding-top: 3rem;
    }
    .knowledge {
        min-height: 100vh;
        width: 100%;
        background-color: var(--dark-black);
        padding: 3rem 0;
        border-top-left-radius: 10rem;
        box-shadow: -5rem -1rem 2rem var(--gray);
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