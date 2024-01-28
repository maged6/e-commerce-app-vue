<template>
  <app-layout>
    <router-view />
    <QuickView />
    <PoupSearch/>
    <v-snackbar
      v-model="bar"
      location="left bottom"
      max-width="400"
      height="70"
      style="left: 20px ;bottom: 20px;"
      timeout="3000"
      color="rgb(76, 175, 80)"
    > 
      {{ itemTitle }} has been added to your cart successfuly!
      <template v-slot:actions>
        <v-icon @click="bar = flase">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/AppLayout.vue";
import QuickView from "@/components/QuickView.vue";
import PoupSearch from "./components/PoupSearch.vue";


export default {
  inject: ["Emitter"],
  components: {
    AppLayout,
    QuickView,
    PoupSearch
  },
  data: () => {
    return {
      bar: false ,
      itemTitle: "",
    };
  },
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>

<style lang="scss">
*{
  margin: 0px !important;
  padding: 0px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-height: 100%;
  min-width: 100%;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-rating__wrapper {
  margin-right: 5px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
