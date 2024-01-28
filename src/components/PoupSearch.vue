<template>
  <div class="poup-search">
    <v-dialog v-model="openPop"  max-width="400" :max-height="500" >
      <v-icon
        class="bg-black p-4"
        style="
          position: absolute;
          top: -13px;
          right: -13px;
          z-index: 10;
          cursor: pointer;
        "
        @click="openPop = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content-card px-4 py-5">
        <v-container fluid class="bg-white">
            <v-text-field
              type="search"
              append-inner-icon="mdi-magnify"
              placeholder="Search in category"
              persistent-placeholder
              @input="getSearch(searchTerm)"
              v-model="searchTerm"
            />
          <v-list>
            <v-list-item
              class="px-0"
              v-for="cat in filteredProducts"
              :key="cat.routs"
              @click="
                $router.push({
                  name: 'products',
                  query: { title: cat.title, category: cat.routs },
                }),
                openPop = false
              "
            >
              <v-list-item-title>
                {{ cat.title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item-title v-if="!filteredProducts.length">Category Not Found</v-list-item-title>
          </v-list>
        </v-container>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
import { productsModule } from "@/store/index.js";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["singleProducts"]),
    filteredProducts() {
      return this.searchProducts.filter(cat =>
        cat.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    getSearch(search){
        this.searchTerm = search
    }
  },
  data: () => {
    return {
      openPop: false,
      searchProducts: [],
      searchTerm: ''
    };
  },
  mounted() {
    this.Emitter.on("openPopSearch", () => {
      this.openPop = true;
      this.searchProducts = this.singleProducts
      this.searchTerm = ''
    });
  },
};
</script>
