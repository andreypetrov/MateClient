<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success p-0">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="container">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/admin" exact>
            <a class="nav-link pr-3"><i class="fa fa-users ml-1 mr-2"></i> Ученици</a>
          </router-link>
          <router-link class="nav-item pr-3" tag="li" to="/exams" exact>
            <a class="nav-link"><i class="fa fa-file-text-o  ml-1 mr-2"></i> Изпити</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  };
</script>

<style scoped>
  .nav-link:hover, .navbar-nav .router-link-active > .nav-link{
    border-bottom: 3px solid #fff;
    color: #fff;
    background-color: #33ab61;
  }
</style>
