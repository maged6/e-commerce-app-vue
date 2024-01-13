<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffer />
    <FlashDeals
      :products="products"
      title="Flash Deals"
      titleColor="rgb(156, 0, 0)"
    />
    <TopCategories />
    <NewProducts :products="lapTops" />
    <QualityFeatures />
    <FlashDeals
      :products="mobilePhone"
      title="Mobile Phone"
      titleColor="black"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img src="@/images/band-left-cover.webp" class="w-100" />
        </v-col>
        <v-col cols="6">
          <img src="@/images/band-right-cover.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
    <FlashDeals
      :products="homeDecoration"
      title="Home Decoration"
      titleColor="black"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <img src="@/images/tv-banner.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>

    <FlashDeals
      :products="skincare"
      title="Skincare"
      titleColor="rgb(156, 0, 0)"
    />

    <v-container fluid>
      <v-row>
        <v-col cols="12" >
          <img src="@/images/sale-skin.webp"  height="400px" class="w-100" />
        </v-col>
      </v-row>
    </v-container>

    <FlashDeals
      :products="fragrances"
      title="Fragrances"
      titleColor="black"
    />
    <WhyShopWithUS/>
  </div>
</template>

<script>
import UpperBanner from "@/components/home_pages/UpperBanner.vue";
import TheFeatures from "@/components/home_pages/TheFeatures.vue";
import TopOffer from "@/components/home_pages/TopOffer.vue";
import FlashDeals from "@/components/home_pages/FlashDeals.vue";
import TopCategories from "@/components/home_pages/TopCategories.vue";
import NewProducts from "@/components/home_pages/NewProducts.vue";
import QualityFeatures from "@/components/home_pages/QualityFeatures.vue";
import WhyShopWithUS from "@/components/home_pages/WhyShopWithUS.vue";

import { productsModule } from "@/store/index.js";
import { mapActions } from "pinia";
import { mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffer,
    FlashDeals,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUS,
  },
  computed: {
    ...mapState(productsModule, ["products", "lapTops", "mobilePhone" ,"homeDecoration" , "skincare", "fragrances", "groceries"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts" ]),

  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
