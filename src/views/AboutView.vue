<template>
    <h2>
        Hola About
    </h2>
    <p>{{username}}</p>
    {{user.name}}
</template>

<script setup>
    import { reactive, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const user = reactive({
        name: 'Hola Mundo'
    });

    const username = computed(() => store.state.username);

</script>