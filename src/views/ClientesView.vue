<script setup>
import ClientesComp from '@/components/compViews/ClientesComp.vue';
import { ref } from 'vue';

const showModal = ref(false)
</script>

<template>
    <main>
            <h1>Registro Clientes</h1>
            <form @submit.prevent>

                <label for="">Nomes dos Cliente:</label>
                <input type="text" placeholder="Nome Cliente">
                <button>
                    Enviar
                </button>
            </form>
            <ul>
                <li>CPF:</li>
                <li>Gasto Total:</li>
                <li>Frequência:</li>
                <li>Itens Adquiridos:</li>
                <li>Valor da Últma Compra:</li>
            </ul>
        <button @click="showModal = !showModal" class="cadastro">Cadastrar Cliente</button>
        <div v-if="showModal">
            <ClientesComp @close="showModal = !showModal"/>
        </div>
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
    width: 50%;
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

ul {
    list-style: none;
    text-align: center;
    margin-top: 20px;
}</style>