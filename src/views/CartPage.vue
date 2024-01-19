<template>
  <div class="card-page">
    <v-container fluid class="px-12 py-10">
      <v-col cols="12" class="pb-12">
        <h1 class="py-4">Your Cart</h1>
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
      </v-col>
      <v-row>
        <v-col clos="12" lg="8" class="pr-5">
          <v-table>
            <thead>
              <tr>
                <th class="text-left px-3">PRODECT</th>
                <th class="text-left px-3">PRICE</th>
                <th class="text-left px-3">QUANTITY</th>
                <th class="text-left px-3">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id" class="p-2">
                <td>
                  <v-row class="mx-0 align-center">
                    <v-col cols="5">
                      <img :src="item.thumbnail" class="w-100" height="200px" />
                    </v-col>
                    <v-col cols="7">
                      <v-card-title
                        class="px-0"
                        style="
                          white-space: pre-wrap;
                          font-size: 18px;
                          line-height: 1.2;
                          font-weight: 700;
                        "
                        >{{ item.title }} Sample -
                        {{ item.category }}</v-card-title
                      >
                      <v-card-text
                        class="px-0 pb-0"
                        style="font-size: 18px; font-weight: 700"
                      >
                        Category: {{ item.category }}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </td>
                <td>
                  <v-card-text class="px-0 py-3" style="font-weight: 800">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}
                  </v-card-text>
                </td>
                <td>
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
                        size="10"
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        style="
                          border: none;
                          outline: none;
                          width: 30px;
                          font-size: 13px;
                        "
                        class="text-center py-2"
                        min="1"
                        v-model="item.quantity"
                      />
                      <v-icon size="10" @click="item.quantity++"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <v-card-text class="px-0 py-3" style="font-weight: 800">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      ) * item.quantity
                    }}
                  </v-card-text>
                </td>
                <td>
                  <v-icon size="22" @click="deleteItem(item.id)"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <div class="mx-5 my-5">
            <v-icon color="black">mdi-security </v-icon>
            <span>Secure Shopping Guarantee</span>
          </div>
          <div class="mx-5 my-5">
            <img src="@/images/cart-page-cards.webp" width="30%" alt="" />
          </div>
        </v-col>
        <v-col cols="12" lg="4" class="px-2">
          <v-card elevation="0" class="ml-0">
            <v-card-title
              class="mt-3"
              style="font-size: 22px; font-weight: 800"
            >
              ORDER SUMMARY</v-card-title
            >
            <hr
              style="
                height: 2px;
                border-width: 0;
                color: black;
                background-color: black;
              "
              class="mt-3"
            />
            <v-card-text
              class="d-flex justify-space-between py-8 mt-3"
              style="font-size: 22px; font-weight: 500"
            >
              <span>Subtotal </span>
              <span> ${{ calcTotalPrice }}</span>
            </v-card-text>
            <hr style="height: 2px; color: black; background-color: black" />
            <v-card-text
              class="d-flex flex-column mt-3"
              style="font-size: 22px; font-weight: 500"
            >
              <span>Get Shipping Estimate: </span>
              <v-select
                :items="[
                  'American ',
                  'Argentina',
                  'Austria',
                  'Bolivia',
                  'Cameroon',
                  'Congo',
                  'Egypt',
                  'French',
                  'England',
                  'Germany',
                ]"
                rounded
                label="Choose Your Country"
                bg-color="white"
                variant="outlined"
                class="pt-8"
              ></v-select>

              <div class="d-flex justify-space-between align-cnter">
                <v-select
                  :items="[
                    'American ',
                    'Argentina',
                    'Austria',
                    'Bolivia',
                    'Cameroon',
                    'Congo',
                    'Egypt',
                    'French',
                    'England',
                    'Germany',
                  ]"
                  rounded
                  bg-color="white"
                  variant="outlined"
                  class="mx-1"
                ></v-select>
                <v-text-field
                  label="Postal Code"
                  rounded
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
              </div>
              <v-card-actions class="mt-3">
                <v-btn
                  variant="elevated"
                  rounded
                  color="#1877c2"
                  width="100%"
                  height="60"
                  density="copmact"
                  style="text-transform: none; font-size: 20px"
                >
                  Calculate Shipping</v-btn
                >
              </v-card-actions>
            </v-card-text>
            <hr
              style="height: 2px; color: black; background-color: black"
              class="mt-3"
            />
            <v-card-text
              class="d-flex justify-space-between py-8"
              style="font-size: 22px; font-weight: 500"
            >
              <span>Total </span>
              <span> ${{ calcTotalPrice }}</span>
            </v-card-text>

            <hr style="height: 2px; color: black; background-color: black" />
            <v-card-action class="d-flex flex-column mt-2" style="gap: 10px">
              <v-btn
                class="w-100"
                color="blue"
                height="60"
                variant="elevated"
                @click="$router.push({ name: 'checkout-page' })"
              >
                Proceed To Checkout</v-btn
              >
              <v-btn
                class="w-100"
                variant="outlined"
                color="blue"
                height="60"
                @click="$router.push({ name: 'home' })"
              >
                Continue Shopping</v-btn
              >
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { CartStore } from "@/store/Cart.js";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
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
.v-table__wrapper {
  overflow: hidden;
}
.v-field {
  padding: 0px 15px 0px 15px !important;
}

@media (max-width: 767px) {
  .card-page {
    table {
      width: 800px !important;
    }
    .v-table__wrapper {
      overflow: scroll !important;
    }
  }
}
</style>
