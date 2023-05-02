<script>
import axios from 'axios'
import {store} from './data/store'

import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        store.cardsList = result.data.data
        //console.log(result.data)
        //console.log(result.data.data);
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

  <Main/>
  
</template>

<style lang="scss">
  @use './scss/main.scss'

</style>