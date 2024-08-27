<script setup>
</script>

<template>
    <main>
        <div class="cadastro">        
            <h1>Cadastro Fornecedor:</h1>
        <form @submit.prevent>
            <label for="">Nome:</label>
            <input type="text" placeholder="nome">
            <label for="">Email:</label>
            <input type="text" placeholder="email">
            <label for="">Telefone:</label>
            <input type="text" placeholder="telefone">
            <label for="">CPF/CNPJ</label>
            <input type="text" placeholder="cpf cnpj">
            <button>
                Enviar
            </button>
        </form>
</div>
    </main>
</template>
<style scoped>
main {
    margin: auto;
    width: 40%;
    background-color: #DCD2D2;
    padding: 1rem;
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
    color: rgb(83, 79, 79);
    padding: 1rem;
    gap: 10px;
    text-align: center;
}
</style>