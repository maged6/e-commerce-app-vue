<template>
  <div class="banner">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="parent">
            <img src="../../images/banner-bg.jpg" class="w-100" />
            <div class="cont">
              <h3><span> Huge Saving</span> on UHD Televisions</h3>
              <p class="py-3">Sale Up to 70% off on selected iteams*</p>
              <v-btn
                variant="outlined"
                density="compact"
                height="50"
                width="200"
                style="border-radius: 30px; text-transform: none"
                >Shop Now
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    position: relative;
    .cont {
      position: absolute;
      left: 10%;
      top: 10%;
      color: white;
      width: 30%;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: #24ccff;
        }
      }
    }
  }
}
@media (max-width: 990px) {
  .banner {
  .parent {
    .cont {
      margin: 20px;
      left: 5%;
      top: 8%;
      h3 {
        font-size: 25px;
      }
    }
  }
}
}
@media (max-width: 767px) {
  .banner {
  .parent {
    .cont {
      margin: 20px;
      left: 5%;
      top: 8%;
      h3 {
        font-size: 15px;
      }
      button{
        width: 50px;
        height: 25px;
      }
    }
  }
}
}

@media (max-width: 580px) {
  .banner {
  .parent {
    .cont {
      margin: 20px;
      left: 5%;
      top: 8%;
      h3 {
        font-size: 15px ;
      }
      p{
        font-size: 10px !important;
      }
      button{
        width: 100px !important;
        height: 30px !important;
      }
    }
  }
}
}
@media (max-width: 414px) {
  .banner {
  .parent {
    .cont {
      margin: 30px;
      left: 5%;
      top: 10%;
      h3 {
        font-size: 12px ;
      }
      p{
        font-size: 5px !important;
        padding: 8px 0px 8px 0px !important;
      }
      button{
        width: 90px !important;
        height: 25px !important;
      }
    }
  }
}
}
</style>
