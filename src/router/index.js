import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RegisterPage from '../components/RegisterPage.vue'
import StoreItem from '../components/StoreItem.vue'
import Cart from '../components/Cart.vue'

import IphoneXSeries from '../components/IphoneXSeries.vue'
import Iphone11Series from '../components/Iphone11Series.vue'
import Iphone12Series from '../components/Iphone12Series.vue'
import Iphone13Series from '../components/Iphone13Series.vue'


import ProfileMember3 from '../components/ProfileMember3.vue'


import BuyingXR from '../components/BuyingXR.vue'
import BuyingXS from '../components/BuyingXS.vue'
import BuyingXSMax from '../components/BuyingXSMax.vue'

import Buying11Nor from '../components/Buying11Nor.vue'
import Buying11Pro from '../components/Buying11Pro.vue'
import Buying11ProMax from '../components/Buying11ProMax.vue'


import Buying12Nor from '../components/Buying12Nor.vue'
import Buying12Pro from '../components/Buying12Pro.vue'
import Buying12ProMax from '../components/Buying12ProMax.vue'

import Buying13Nor from '../components/Buying13Nor.vue'
import Buying13Pro from '../components/Buying13Pro.vue'
import Buying13ProMax from '../components/Buying13ProMax.vue'

import Buying12Mini from '../components/Buying12Mini.vue'
import Buying13Mini from '../components/Buying13Mini.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/Store',
    name: 'StoreItem',
    component: StoreItem
  },
  {
    path: '/IphoneXSeries',
    name: 'IphoneXSeries',
    component: IphoneXSeries
  },

  {
    path: '/Iphone11Series',
    name: 'Iphone11Series',
    component: Iphone11Series
  },
  {
    path: '/Iphone12Series',
    name: 'Iphone12Series',
    component: Iphone12Series
  },
  {
    path: '/Iphone13Series',
    name: 'Iphone13Series',
    component: Iphone13Series
  },

  {
    path: '/ProfileMember3',
    name: 'ProfileMember3',
    component: ProfileMember3
  },
  {
    path: '/BuyingXR',
    name: 'BuyingXR',
    component: BuyingXR
  },
  {
    path: '/BuyingXS',
    name: 'BuyingXS',
    component: BuyingXS
  },
  {
    path: '/BuyingXSMax',
    name: 'BuyingXSMax',
    component: BuyingXSMax
  },
  {
    path: '/Buying11Nor',
    name: 'Buying11Nor',
    component: Buying11Nor
  },
  {
    path: '/Buying11Pro',
    name: 'Buying11Pro',
    component: Buying11Pro
  },
  {
    path: '/Buying11ProMax',
    name: 'Buying11ProMax',
    component: Buying11ProMax
  },
  {
    path: '/Buying12Nor',
    name: 'Buying12Nor',
    component: Buying12Nor
  },
  {
    path: '/Buying12Pro',
    name: 'Buying12Pro',
    component: Buying12Pro
  },
  {
    path: '/Buying12ProMax',
    name: 'Buying12ProMax',
    component: Buying12ProMax
  },
  {
    path: '/Buying13Nor',
    name: 'Buying13Nor',
    component: Buying13Nor
  },
  {
    path: '/Buying13Pro',
    name: 'Buying13Pro',
    component: Buying13Pro
  },
  {
    path: '/Buying13ProMax',
    name: 'Buying13ProMax',
    component: Buying13ProMax
  },
  {
    path: '/Buying12Mini',
    name: 'Buying12Mini',
    component: Buying12Mini
  },
  {
    path: '/Buying13Mini',
    name: 'Buying13Mini',
    component: Buying13Mini
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
