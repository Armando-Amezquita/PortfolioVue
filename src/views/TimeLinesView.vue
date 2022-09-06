<template>
    <div>
        <h2 class="portfolio__title">Mis proyectos recientes &darr;</h2>
        <TimeLine 
            v-for = "project in projects"
            :key = "project.id"
            :title="project.title"
            :id=" project.id"
            :description = project.description
            :tecnologies = project.tecnologies
            :image = project.image
        />
    </div>
</template>

<script setup>
    import TimeLine from '@/components/TimeLine.vue';
    import { toRefs, defineProps } from 'vue';

    const props = defineProps({
        projects : {
            type: Array,
            default: () => [],
        }
    });
    const { projects } = toRefs(props);


</script>

<style scoped>
    div > h2{
        width: 100%;
        text-align: center;
    }
    .portfolio__title{
        margin-bottom: 3rem;
        font-size: 2rem;
    }


</style>