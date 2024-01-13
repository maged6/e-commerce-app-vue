<template>
  <div class="quick-view">
    <v-dialog v-model="quickView" max-width="900" :max-height="500">
      <v-icon
        class="bg-black p-4"
        style="
          position: absolute;
          top: -13px;
          right: -13px;
          z-index: 10;
          cursor: pointer;
        "
        @click="quickView = false"
        >mdi-close</v-icon
      >

      <v-card elevation="0" class="content-card">
        <v-container fluid class="bg-white">
          <v-row v-if="loading">
            <v-col cols="7">
              <v-skeleton-loader
                type="image,  image, image "
              ></v-skeleton-loader>
            </v-col>
            <v-col cols="5">
              <v-skeleton-loader
                type="article,  article,article"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-if="!loading">
            <v-col cols="7">
              <img
                :src="tab ? tab : item.thumbnail"
                style="width: 100%; height: 400px"
              />
              <v-tabs center-active height="150" v-model="tab">
                <v-tab
                  v-for="(images, i) in item.images"
                  :key="i"
                  class="mx-8"
                  :value="images"
                >
                  <img :src="images" width="70" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5">
              <v-card elevation="0">
                <v-card-title
                  class="px-0"
                  style="font-size: 22px; font-weight: 700; white-space: wrap"
                >
                  ({{ item.title }}) Sample - {{ item.category }} For Sale
                </v-card-title>
                <v-card-text class="px-0 pt-3">
                  <v-rating
                    readonly
                    v-model="item.rating"
                    half-increments
                    color="yellow-darken-3"
                    density="compact"
                    size="x"
                  >
                  </v-rating>
                  <span style="font-size: 20px"> Stock : {{ item.stock }}</span>
                </v-card-text>
                <v-card-text class="px-0">
                  <strong>
                    <del> ${{ item.price }} </del>
                    from
                    <span style="color: red; font-weight: 900">
                      ${{
                        Math.ceil(
                          item.price -
                            (item.discountPercentage * item.price) / 100
                        )
                      }}
                    </span>
                  </strong>
                </v-card-text>
                <v-card-text class="px-0">
                  {{ item.description }}
                </v-card-text>
                <v-card-text class="px-0">
                  Brand : {{ item.brand }}
                </v-card-text>
                <v-card-text class="px-0">
                  <strong> Availability: </strong>
                  {{
                    item.stock ? "Availabe in stock" : "Not Availabe in stock"
                  }}
                </v-card-text>
                <div class="quantity">
                  <p class="mb-2">Quantity :</p>
                  <div
                    style="
                      width: fit-content;
                      border: 2px solid;
                      border-radius: 30px;
                      padding: 2px;
                    "
                    class="counter px-1"
                  >
                    <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      style="
                        border: none;
                        outline: none;
                        width: 60px;
                        font-size: 15px;
                      "
                      class="text-center py-2"
                      min="1"
                      v-model="quantity"
                    />
                    <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                  </div>
                </div>
                <v-card-text class="px-0">
                  <strong> Subtotal: </strong>
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * quantity
                  }}
                </v-card-text>
                <v-card-actions class="mt-2 px-15 w-100">
                  <v-btn
                    variant="outlined"
                    density="compact"
                    style="background-color: black; color: white"
                    rounded
                    width="420"
                    height="50"
                    :loading="btnLoading"
                    @click="addTocart(item)"
                  >
                    Add To Cart
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { CartStore } from "@/store/Cart.js";
import { mapActions } from "pinia";

export default {
  inject: ["Emitter"],

  methods: {
    ...mapActions(CartStore, ["addItem"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg" , item.title);
        this.quickView = false;
      }, 1000);
    },
  },
  data: () => {
    return {
      item: {},
      quickView: false,
      quantity: 1,
      tab: "",
      loading: false,
      btnLoading: false,
    };
  },
  mounted() {
    this.Emitter.on("openPop", (data) => {
      this.loading = true;
      this.item = data;
      this.quickView = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content-card {
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
</style>
