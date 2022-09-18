import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from "@/views/AdminView";
import SupportTicketView from "@/views/SupportTicketView";
import TicketSubmittedView from "@/views/TicketSubmittedView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'adminRoute',
    component: AdminView
  },
  {
    path: '/support',
    name: 'supportRoute',
    component: SupportTicketView
  },
  {
    path: '/submitted',
    name: 'submittedRoute',
    component: TicketSubmittedView
  },

]

const router = new VueRouter({
  routes
})

export default router
