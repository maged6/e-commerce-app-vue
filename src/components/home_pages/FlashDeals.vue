<template>
  <div class="flash-deals py-16 px-5">
    <div class="title mb-8 px-5 d-flex align-center justify-space-between">
      <h2 :style="`font-weight: 900; font-size: 30px; color:${titleColor};`">
        {{ title }}
      </h2>
    </div>
    <div class="loading " v-if="!products.length">
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="px-3"  v-for="sek in 4" :key="sek">
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
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :breakpoints="breakPoints"
      :navigation="{
        prevIcon: '.prev-navigation',
        nextIcon: '.next-navigation',
      }"
    >
      <swiper-slide class="px-3" v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parant"
              style="height: 200px; overflow: hidden; position: relative"
            >
              <img
                :src="
                  selectImg[item.title] ? selectImg[item.title] : item.thumbnail
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
                width="100"
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
                  item.price - (item.discountPercentage * item.price) / 100
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
                style="border-radius: 50%; border: 1px solid rgb(135, 135, 135)"
                width="30"
                height="30"
              />
            </v-btn>
          </v-btn-toggle>
          <div>
            <v-btn
              density="compact"
              height="40"
              width="170"
              class="ml-8 mt-2"
              variant="outlined"
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
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  methods: {
    openPop(itemId) {
      this.Emitter.emit("openPop", itemId);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => {
    return {
      selectImg: {},
      breakPoints:{
        0:{
          slidesPerView : 1,
        },
        580:{
          slidesPerView : 2,
        },
        767:{
          slidesPerView : 3,
        },
        990:{
          slidesPerView : 4,
        }
      }
    };
  },
};
</script>

<style lang="scss">
.flash-deals {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: white;
    top: 50%;
    &::after {
      font-size: 13px;
      padding: 0;
      display: flex;
      text-align: center;
      justify-content: center;
      color: black;
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    margin-right: 3px !important;
  }
  .parant:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
