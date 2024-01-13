<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span> Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">Sale Up to 70% off on selected iteams*</p>
              <v-btn
                variant="outlined"
                density="compact"
                height="50"
                width="200"
                style="border-radius: 30px; text-transform: none"
                >Shop Now
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 390px;
    background-image: url(../../images/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: #24ccff;
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
