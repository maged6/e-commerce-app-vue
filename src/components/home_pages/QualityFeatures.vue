<template>
  <div class="quality-features py-13 bg-grey-lighten-2">
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" class="px-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="text-center d-flex align-center justify-center px-5"
              height="300"
              :elevation="isHovering ? 4 : 0"
              :color="isHovering ? 'blue-lighten-4' : 'white'"
              style="cursor: pointer"
            >
              <div class="parent">
                <span v-html="card.svg"></span>
                <v-card-title
                  style="
                    font-weight: 700;
                    font-size: 16px;
                    text-transform: uppercase;
                  "
                >
                  {{ card.title }}
                </v-card-title>
                <v-card-text> {{ card.des }}</v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import cards from "@/store/Card";
export default {
  data: () => {
    return {
      cards: cards,
    };
  },
};
</script>
