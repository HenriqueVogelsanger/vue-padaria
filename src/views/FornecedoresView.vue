<script setup>
import CadastroFornecedor from '@/components/compViews/CadastroFornecedor.vue';
import { ref } from 'vue';

const showModal = ref(false)

</script>

<template>
    <main>
        <div>
            <h1>Registro Fornecedor:</h1>
        <form @submit.prevent>
            <button>
                Enviar
            </button>
        </form>
        <ul>
            <li>Nome empresa:</li>
            <li>Produto Vendido:</li>
            <li>Valor Total Pago:</li>
            <li>Itens Fornecidos:</li>
        </ul>
        </div>
        <button @click="showModal = !showModal" class="cadastro">Cadastrar Fornecedor</button>
    <div v-if="showModal">
    <CadastroFornecedor @close="showModal = !showModal" /></div>

    </main>
</template>

<style scoped>

main {
    margin: auto;
    width: 40%;
    background-color: #DCD2D2;
    padding: 1rem;
    height: 50vh;
}

form {
    width: 40%;
    margin: auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 10px;
}

input {
    border: 0;
    padding: .5rem;
    border-radius: 5px;
}

button {
    border: 0;
    padding: 0.5rem;
    border-radius: 5px;
}

h1 {
    color: rgb(126, 122, 122);
    padding: 1rem;
    gap: 10px;
    text-align: center;
}

img {
    height: 20px;
    margin: center;
}
ul{
    list-style: none;
    text-align: center;
    margin-top: 20px;
}
</style>