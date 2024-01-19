<template>
  <div class="app-footer"  >
    <v-footer :app="true" color="grey-lighten-2"  absolute >
      <v-container fluid>
        <v-row class="pt-16  text-center">
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card style="background-color: transparent" class="text-start mx-10 mt-5" elevation="0">
              <v-card-title style="font-weight: 700">Shop</v-card-title>

              <v-card-text
                class="pt-2  "
                style="color: grey"
                v-for="pro in singleProducts"
                :key="pro"
              >
                <router-link
                  :to="{
                    name: 'products',
                    query: { category: pro.routs, title: pro.title },
                  }"
                  style="text-decoration: none; color: grey"
                >
                  {{ pro.title }}
                </router-link>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card style="background-color: transparent"  class="text-start mx-10 mt-10" elevation="0">
              <v-card-title style="font-weight: 700"
                >FURTHER INFO.</v-card-title
              >
              <v-card-text class="pt-2" style="color: grey">About</v-card-text>
              <v-card-text class="pt-2" style="color: grey"
                >Customer Service</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Reward Proram</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Shipping & Returns</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Privacy Policy</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Terms & Conditions</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey">Blog</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card style="background-color: transparent"   class="text-start mx-10 mt-10" elevation="0">
              <v-card-title style="font-weight: 700"
                >CUSTOMER SERVICE</v-card-title
              >
              <v-card-text class="pt-2" style="color: grey"
                >Search Terms</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Advanced Search</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Orders And Returns</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Contact Us</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Theme FAQs</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Consultant</v-card-text
              >
              <v-card-text class="pt-2" style="color: grey"
                >Store Locations
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card style="background-color: transparent" class="text-start mx-10 mt-10" elevation="0">
              <img
                src="@/images/footer-logo.webp"
                style="cursor: pointer"
                @click="$router.push({ name: 'home' })"
              />
              <v-card-text
                class="px-0 py-5 d-flex justify-start"
                style="color: grey; gap: 10px"
              >
                <span> <v-icon>mdi-map-marker </v-icon></span>
                <span>
                  193 Gaser AL Swes Street <br />
                  Cairo , Egypt</span
                >
              </v-card-text>
              <v-card-text
                class="pt-2 px-0 d-flex justify-start"
                style="color: grey; gap: 10px"
              >
                <span> <v-icon>mdi-phone </v-icon></span>
                <span> Call us at (+2) 0127 648 8051</span>
              </v-card-text>
              <v-card-text
                class="px-0 pt-5 d-flex justify-start"
                style="color: grey; gap: 10px"
              >
                <span> <v-icon>mdi-email </v-icon></span>
                <span> Magedabdalmashi66@gmail.com </span>
              </v-card-text>

              <v-card-text
                class="py-5 d-flex justify-space-between align-center"
                style="color: rgb(73, 73, 73)"
              >
                <span
                  class="d-flex align-center justify-center"
                  style="
                    margin-right: 10px;
                    height: 50px;
                    width: 50px;
                    background-color: rgb(65, 65, 65);
                    margin-top: 2px;
                    border-radius: 50%;
                  "
                  ><v-icon color="white" size="30px">mdi-facebook</v-icon></span
                >
                <span
                  class="d-flex align-center justify-center"
                  style="
                    margin-right: 10px;
                    height: 50px;
                    width: 50px;
                    background-color: rgb(65, 65, 65);
                    margin-top: 2px;
                    border-radius: 50%;
                  "
                  ><v-icon color="white" size="30px"
                    >mdi-instagram</v-icon
                  ></span
                >
                <span
                  class="d-flex align-center justify-center"
                  style="
                    margin-right: 10px;
                    height: 50px;
                    width: 50px;
                    background-color: rgb(65, 65, 65);
                    margin-top: 2px;
                    border-radius: 50%;
                  "
                  ><v-icon color="white" size="30px">mdi-snapchat</v-icon></span
                >
                <span
                  class="d-flex align-center justify-center"
                  style="
                    margin-right: 10px;
                    height: 50px;
                    width: 50px;
                    background-color: rgb(65, 65, 65);
                    margin-top: 2px;
                    border-radius: 50%;
                  "
                  ><v-icon color="white" size="30px"
                    >mdi-pinterest</v-icon
                  ></span
                >
                <span
                  class="d-flex align-center justify-center"
                  style="
                    margin-right: 10px;
                    height: 50px;
                    width: 50px;
                    background-color: rgb(65, 65, 65);
                    margin-top: 2px;
                    border-radius: 50%;
                  "
                  ><v-icon color="white" size="30px">mdi-twitter</v-icon></span
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col clos="3"></v-col>
          <v-col cols="6">
            <div class="mt-11 text-center">
              <img class="w-100" 
                src="https://new-ella-demo.myshopify.com/cdn/shop/files/trust_551fa8e0-5f24-4fbc-bf22-74c01b859a01.png?v=1639984732"
              />
            </div>
          </v-col>
          <v-col clos="3"></v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
import { productsModule } from "@/store/index.js";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(productsModule, ["singleProducts"]),
  },
};
</script>

<style lang="scss">
.app-footer{
  .v-footer{
    bottom: -450px !important;

  }

}
@media (max-width: 820px) {
  .app-footer{
  .v-footer{
    bottom: -740px !important;

  }

}
}
@media (max-width: 790px) {
  .app-footer{
  .v-footer{
    bottom: -740px !important;

  }

}
}
@media (max-width: 600px) {
  .app-footer{
  .v-footer{
    bottom: -740px !important;

  }

}
}
@media (max-width: 500px) {
  .app-footer{
  .v-footer{
    bottom: -1270px !important;

  }

}
}
</style>