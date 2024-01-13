<template>
  <div class="top-categories">
    <div class="best-offers">
      <img src="@/images/cyber-banner.webp" class="w-100" />
    </div>
    <div class="categories pt-13">
      <div
        class="title-categories d-flex align-center justify-center px-5 mb-3"
      >
        <h3 class="text-center flex-grow-1">Top Categories</h3>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="ca in categories" :key="ca.title">
            <v-card elevation="0" class="text-center py-3 px-2">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  style="
                    overflow: hidden;
                    height: 170px;
                    width: 100%;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="ca.img"
                    :style="`height:100%; width: 100%;  cursor: pointer; transition: 0.5s all  ease-in-out;
                        scale: ${isHovering ? 1.05 : 1};`"
                    v-bind="props"
                  />
                </div>
              </v-hover>

              <v-card-title>
                {{ ca.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      categories: [
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
          title: "Mobile Phones",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
          title: "Labtops",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
          title: "TVS",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
          title: "PCs",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
          title: "Audio & Video",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
          title: "Gaming",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
          title: "Home Appliances",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
          title: "Kitchen",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
          title: "Cameras",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
          title: "Consumables",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
          title: "Smart Homes",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
          title: "Accessories",
        },
      ],
    };
  },
};
</script>
