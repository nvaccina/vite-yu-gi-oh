
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

    <div class="card-body py-1">
      <h4 class="card-title">{{name}}</h4>
      <p class="card-text pt-1">{{archetype}}</p>
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables' as *;

  .nv_card{
    background-color: $primary-color;
    width: calc(100% / 5 - 20px);
    border: 1px solid black;
    margin: 0 10px;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover{
      transform: scale(1.1)
    }
    h4{
      color: $secondary-color;
    }
  }

</style>