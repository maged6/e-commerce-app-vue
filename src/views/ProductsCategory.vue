<template>
  <div class="products-category mt-10">
    <h1 class="text-center my-8">
      {{ $route.params.title.toUpperCase().replace("-", " ") }}
    </h1>
    <v-container fluid>
      <v-lazy> 

        <v-card elevation="0" :loading="loading" class="pt-5" min-height="700px"> 
        <v-row v-if="loading">
            <v-col cols="3" v-for="sek in 4" :key="sek"  >
            <v-skeleton-loader  type="image, article ,button" ></v-skeleton-loader>
          </v-col>
        </v-row>
            <v-row v-if="!loading">
                <v-col cols="3" v-for="item in ProductsCategory" :key="item.id" >
          <v-card elevation="0" class="pb-6">
            <v-hover v-slot="{ isHovering, props }">
              <div class="parant" style="height: 200px; overflow: hidden; position: relative;">
                <img
                  :src="
                    selectImg[item.title]
                      ? selectImg[item.title]
                      : item.thumbnail
                  "
                  width="100%"
                  height="100%"
                  :style="`cursor: pointer; transition: 0.5s all ease-in-out;  scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                  v-bind="props"
                />
                <v-btn
                        density="compact"
                        class="quick-view-btn"
                        color="whigt"
                        height="40"
                        width="120"
                        style="
                          text-transform: none;
                          position: absolute;
                          left: 50%;
                          top: 50%;
                          opacity: 0;
                          transform: translate(-50%, -50%);
                        "
                        rounded
                        @click="openPop(item)"
                      >
                        Quick View
                      </v-btn>
              </div>
            </v-hover>
            <v-card-text style="height: 30px">
              {{
                item.description.split(" ").length <= 10
                  ? item.description
                  : item.description.split(" ").slice(0, 8).join(" ") + " ..."
              }}
            </v-card-text>
            <v-rating
              readonly
              class="py-5 pl-3"
              v-model="item.rating"
              half-increments
              color="yellow-darken-3"
              density="compact"
              size="x-small"
            >
            </v-rating>
            <v-card-text class="py-0">
              <del> ${{ item.price }} </del>
              from
              <span style="color: red; font-weight: 900">
                ${{
                  Math.ceil(
                    item.price - (item.discountPercentage * item.price) / 100
                  )
                }}
              </span>
            </v-card-text>
            <v-btn-toggle v-model="selectImg[item.title]">
              <v-btn
                v-for="(img, index) in item.images"
                :key="index"
                :value="img"
                size="x-small"
              >
                <img
                  :src="img"
                  style="
                    border-radius: 50%;
                    border: 1px solid rgb(135, 135, 135);
                  "
                  width="30"
                  height="30"
                />
              </v-btn>
            </v-btn-toggle>
            <div class="text-center">
              <v-btn
                density="compact"
                height="40px"
                width="220px"
                class="my-3"
                variant="outlined"
                style="text-transform: none; border-radius: 30px"
                @click="$router.push({
              name:'product-details' , 
              params: { ProductId : item.id},
              })"
              >
                Choose Option
              </v-btn>
            </div>
          </v-card>
        </v-col>
            </v-row>
        </v-card>
      </v-lazy>

    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/store/index";
import { mapActions } from "pinia";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],

  data: () => {
    return {
      selectImg: {},
      loading: false,
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
 
    openPop(itemId) {
      this.Emitter.emit("openPop", itemId);
  },
  },
  computed: {
    ...mapState(productsModule, ["ProductsCategory"]),
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
};
</script>


<style lang="scss">

  .parant:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }

</style>