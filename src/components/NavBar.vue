<template>
    <nav>
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
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
        justify-content: space-between;
        align-items: center;
    }

    li{
        list-style: none;
    }
    a{
        font-size: 1.3rem;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

</style>