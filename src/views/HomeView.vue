<script setup>
import LoginFuncionario from '@/components/compViews/LoginFuncionario.vue';
import { ref } from 'vue';

const showModal = ref(false)
</script>

<template>
  <main>
    <div class="img">
    <img src="../../../public/paes-padarias-copacabana-rio-de-janeiro.jpg" alt="">
  </div>
    <div class="texto">
    <h1>PADARIA SANTO PÂO</h1>
    <p>Em um cantinho acolhedor da cidade, a Padaria Celeste se destaca como um verdadeiro refúgio para os amantes de pão fresco e delícias artesanais. Ao entrar, somos recebidos pelo aroma irresistível de pães assados na hora, que se mistura com o calor convidativo do ambiente. As prateleiras são um desfile de produtos cuidadosamente preparados: 
      pães crocantes, croissants dourados e uma variedade de bolos e tortas que parecem saídos de um sonho!</p>
    </div>
    <div class="topnav">
      <nav>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </nav>
    </div>

    <button @click="showModal = !showModal" class="cadastro">Entrar</button>
    <div v-if="showModal">
    <LoginFuncionario @close="showModal = !showModal" /></div>

  
  </main>
</template>

   




<style scoped>

main{
  width: 90%;
  margin: auto;
  display: flex;
}

.img{
  width: 60%;
}

.img > img{
  border-radius: 15px;
  width: 100%;
}

.texto{
  width: 40%;
  padding: 1.5rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

button{
  height: 35px;
}

</style>