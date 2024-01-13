<template>
  <div class="new-prodects py-16 px-5">
    <div class="title px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px; color: rgb(156, 0, 0)">
        New Prodects
      </h2>
    </div>
    <div class="prodects">
      <v-container fluid>
        <v-row>
          <v-col cols="7">
            <div class="loading" v-if="!products.length">
              <v-container fluid class="pt-16">
                <v-row>
                  <v-col cols="4" v-for="sek in 3" :key="sek">
                    <v-skeleton-loader
                      type="image, article ,button"
                    ></v-skeleton-loader>
                  </v-col>
                </v-row>
              </v-container>
            </div>

            <swiper
              :pagination="{ el: '.swiper-pagination', clickable: true }"
              :autoplay="{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }"
              :loop="true"
              :modules="modules"
              :slides-per-view="3"
              :space-between="20"
              class="py-13"
            >
              <swiper-slide v-for="item in products" :key="item.id">
                <v-card elevation="0" class="pb-6">
                  <v-hover v-slot="{ isHovering, props }">
                    <div
                      class="parant"
                      style="
                        height: 200px;
                        overflow: hidden;
                        position: relative;
                      "
                    >
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
                        width="80"
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
                        : item.description.split(" ").slice(0, 8).join(" ") +
                          " ..."
                    }}
                  </v-card-text>
                  <v-rating
                    readonly
                    class="py-0 pl-3"
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
                          item.price -
                            (item.discountPercentage * item.price) / 100
                        )
                      }}
                    </span>
                  </v-card-text>
                  <v-btn-toggle v-model="selectImg[item.title]" mandatory>
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
                  <div>
                    <v-btn
                      density="compact"
                      class="py-2 px-15 mt-5 ml-5"
                      variant="outlined"
                      width="30px"
                      style="text-transform: none; border-radius: 30px"
                      @click="
                        $router.push({
                          name: 'product-details',
                          params: { ProductId: item.id },
                        })
                      "
                    >
                      Choose Option
                    </v-btn>
                  </div>
                </v-card>
              </swiper-slide>
              <div class="prev-navigation"></div>
              <div class="next-navigation"></div>
              <div class="swiper-pagination"></div>
            </swiper>
          </v-col>
          <v-col cols="5">
            <img src="@/images/vr-banner.webp" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default {
  inject: ["Emitter"],

  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    openPop(itemId) {
      this.Emitter.emit("openPop", itemId);
    },
  },
  data: () => {
    return {
      selectImg: {},
    };
  },
};
</script>

<style lang="scss">
.prodects {
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }
  .parant:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
