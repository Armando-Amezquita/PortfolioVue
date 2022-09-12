<template>  
    <button @click="$router.push('/contact')">
        Contactame
    </button>
</template>

<style scoped>
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
</style>