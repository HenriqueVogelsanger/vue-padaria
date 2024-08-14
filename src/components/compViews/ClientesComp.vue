<script setup>
</script>

<template>
    <main>
        <form @submit.prevent>
            <label for="">Nome:</label>
            <input type="text" placeholder="nome">
            <label for="">Email:</label>
            <input type="text" placeholder="email">
            <label for="">Senha:</label>
            <input type="text" placeholder="senha">
            <label for="">Confirmar Senha:</label>
            <input type="text" placeholder="confirmar senha">
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
</style>