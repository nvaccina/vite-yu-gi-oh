<script>
import {store} from '../../data/store'

export default {
  name: 'Searchbar',
  data(){
    return{
      store
    }
  },
  methods:{
    reset(){
      store.typeToSearch = null,
      store.listCardType = []
      this.$emit('startSearch')
    }
  }

}
</script>

<template>

  <div class="nv_main-container py-3 d-flex align-items-center justify-content-center">

    <select v-model="store.typeToSearch" class="form-select" aria-label="Default select example">
      <option value="" selected>Select card type</option>

      <option 
        v-for="(type, id) in store.listCardType"
        :key="id" 
        :value="type"
        
      >{{type}}</option>

     </select>

     <button type="button" class="btn btn-primary mx-4" @click="$emit('startSearch')">SEARCH</button>

     <button type="button" class="btn btn-warning" @click="reset">RESET</button>

  </div>
  
</template>

<style lang="scss" scoped>
  .form-select{
    width: 400px;
  }

</style>