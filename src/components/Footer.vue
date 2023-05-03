<script>
import {store} from '../data/store'

export default {
  name: 'Footer',
  data(){
    return{
      store
    }
  },
  methods:{
    nextPrev(value){
      store.cardOffset += value;
      this.$emit('startSearch')
    }
  }

}
</script>

<template>

  <div class="container d-flex justify-content-center my-5">
    <button @click="nextPrev(-store.cardNumber)" v-if="store.cardOffset" type="button" class="btn btn-dark me-3">Prev</button>
    <button @click="nextPrev(store.cardNumber)" type="button" class="btn btn-dark">Next</button>
  </div>
  
</template>

<style lang="scss" scoped>



</style>