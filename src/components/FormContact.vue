<template>
    <form action="" @submit.prevent="nombreAcction(obj)">
        <input type="text" placeholder="name" v-model="username.name">
        <input type="text" placeholder="lastname" v-model="username.lastname">
        <input type="text" placeholder="email" v-model="username.email">
        <button type="submit">Enviar</button>
    </form>
    {{username}}
</template>

<script >
    // import { toRefs, defineProps } from 'vue';

    // const props = defineProps({
    //     username: {
    //         name: 'Armando',
    //         lastname: 'Amezquita',
    //         email: 'a@gmail.com'
    //     }
    // })

    // const { username } = toRefs(props);
    export default {
        data(){
            return {
                username: {
                    name: 'Armando',
                    lastname: 'Amezquita',
                    email: 'a.@gmail.com'
                }
            }
        }
    }
</script>

<style scoped>
    form{
        width: 30rem;
        height: 30rem;
        background: darkcyan;
    }
</style>