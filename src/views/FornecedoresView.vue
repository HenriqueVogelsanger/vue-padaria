<script setup>
</script>

<template>
    <main>
        <div>
            <h1>LOGIN FORNECEDOR:</h1>
        <form @submit.prevent>
            <label for="">Nome empresa:</label>
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
        </div>
        
    </main>
</template>

<style scoped>

</style>