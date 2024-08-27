<script setup>
import ClientesComp from '@/components/compViews/ClientesComp.vue';
import { ref } from 'vue';

const showModal = ref(false)
</script>

<template>
    <main>
        <div>
            <h1>Registro Produtos</h1>
            <form @submit.prevent>

                <label for="">Nomes dos produtos:</label>
                <input type="text" placeholder="Nome produto">
                <button>
                    Enviar
                </button>
            </form>
            <ul>
                <li>Valor produto:</li>
                <li>Valor Vendido:</li>
                <li>Quantidade em estoque:</li>
                <li>Quanidade vendida:</li>
            </ul>
        </div>
        <button @click="showModal = !showModal" class="cadastro">Cadastrar Cliente</button>
        <div v-if="showModal">
            <ClientesComp />
        </div>
    </main>
</template>
    
<style scoped>
.cadastro {
    margin-top: 120px;
    width: 100px;
}

main {
    margin: auto;
    width: 85%;
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