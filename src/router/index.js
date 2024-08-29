import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VendasView from '../views/VendasView.vue'
import ClientesView from '../views/ClientesView.vue'
import FuncionariosView from '../views/FuncionariosView.vue'
import FornecedoresView from '../views/FornecedoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: 'home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosView
    },
    {
      path: '/fornecedores',
      name: 'fornecedores',
      component: FornecedoresView
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: VendasView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/funcionarios',
      name: 'funcionarios',
      component: FuncionariosView
    }
  ]
})

export default router
