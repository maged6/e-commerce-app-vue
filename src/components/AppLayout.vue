<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <AppNav v-show="$route.name != 'checkout-page'" />
      <FixedNav v-show="$route.name != 'checkout-page'" />
      <v-main
        :style="`padding-top:${
          $route.name === 'checkout-page' ? '0px' : '170px'
        } `"
      >
        <slot></slot>
      </v-main>
      <AppFooter v-show="$route.name != 'checkout-page'" />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNav from "./FixedNav.vue";

export default {
  components: {
    AppFooter,
    AppNav,
    CartDrawer,
    FixedNav,
  },
  data: () => {
    return {
      drawer: false,
    };
  },
};
</script>
