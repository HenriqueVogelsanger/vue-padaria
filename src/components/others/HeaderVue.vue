<script setup>
</script>

<template>
    <header>
        <ul>
            <router-link to="/">Home
                <img src="../../../public/graphic.svg" alt="">
            </router-link>

            <router-link to="/funcionarios">Funcionarios
                <img src="../../../public/graphic.svg" alt="">
            </router-link>

            <router-link to="/fornecedores">Fornecedores
                <img src="../../../public/graphic.svg" alt="">
            </router-link>


            <router-link to="/produtos">Produto
                <img src="../../../public/graphic.svg" alt="">
            </router-link>


            <router-link to="/vendas">Venda
                <img src="../../../public/graphic.svg" alt="">
            </router-link>


            <router-link to="/clientes">Cliente
                <img src="../../../public/graphic.svg" alt="">
            </router-link>

        </ul>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 1rem;
    margin: 30px auto;
    background-color: #A37953;
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

a {
    list-style: none;
    width: 11%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    text-align: center;
    gap: 10px;
    color: #000000;
    font-size: 15pt;
    font-weight: bold;
    background-color: #be8552;
    border-radius: 15px;
    text-decoration: none;
}
</style>

