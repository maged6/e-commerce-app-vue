<template>
  <div class="features py-4">
    <v-row>
      <v-col cols="4">
        <div class="d-flex align-center justify-center">
          <v-icon class="mr-4" size="40">mdi-truck-cargo-container</v-icon>
          <h3>Free Shipping & Return</h3>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="secound d-flex align-center justify-center">
          <v-icon class="mr-4" size="40">mdi-seal-variant </v-icon>
          <h3>Lowest Price Guarantee</h3>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex align-center justify-center">
          <v-icon class="mr-4" size="40">mdi-medal</v-icon>
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
</style>
