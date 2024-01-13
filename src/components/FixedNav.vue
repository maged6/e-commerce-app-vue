<template>
  <div class="fixed-nav-bar">
    <v-app-bar class="bg-blue">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              src="@/images/logo.png"
              style="cursor: pointer"
              @click="this.$router.push('/')"
            />
          </v-col>

          <v-col cols="8">
            <ul
              class="links d-flex justify-space-between"
              style="list-style: none"
            >
              <li
                style="cursor: pointer"
                v-for="pro in singleProducts"
                :key="pro"
                class="pt-2"
              >
                <router-link
                  :to="{
                    name: 'products',
                    params: { category: pro.routs, title: pro.title },
                  }"
                  style="text-decoration: none; color: white"
                >
                  {{ pro.title }}
                </router-link>
              </li>
            </ul>
          </v-col>

          <v-col cols="2">
            <div
              class="d-flex justify-end align-center mr-3 mt-1"
              style="gap: 20px"
            >
              <v-icon style="color: white" size="35">mdi-magnify</v-icon>

              <div
                class="wishlists d-flex flex-column align-center"
                @click="openCart"
                style="cursor: pointer"
              >
                <v-icon style="color: white" size="35"> mdi-cart</v-icon>
                <v-badge
                  v-if="cartItems.length"
                  :content="cartItems.length"
                  color="red"
                  offset-x="-15"
                  offset-y="-35"
                ></v-badge>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from "@/store/index.js";
import { mapState } from "pinia";
import { CartStore } from "@/store/Cart.js";

export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["singleProducts"]),
    ...mapState(CartStore, ["cartItems"]),
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
