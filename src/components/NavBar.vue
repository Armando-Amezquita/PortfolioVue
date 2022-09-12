<template>
    <nav>
        <ul>
            <li><router-link to="/"> Inicio </router-link></li>
            <li><router-link to="/contact"> Contacto </router-link></li>
        </ul>
    </nav>
</template>

<script setup>
    
</script>

<style scoped>
    nav{
        padding: 1.2rem 2rem 0 2rem;
        width: 100%;
        height: 4rem;
    }

    ul{
        display: flex;
        justify-content: right;
        align-items: center;
    }

    li{
        list-style: none;
        margin-left: 4rem;
    }
    a{
        font-size: 1.3rem;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

</style>