<script setup>
import EmitirNota from '@/components/compViews/EmitirNota.vue';
import { ref } from 'vue';

const showModal = ref(false)
</script>

<template>
    <main>
        <div>
            <h1>Registro Vendas</h1>
            <form @submit.prevent>
                <input type="date" placeholder="data"><img src="../../../public/seta.svg" alt="">
                <label for="">Balanço</label>
            </form>
            <ul>
                <li><b>Lucro:</b></li>
                <li><b>Número de Vendas:</b></li>
                <li><b>Gastos:</b></li>
            </ul>
        </div>
        <button @click="showModal = !showModal" class="cadastro">Emitir Nota Fiscal</button>
    <div v-if="showModal">
    <EmitirNota @close="showModal = !showModal" /></div>
    </main>
</template> 

<style scoped>
main {
    margin: auto;
    width: 85%;
    background-color: #DCD2D2;
    padding: 1rem;
    height: 50vh;
    align-items: center;

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
ul{
    list-style: none;
    text-align: center;
    margin-top: 20px;
    align-items: left;
    background-color: white;
    width: 30%;
    margin-left: 35%;

}
li{
    text-align: left;
    margin-left: 3%;
}

</style>