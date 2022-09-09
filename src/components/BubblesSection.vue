<template>
    <div class="bubbles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
    .bubbles div{
        box-shadow: 0 0 5px #1CD6CE, 0 0 15px #1CD6CE, 0 0 30px #1CD6CE, 0 0 60px #1CD6CE;
        border-radius: 100%;
        position: absolute;
        bottom: 0;
        animation: burbuja 4s linear infinite;
    }
    .bubbles div:nth-child(1){
        width: 2rem;
        height: 2rem;
        left: 10%;
        animation-duration: 9s;
    }
    .bubbles div:nth-child(2){
        width: 5rem;
        height: 5rem;
        left: 30%;
        animation-duration: 7s;
        animation-delay: 1s;
    }
    .bubbles div:nth-child(3){
        width: 3rem;
        height: 3rem;
        left: 50%;
        animation-duration: 3s;
        animation-delay: 1.5s;
    }
    .bubbles div:nth-child(4){
        width: 3rem;
        height: 3rem;
        left: 70%;
        animation-duration: 5s;
        animation-delay: 1s;
    }
    .bubbles div:nth-child(5){
        width: 3rem;
        height: 3rem;
        left: 90%;
        animation-duration: 12s;
    }
    .bubbles div:nth-child(6){
        width: 3rem;
        height: 3rem;
        left: 85%;
        animation-duration: 12s;
    }
    .bubbles div:nth-child(7){
        width: 3rem;
        height: 3rem;
        left: 45%;
        animation-duration: 12s;
    }
    .bubbles div:nth-child(8){
        width: 3rem;
        height: 3rem;
        left: 20%;
        animation-duration: 12s;
    }
    @keyframes burbuja{
        0%{
            width: 0;
            height: 0;
            width: 2rem;
            height: 2rem; 
        }
        30%{
            width: 4rem;
            height: 4rem;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            transform: rotate(90deg);
            bottom: 100vh;
            box-shadow: 0 0 5px #1CD6CE;

        }
    }
</style>