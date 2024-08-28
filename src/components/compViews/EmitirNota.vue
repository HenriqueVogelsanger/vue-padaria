<template>
    <div class="background">
    <div class="modal">        
        <h1>Nota Fiscal</h1>
    <form @submit.prevent>
        <label for="">Nome Cliente:</label>
        <input type="text" placeholder="Nome">
        <label for="">CPF:</label>
        <input type="text" placeholder="CPF">
        <label for="">Produtos:</label>
        <input type="text" placeholder="Produtos">
        <label for="">Telefone</label>
        <input type="text" placeholder="Telefone">
        <p>VALOR TOTAL: R$: 00,00</p>
        <button @click="$emit('close')">
            IMPRIMIR
        </button>
    </form>
</div>
</div>
</template>

<style scoped>

.background{
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
z-index: 9;
background-color: rgba(0, 0, 0, 0.4);
}
.modal{
width: 50%;
height: 50%;
position: absolute;
z-index: 10;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #DCD2D2;
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