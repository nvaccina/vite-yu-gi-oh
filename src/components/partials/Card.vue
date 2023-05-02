
<script>
export default {
  name: 'Card',
  props:{
    name: String,
    image: String,
    archetype: String,
  }

}
</script>

<template>

  <div class="nv_card text-center">
    
    <img :src="image" alt="">

    <h4>{{name}}</h4>
    <p>{{archetype}}</p>

  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

  .nv_card{
    background-color: $primary-color;
    width: calc(100% / 5 - 20px);
    min-height: 200px;
    border: 1px solid black;
    margin: 0 10px;
    margin-bottom: 20px;
    h4{
      color: $secondary-color;
      padding: 20px 0;
    }
  }

</style>