<script>
import axios from 'axios'
import {store} from './data/store'

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Searchbar from './components/partials/Searchbar.vue'
import Loader from './components/partials/Loader.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer,
    Searchbar,
    Loader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;

      axios.get(store.apiUrl, {
        params:{
          type: store.typeToSearch,
          num: store.cardNumber,
          offset: store.cardOffset
        }
      })

        .then(result => {
          store.cardsList = result.data.data
          store.isLoading = false;

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



  <Searchbar @startSearch="getApi"/>

  <Loader v-if="store.isLoading"/>
    
  <div v-else>

    <Main/>

    <Footer @startSearch="getApi"/>

  </div>
    
  
  
</template>

<style lang="scss">
  @use './scss/main.scss';
  @use './scss/general/variables' as *;

</style>