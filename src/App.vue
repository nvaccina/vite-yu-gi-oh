<script>
import axios from 'axios'
import {store} from './data/store'

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Searchbar from './components/partials/Searchbar.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
    Searchbar,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){

      axios.get(store.apiUrl, {
        params:{
          type: store.typeToSearch,
        }
      })

        .then(result => {
          store.cardsList = result.data.data

          if(store.listCardType.length === 0){
            store.cardsList.forEach(element =>{
              if(!store.listCardType.includes(element.type)){
                store.listCardType.push(element.type)
              }
            })
          }
          
        })
    }
  },
  mounted(){
    this.getApi()
  }

}
</script>

<template>

  <Header/>

  <div class="my">

    <Searchbar @startSearch="getApi"/>

    <Main/>

  </div>

  
  
</template>

<style lang="scss">
  @use './scss/main.scss';
  @use './scss/general/variables' as *;

  .my{
    background-color: $primary-color;
  }

</style>