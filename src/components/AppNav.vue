<template>
  <div class="nav-bar">
    <v-app-bar class="bg-blue py-3 px-8" height="fit-content" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              src="@/images/logo.png"
              style="cursor: pointer"
              @click="$router.push({ name: 'home' })"
            />
          </v-col>

          <v-col cols="6" >
            <v-text-field
              type="search"
              outlined
              rounded
              variant="solo"
              append-inner-icon="mdi-magnify"
              placeholder="Search the store"
              persistent-placeholder
            />
          </v-col>
          <v-col cols="4">
            <div class="parent d-flex justify-space-between align-center mx-3">
              <div class="availabe">
                <span> Available 24/7 at </span>
                <br />
                <strong>(020)189-975</strong>
              </div>

              <div class="wishlists d-flex flex-column align-center">
                <v-icon style="color: orange" size="40"> mdi-heart </v-icon>

                <span style="color: orange"> wish List</span>
              </div>
              <div class="wishlists d-flex flex-column align-center">
                <v-icon style="color: orange" size="40"> mdi-account</v-icon>

                <span style="color: orange"> Sign In</span>
              </div>
              <div
                class="wishlists d-flex flex-column align-center"
                @click="openCart"
                style="cursor: pointer"
              >
                <v-icon style="color: orange" size="40"> mdi-cart</v-icon>
                <v-badge
                  v-if="cartItems.length"
                  :content="cartItems.length"
                  color="rgb(35, 7, 112)"
                  offset-x="-15"
                  offset-y="-35"
                ></v-badge>
                <span style="color: orange"> Cart </span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-1">
          <v-col cols="8">
            <ul
              class="links d-flex justify-space-between"
              style="list-style: none"
            >
              <li
                style="cursor: pointer"
                v-for="pro in singleProducts"
                :key="pro"
              >
                <router-link
                  :to="{
                    name: 'products',
                    query: { category: pro.routs, title: pro.title },
                  }"
                  style="text-decoration: none; color: white"
                >
                  {{ pro.title }}
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="4" class="d-flex justify-end pb-0" style="gap: 35px">
            <div class="help d-flex align-center" style="gap: 5px">
              <v-icon style="color: rgb(0, 0, 78)" size="30">
                mdi-face-agent
              </v-icon>

              <span> Help</span>
            </div>
            <div
              id="language-btn"
              class="lang d-flex align-center"
              style="gap: 5px; cursor: pointer"
            >
              <span v-html="selectedLangs[0].flag"></span>
              <span>
                {{ selectedLangs[0].lang }} /
                {{ selectedLangs[0].currency }}</span
              >
              <v-icon> mdi-chevron-down</v-icon>

              <v-menu activator="#language-btn">
                <v-list v-model:selected="selectedLangs" mandatory>
                  <v-list-item
                    v-for="lang in langs"
                    :key="lang.lang"
                    :value="lang"
                  >
                    <v-list-item-title
                      class="d-flex align-center px-5 py-3"
                      style="gap: 5px"
                    >
                      <span v-html="lang.flag"></span>
                      <span> {{ lang.lang }} / {{ lang.currency }}</span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import language from "@/store/language.js";
import { productsModule } from "@/store/index.js";
import { CartStore } from "@/store/Cart.js";
import { mapState } from "pinia";

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
  data() {
    return {
      selectedLangs: [
        {
          flag: language[0].flag,
          lang: language[0].lang,
          currency: language[0].currency,
        },
      ],
      langs: language,
    };
  },
};
</script>


<style lang="scss">
.v-field--active{
  padding: 0px 15px 0px  15px !important;
}
</style>