<template>
  <div class="ckeckout">
    <v-container fluid class="px-0 py-0">
      <v-row class="px-0 py-0">
        <v-col cols="7" class="px-0 py-0">
          <v-card
            elevation="0"
            height="100%"
            width="100%"
            style="padding: 60px 40px 0px 120px"
          >
            <v-card-title style="font-size: 20px; font-weight: 700">
              new-ella-demo</v-card-title
            >
            <v-breadcrumbs
              :items="['cart', 'information', 'payment']"
              style="font-size: 12px"
            >
              <template v-slot:divider>
                <v-icon color="#878484">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-text
              class="text-center"
              style="font-size: 15px; font-weight: 700; color: rgb(88, 85, 85)"
            >
              Experss Checkout
            </v-card-text>
            <v-card-actions class="px-16 d-flex">
              <v-btn
                color="blue"
                variant="elevated"
                height="50"
                width="50%"
                style="font-size: 17px; font-weight: 700"
              >
                <v-icon class="px-3" color="Complementary">mdi-basket </v-icon>

                Shop</v-btn
              >
              <v-btn
                variant="elevated"
                height="50"
                width="50%"
                color="black"
                style="font-size: 17px; font-weight: 700"
              >
                <v-icon class="px-3" color="Complementary">mdi-google </v-icon>
                PLay</v-btn
              >
            </v-card-actions>
            <v-card-text class="d-flex justify-center align-center py-8">
              <v-divider
                thickness="3"
                style="color: rgb(138, 135, 135)"
              ></v-divider>
              <span class="px-4" style="color: rgb(138, 135, 135)">OR</span>
              <v-divider
                thickness="3"
                style="color: rgb(138, 135, 135)"
              ></v-divider>
            </v-card-text>
            <div class="submit_address">
              <v-card-title> Shipping address </v-card-title>
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
                label="Country / Region"
                bg-color="white"
                variant="outlined"
                class="pt-8"
              ></v-select>

              <div
                class="d-flex align-center justify-space-between"
                style="gap: 10px"
              >
                <v-text-field
                  label="First name"
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  label="Last name"
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
              </div>
              <v-text-field
                label="Address"
                bg-color="white"
                variant="outlined"
              ></v-text-field>
              <v-text-field
                label="Apartment, suite, etc.(optional)"
                bg-color="white"
                variant="outlined"
              ></v-text-field>
              <div
                class="d-flex align-center justify-space-between"
                style="gap: 10px"
              >
                <v-text-field
                  label="city"
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  label="Governorate"
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  label="Postal code"
                  bg-color="white"
                  variant="outlined"
                ></v-text-field>
              </div>
              <div class="d-flex align-center justify-end">
                <v-btn
                  color="#0a3456"
                  variant="elevated"
                  height="65"
                  width="40%"
                  style="font-size: 22px; font-weight: 700"
                  class="my-5"
                  @click="dialog = true"
                >
                  Submit</v-btn
                >
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="5" class="px-0 py-0">
          <v-card
            elevation="0"
            class="bg-grey-lighten-3"
            height="100%"
            width="100%"
            style="padding: 60px 120px 0px 40px"
          >
            <v-card
              style="background-color: transparent"
              elevation="0"
              class="py-2 d-flex align-center justify-space-between"
              v-for="item in cartItems"
              :key="item.id"
            >
              <div>
                <v-badge :content="item.quantity">
                  <img :src="item.thumbnail" width="50" height="50" />
                </v-badge>
              </div>
              <div class="flex-grow-1">
                <v-card-title
                  style="
                    color: rgb(73, 72, 72);
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 1.2;
                    white-space: pre-wrap;
                  "
                >
                  ({{ item.title }}) Sample - {{ item.category }} For Sale
                </v-card-title>
                <v-card-text
                  style="
                    color: rgb(114, 114, 114);
                    font-size: 12px;
                    line-height: 1.2;
                    white-space: pre-wrap;
                  "
                >
                  {{ item.category }}</v-card-text
                >
              </div>
              <v-card-text>
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}
              </v-card-text>
            </v-card>
            <v-divider length="100%"></v-divider>
            <v-divider length="100%"></v-divider>

            <v-card-text
              style="font-size: 20px; font-weight: 700; color: rgb(65, 64, 64)"
              class="d-flex align-center justify-space-between"
            >
              <span> Total </span>
              <span> ${{ calcTotalPrice }} </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  <OrderSuccess :popup="dialog" v-if="dialog" @close_popup="dialog = falas" />
  </div>
</template>

<script>
import { CartStore } from "@/store/Cart.js";
import { mapState } from "pinia";
import OrderSuccess from "@/components/OrderSuccess.vue";

export default {
  components:{
    OrderSuccess
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

  data() {
    return {
      quantity: 1,
      dialog: false, 
    };
  },
};
</script>
