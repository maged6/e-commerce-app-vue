<template>
  <div class="top-offer bg-grey-lighten-4 pt-5 px-5">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 px-3  pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden; border-radius: 7px; height: 320px"
            >
              <img
                src="@/images/playstations.webp"
                :style="`height: 100%; width: 100%; cursor: pointer; transition:0.7s all ease-in-out;
                   scale : ${isHovering ? 1.05 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0 px-0 mt-5 mt-sm-0 pr-lg-6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden; border-radius: 7px; height: 320px"
            >
              <img
                src="@/images/headset.webp"
                :style="`height: 100%; width: 100%; cursor: pointer; transition:0.7s all ease-in-out;
                   scale : ${isHovering ? 1.05 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4" class="py-0  mt-5 mt-lg-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden; border-radius: 7px; height: 320px"
            >
              <img
                src="@/images/chairs.webp"
                :style="`height: 100%; width: 100%; cursor: pointer; transition:0.7s all ease-in-out;
                   scale : ${isHovering ? 1.05 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" class="mt-3 px-3 pr-sm-5 ">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden; border-radius: 7px; height: 520px"
            >
              <img
                src="@/images/iphones.webp"
                :style="` height: 100%; width: 100%; cursor: pointer; transition:0.7s all ease-in-out; 
                   scale : ${isHovering ? 1.05 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" class="mt-3 pl-3 pl-sm-5 ">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden; border-radius: 7px; height: 520px"
            >
              <img
                src="@/images/laptops.webp"
                :style="`width: 100%; cursor: pointer; transition:0.7s all ease-in-out; height: 100%;
                   scale : ${isHovering ? 1.05 : 1}`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
