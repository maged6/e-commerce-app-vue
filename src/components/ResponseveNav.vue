<template>
  <div class="nav-bar">
    <v-app-bar class="white">
      <v-container>
        <v-row class="aline-center">
            <v-col cols="4" class="d-flex align-center "> 
        <v-app-bar-nav-icon @click="openMenue" ></v-app-bar-nav-icon>
        <v-icon class="ml-5" style="color: black" size="35"
        @click="openPup"
        >mdi-magnify</v-icon>
            </v-col>
            <v-col cols="4" class="d-flex align-center "> 
                <img
              src="@/images/footer-logo.webp"
              style="cursor: pointer"
              @click="this.$router.push({name: 'home'})"
            />
            </v-col>
          <v-col cols="4" class="d-flex justify-end aline-center py-8">
          
          <v-icon class="mr-1" style="color: black" size="30">mdi-account-circle-outline </v-icon>

          
          <div
                class="wishlists d-flex flex-column align-center"
                @click="openCart"
                style="cursor: pointer"
              >
          <v-icon  style="color: black" size="30">mdi-delete-outline </v-icon>

                <v-badge
                  v-if="cartItems.length"
                  :content="cartItems.length"
                  color="black"
                  offset-x="-10"
                  offset-y="-35"
                ></v-badge>
              </div>
            </v-col>
        </v-row>
        </v-container
      ></v-app-bar
    >
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
    openPup(){
      this.Emitter.emit("openPopSearch");
    },
    openMenue() {
      this.Emitter.emit("openMenue");
  }}
};
</script>