<script setup>
</script>

<template>
    <header>
        <ul>
            <router-link to="/">Home
                <img src="../../../public/casa.svg" alt="img-home">
            </router-link>

            <router-link to="/clientes">Clientes
                <img src="../../../public/funcionario.svg" alt="img-funcionario">
            </router-link>

            <router-link to="/funcionarios">Funcionários
                <img src="../../../public/pessoa.svg" alt="img-fornecedores">
            </router-link>


            <router-link to="/vendas">Venda
                <img src="../../../public/graphic.svg" alt="">
            </router-link>


            <router-link to="/fornecedores">Fornecedores
                <img src="../../../public/Ver.svg" alt="">
            </router-link>


            <router-link to="/produtos">Produtos
                <img src="../../../public/xicara.svg" alt="">
            </router-link>

        </ul>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 2rem;
    margin: 20px auto;
    background-color: #A37953;
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
img {
    width: 100px;
    height: 80px;
    margin: auto;
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

