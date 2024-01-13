<template>
  <div class="why-shop-with-us">
    <div class="title d-flex align-center justify-center pt-10">
      <span style="color: rgb(140 255 217); font-size: 25px; font-weight: 700">
        Why Shop
      </span>
      <p style="color: white; font-size: 22px; font-weight: 700">
        &nbsp; with us?
      </p>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="card in shopWithUs" :key="card.title">
          <v-card
            class="text-center"
            style="color: white; background-color: transparent"
            elevation="0"
          >
            <div>
              <img :src="card.img" />
            </div>
            <v-card-title
              style="white-space: pre-wrap; line-height: 1.2; font-weight: 700"
              >{{ card.title }}</v-card-title
            >
            <v-card-text class="pb-0" style="font-size: 15px">{{
              card.subTitle
            }}</v-card-text>
            <a style="color: rgb(207, 165, 143)" href="#">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      shopWithUs: [
        {
          img: require("@/images/free-shipping.png"),
          title: "Free Shipping On First Order",
          subTitle: "Praesent suscipit mattis facilisis.",
        },
        {
          img: require("@/images/weekly-flash-sales.png"),
          title: "Weekly Flash Sale",
          subTitle: "Praesent suscipit mattis facilisis.",
        },
        {
          img: require("@/images/discount.png"),
          title: "Anual Payment Discount",
          subTitle: "Praesent suscipit mattis facilisis.",
        },
        {
          img: require("@/images/cash-back.png"),
          title: "Cashback Reward Program",
          subTitle: "Praesent suscipit mattis facilisis.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.why-shop-with-us {
  background-image: url(@/images/why-shop-with-us-banner.webp);
  height: 390px;
  background-size: cover;
}
</style>
