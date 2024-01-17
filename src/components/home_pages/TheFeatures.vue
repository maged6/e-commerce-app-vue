<template>
  <div class="features py-4">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="d-flex align-center justify-center flex-column flex-sm-row">
          <v-icon class="mr-4 mb-5 mb-s-0" size="40">mdi-truck-cargo-container</v-icon>
          <h3>Free Shipping & Return</h3>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="secound d-flex align-center justify-center flex-column flex-sm-row">
          <v-icon class="mr-4 mb-5 mb-s-0" size="40">mdi-seal-variant </v-icon>
          <h3>Lowest Price Guarantee</h3>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="d-flex align-center justify-center flex-column flex-sm-row">
          <v-icon class="mr-4 mb-5 mb-s-0" size="40">mdi-medal</v-icon>
          <h3>Longest Warranties Offer</h3>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.features {
  .secound {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background-color: rgb(99, 99, 99);
      left: 0;
      top: 10%;
      transform: 1px;
      width: 1px;
      height: 70%;
    }
    &::before {
      content: "";
      position: absolute;
      background-color: rgb(99, 99, 99);
      right: 0;
      top: 10%;
      transform: 1px;
      width: 1px;
      height: 70%;
    }
  }
}
@media (max-width: 660px) {
  .features {
  .secound {
    &::after , &::before  {
      display: none;
    }}}
}
</style>
