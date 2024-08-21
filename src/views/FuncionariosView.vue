<script setup>
</script>

<template>
<main>
<h1>Registro Funcionarios</h1>
<form @submit.prevent>
<label for="">Nomes de Funcionarios:</label>
<input type="text" placeholder="funcionario1">
<input type="text" placeholder="funcionario2">
<input type="text" placeholder="funcionario3">
<input type="text" placeholder="funcionario4">
<button>
                Enviar
            </button>
</form>
</main>
</template>

<style scoped>
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
h1{
    color: rgb(126, 122, 122);
    padding: 1rem;
    gap: 10px;
    text-align: center;
}

</style>