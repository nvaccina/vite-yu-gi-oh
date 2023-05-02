<script>
import Card from './partials/Card.vue'
import {store} from '../data/store'

export default {
  name: 'Main',
  components:{
    Card,
  },
  data(){
    return{
      store
    }
  },

}
</script>

<template>

  <main>
    <div class="nv_main-container">
      <h2>Ricerca Card</h2>
    </div>

    <div class="nv_main-container text-bg-light py-5">

      <div class="container">
        
        <div class="cardsFounded">
          <p>Found {{store.cardsList.length}} cards</p>
        </div>
        
        <div class="container-wrapper d-flex flex-wrap">
          <Card 
            v-for="card in store.cardsList"
            :key="card.id"
            :name="card.name"
            :image="card.card_images[0].image_url"
            :archetype="card.archetype || card.attribute"
          />

        </div>

        


      </div>

    </div>
    
  </main>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

  main{
    background-color: $primary-color;
    .cardsFounded{
      background-color: #212529;
      color: $secondary-color;
      margin: 0 10px;
      p{
        padding: 10px;
        font-weight: 700;
      }
    }
    .nv_main-container{
      width: 80%;
      margin: 0 auto;
    }
  }

</style>