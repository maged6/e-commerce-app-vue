<template>
  <div class="cart-drawer">
    <v-navigation-drawer
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : '400'"
      class="px-2 pt-3"
      temporary
      location="right"
    >
      <v-card class="px-4" elevation="0">
        <v-card-title
          class="px-0 d-flex justify-space-between"
          style="font-size: 17px; font-weight: bold"
        >
          Shopping Cart
          <v-icon @click="drawer = false"> mdi-close</v-icon>
        </v-card-title>
        <v-card-text class="px-0 py-0"
          >{{ cartItems.length }} items
        </v-card-text>
        <v-card-text class="px-0" v-if="!cartItems.length">
          Free shipping for all orders over $10000 !
        </v-card-text>
        <v-card-text class="text-center" v-if="!cartItems.length">
          Your cart is empty
        </v-card-text>
        <div
          class="bar-parent mt-6"
          style="position: relative"
          v-if="cartItems.length"
        >
          <v-icon
            :color="`${
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? '#ff9800'
                : '#4CAF50'
            }`"
            size="30"
            :style="`position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;`"
            >mdi-truck</v-icon
          >
          <v-progress-linear
            :color="`${
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? 'red'
                : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            }`"
            height="10"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            striped
          ></v-progress-linear>
        </div>
        <v-card-text
          class="px-0"
          v-if="cartItems.length && 10000 - calcTotalPrice > 0"
        >
          Only ${{ 10000 - calcTotalPrice }} away for Free Shipping</v-card-text
        >
        <v-card-text
          class="px-0"
          v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
        >
          Your order now is included Free Shipping</v-card-text
        >
        <v-card-actions v-if="!cartItems.length">
          <v-btn
            variant="outlined"
            style="
              border-radius: 30px;
              text-transform: none;
              font-size: 15px;
              font-weight: 600;
              border-color: rgb(124, 124, 124);
            "
            color="whigt"
            density="compact"
            width="500"
            height="45"
            @click="drawer = false"
          >
            Continue Shopping
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        elevation="0"
        class="px-0 mt-5 item-card"
        v-if="cartItems.length"
        max-height="380"
        style="overflow-y: auto"
      >
        <v-container class="px-1">
          <v-row
            v-for="item in cartItems"
            :key="item.id"
            class="mx-0 align-center"
          >
            <v-col cols="12" sm="5">
              <img :src="item.thumbnail" class="w-100" style="height: 100%;" />
            </v-col>
            <v-col cols="12" sm="7" class="px-3 py-3">
              <v-card-title
                class="px-0"
                style="white-space: pre-wrap; font-size: 14px; line-height: 1.2"
                >{{ item.title }} Sample - {{ item.category }}</v-card-title
              >
              <v-card-text class="px-0 pb-0">
                Category: {{ item.category }}
              </v-card-text>
              <v-card-text class="px-0 py-3" style="font-weight: 800">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}
              </v-card-text>

              <div class="d-flex justify-space-between align-center">
                <div
                  style="
                    width: fit-content;
                    border: 2px solid;
                    border-radius: 30px;
                  "
                  class="counter px-1"
                >
                  <v-icon
                    size="15"
                    @click="item.quantity > 1 ? item.quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 40px;
                      font-size: 13px;
                    "
                    class="text-center py-2"
                    min="1"
                    v-model="item.quantity"
                  />
                  <v-icon size="15" @click="item.quantity++">mdi-plus</v-icon>
                </div>
                <v-icon size="22" @click="deleteItem(item.id)"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card elevation="0" class="mt-5" v-if="cartItems.length">
        <v-card-actions
          class="flex-column justify-center align-center"
          style="gap: 10px"
        >
          <v-btn
            style="text-transform: none; border-radius: 30px"
            variant="elevated"
            elevation="0"
            density="compact"
            height="45"
            color="blue"
            width="100%"
            @click="$router.push({ name: 'checkout-page' })"
          >
            Check Out</v-btn
          >

          <v-btn
            style="text-transform: none; border-radius: 30px"
            variant="outlined"
            density="compact"
            height="45"
            color="blue"
            width="100%"
            @click="$router.push({ name: 'cart-page' })"
          >
            View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { CartStore } from "@/store/Cart.js";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  props:{
    windowWidth:{
      type: Number
    }
  },
  computed: {
    ...mapState(CartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(CartStore, ["getCartItem", "deleteItem"]),
  },
  data() {
    return {
      drawer: false,
      quantity: 1,
    };
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
    this.getCartItem();
  },
};
</script>

<style lang="scss">
.item-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(134, 217, 255);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: #2196f3;
  }
}

@media (max-width: 820px) {
  .cart-drawer{
  .item-card{
   max-height: 700px !important;

  }

}
}
@media (max-width: 400px) {
  .cart-drawer{
  .item-card{
   max-height: 1700px !important;

  }

}
}
</style>
