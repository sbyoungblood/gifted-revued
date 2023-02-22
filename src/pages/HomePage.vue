<template>
  <div class="container-fluid d-flex flex-column vh-100">
    <div class="row flex-grow-1">
      <div class="col-md-3 form-col">
        <h1 class="text-center py-5 display-4">Gifted</h1>
        <form class="d-flex justify-content-center">
          <input type="text" class="form-control w-75">
        </form>
      </div>
      <div class="col-md-9 gift-col d-flex justify-content-evenly">
        <div class="row gift-row flex-grow-1">
          <div class="col-md-4 p-5">
          <div class="gift-card p-3 mt-3 d-flex flex-column justify-content-center">
            <img src="https://via.placeholder.com/250" alt="">
            <h4 class="text-center">comment here</h4>
          </div>
        </div>
        <div class="col-md-4 p-5">
          <div class="gift-card p-3 mt-3 d-flex flex-column justify-content-center">
            <img src="https://via.placeholder.com/250" alt="">
            <h4 class="text-center">comment here</h4>
          </div>
        </div>
        <div class="col-md-4 p-5">
          <div class="gift-card p-3 mt-3 d-flex flex-column justify-content-center">
            <img src="https://via.placeholder.com/250" alt="">
            <h4 class="text-center">comment here</h4>
          </div>
        </div>
        <div class="col-md-4 p-5">
          <div class="gift-card p-3 mt-3 d-flex flex-column justify-content-center">
            <img src="https://via.placeholder.com/250" alt="">
            <h4 class="text-center">comment here</h4>
          </div>
        </div>
        <div class="col-md-4 p-5">
          <div class="gift-card p-3 mt-3 d-flex flex-column justify-content-center">
            <img src="https://via.placeholder.com/250" alt="">
            <h4 class="text-center">comment here</h4>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

import { onMounted, computed, ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import {giftsService} from "../services/GiftsService.js"

export default {
  setup() {


    onMounted(() => {
      getGifts()
    })
    async function getGifts(){
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }


    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.form-col{
  background-color: #031a6b;
  color: whitesmoke;
}

.gift-col{
  background-color: #7D869C;
}

.gift-card{
  background-color: whitesmoke;
}
</style>
