<script setup>
import CadastroFuncionario from '@/components/compViews/CadastroFuncionario.vue';
import { ref } from 'vue';

const showModal = ref(false)
</script>

<template>

    <button @click="showModal = !showModal" class="cadastro">Cadastrar Funcionário</button>
    <div v-if="showModal">
    <CadastroFuncionario /></div>
</template>

<style scoped>
.cadastro{
    margin-top: 60px;
    margin-left: 20px;
    width: 100px;
}
</style>   