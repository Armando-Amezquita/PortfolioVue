<script setup> 
    import NavBar from '@/components/NavBar.vue';
</script>

<template>
    <header>
        <NavBar class="navbar"/>
    </header>
    <body>
        <h2>Hola.. Quieres colaborar conmigo, dejame tus datos si prefieres que te contacte</h2>
        <div>
            <input type="text" placeholder="name" name="name">
            <input type="text" placeholder="email">
            <input type="text" placeholder="interes">
            <input type="text" placeholder="name">
            <!-- <button type="submit"></button> -->
        </div>
    </body>
</template>

<style scoped>
    header{
        min-height: 4rem;
        width: 100%;
        background-color: var(--dark-black);
    }
    .navbar{
        width: 90%;
        margin: 0 auto;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 90vh;    
        width: 100%;
        background-color: var(--dark-black);
    }
    div{
        display: grid;
        /* grid-template-areas: "input input"
                            "input input"
                            "textArea textArea"; */
        grid-template-columns: 1fr 1fr;
        gap: 2em;
        margin-top: 4rem;
    }
    input{
        width: 15rem;
        /* grid-area: input; */
        height: 3rem;
        border-radius: .5rem;
        border: 2px solid white;
        background-color: transparent;
        box-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE;
    }
    ::placeholder{
        color: var(--gray);
        padding-left: 1rem;
    }
    h2{
        font-size: 2rem;
        width: 60rem;
        text-align: center;
        text-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE;
    }
    textarea{
        grid-area: textArea;
    }
    /* form{
        width: 8rem;
    } */
</style>




