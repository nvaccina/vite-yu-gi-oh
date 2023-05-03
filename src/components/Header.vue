<script>
export default {
  name: 'Header',

}
</script>

<template>

  <header>
    <div class="nv_container d-flex align-items-center">
      <div class="logo">
        <a href="#">
          <img src="../assets/logo_yu-gi-oh.jpg" alt="">
        </a>
        
      </div>

      <h1>Yu-Gi-Oh Api</h1>

    </div>

  </header>
  
  
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

header{
  background-color: $secondary-color;
  .nv_container{
    width: 95%;
    margin: 0 auto;
    padding: 10px 0;
    .logo{
      width: 80px;
    }
    h1{
      padding-left: 20px;
      margin: 0;
    }
    

  }
}

</style>