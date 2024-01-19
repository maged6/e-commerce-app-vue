<template> 
  <div class="Menu-drawer">
    <v-navigation-drawer
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : '400'"
      class="px-5 pt-4"
      temporary
      location="left"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
        >
          Menu
          <v-icon @click="drawer = false"> mdi-close</v-icon>
        </v-card-title>

        <v-list>
            <v-list-item class="px-0"
            v-for="cat in singleProducts" :key="cat.routs" 
            @click="$router.push({
                    name: 'products' , 
                    query: {title: cat.title  ,  category : cat.routs ,}
                    })">
                <v-list-item-title
                >
                {{ cat.title }}
                </v-list-item-title>

            </v-list-item>
        </v-list>
      </v-card>
      </v-navigation-drawer>
      </div>
</template>



<script>
import {productsModule} from '@/store/index';
import { mapState } from 'pinia';
export default {
  inject: ["Emitter"],
  props:{
    windowWidth:{
      type: Number
    }
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed:{
    ...mapState(productsModule , ["singleProducts"])
  },
  mounted() {
    this.Emitter.on("openMenue", () => {
      this.drawer = true;
    });
  },
};
</script>