<script>
export default {
  name: 'Header',

}
</script>

<template>
  <div class="nv_container d-flex align-items-center">
    <div class="logo">
      <img src="../assets/logo_yu-gi-oh.jpg" alt="">
    </div>

    <h1>Yu-Gi-Oh Api</h1>

  </div>
  
  
</template>

<style lang="scss" scoped>
  .nv_container{
    width: 95%;
    margin: 0 auto;
    padding: 10px 0;
    .logo{
      width: 70px;
    }
    h1{
      padding-left: 20px;
      margin: 0;
    }
    

  }
 

</style>