<template>
    <router-link class="link" to="/contact"> 
        Contáctame 
    </router-link>
</template>

<style scoped>
    a{
        position: relative;
        display: inline-block;
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
    
    .link{
        text-decoration: none;
    }
    a:hover{
        background-color: var(--white);
        color: var(--dark-black);
        border-radius: 1rem;
    }
</style>