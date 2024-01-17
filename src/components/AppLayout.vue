<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <MenueDrawer />
      
      <v-main
        :style="`padding-top:${
          $route.name == 'checkout-page' ? '0px' 
          : windowWidth <= 990 ?
          '60px'
          : '135px'
        } !important`"
      >
        <slot></slot>
      </v-main>

      <AppNav v-show="$route.name != 'checkout-page' && !showFixed && windowWidth > 990"  />

<ResponseveNav v-show="windowWidth <= 990  && $route.name != 'checkout-page'"/>

<FixedNav v-show="$route.name != 'checkout-page' && showFixed && windowWidth > 990" />
  
      <AppFooter v-show="$route.name != 'checkout-page'" />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import ResponseveNav from "./ResponseveNav.vue";
import MenueDrawer from "./MenueDrawer.vue";

export default {
  components: {
    AppFooter,
    AppNav,
    CartDrawer,
    FixedNav,
    ResponseveNav,
    MenueDrawer
    
  },
  data: () => {
    return {
      drawer: false,
      windowWidth: 0,
      showFixed: false
    };
  },
  mounted(){
    this.windowWidth = window.innerWidth;
    window.onresize = ()=>{
      this.windowWidth = window.innerWidth;
    }
    window.onscroll = ()=>{
      if(window.scrollY >= 150){
        this.showFixed = true
      }else{
        this.showFixed = false
      }
    }
  }
};
</script>
