<script >
    import { mapActions,  } from 'vuex';

    export default {
        data(){
            return {
                username: {
                    name: '',
                    lastname: '',
                    email: '',
                    description: '',
                }
            }
        },
        methods: {
            ...mapActions(['createUser']),
            
        }
    }
</script>
<template>
    <form action="" @submit.prevent="createUser(username)">
        <input class="name" type="text" placeholder="Nombre" v-model="username.name">
        <input class="lastname" type="text" placeholder="Apellido" v-model="username.lastname">
        <input class="email" type="text" placeholder="Email" v-model="username.email">
        <textarea class="description" placeholder="¿Alguna sugerencia para nuestra charla?" name="description" v-model="username.description" id="" cols="30" rows="10"> </textarea>
        <button class="send" type="submit">Enviar</button>
    </form>
</template>

<style scoped>
    form{
        display: grid;
        grid-template-rows: repeat(3, auto);
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        grid-template-areas:
        "area1 area1"
        "area2 area2"
        "area3 area3"
        "area4 area4";
        padding: 1rem;
        margin: 2rem 0 0 0;
        width: 30rem;
        min-height: 10rem;
        height: auto;
    }
    .name, .lastname, .email, .textarea {
        padding: 1rem;
        border-radius: .5rem;
    }
    .email{
        grid-area: area2;
    }
    textarea{
        padding: 1rem;
        grid-area: area3;
    }
    button{
        grid-area: area4;
        font-size: 1.5rem;
        border-radius: .5rem;
        width: 80%;
        margin: 0 auto;
    }
    input, textarea{
        border-radius: .5rem;
        border: 1px solid white;
        background-color: transparent;
        box-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE;
        color: aliceblue;
        font-size: 1rem;
    }
    ::placeholder{
        color: var(--gray);
    }
    button{
        position: relative;
        padding: .5rem 1rem;
        font-size: 1.5rem;
        border-radius: .5rem;
        cursor: pointer;
        background-color: transparent;
        box-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 20px #1CD6CE;
        color: var(--white);
        border: 1.5px solid var(--white);
        transition: 1.5s;
    }
    button:hover{
        background-color: var(--white);
        border: 1.5px solid var(--dark-black);
        color: var(--dark-black);
        border-radius: 1rem;
        font-size: 1.7rem;
    }
    p{
        color: aliceblue;
        font-size: 1.5rem;
    }
</style>