<template>
  <div class="order_success">
    <v-dialog v-model="dialog"  width="80%"  persistent="">
        <v-card class="text-center px-10 py-7">
        <div class="text-center">
          <v-icon
            size="75"
            color="green"
            style="
              background-color: white;
              color: green;
              width: 100px;
              height: 100px;
              border-radius: 50%;
              font-size: 76px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-size: 30px; font-weight: bold; color: rgb(77, 76, 76)"
        >
          Order Placed Successfuly!
        </v-card-title>
        <v-card-text style="font-size: 15px; color: rgb(128, 126, 126)"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          officia ullam reprehenderit quam impedit obcaecati, quasi atque quos
          minima ipsum alias cum facere velit illum debitis inventore quibusdam
          odit repellendus.</v-card-text
        >
        <v-card-actions class="mt-5 justify-center">
          <v-btn variant="elevated" color="blue" @click="resetData"
            >Got it!</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { CartStore } from "@/store/Cart";
import { mapActions } from "pinia";

export default {
  data: () => {
    return {
      dialog: false,
    };
  },
  props: {
    popup: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions(CartStore, ["resetItem"]),
    resetData() {
      this.resetItem();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        this.$emit("close_popup");
      }
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>