<template>
    <div class="header">
        <div class="row">
            <div class="col-md-12">
                <div class="header__left">
                    <a href="#/app-designer/list">
                        <img class="header__logo" src="./../../../../assets/img/logo.jpg" alt="Race Logo">
                    </a>
                </div>
                <div class="header__center">
                    <a href="#/home" class="glyphicon glyphicon-home header__home header__link"></a>
                </div>
                <div class="header__right">

                    <div class="card pull-right header__card">
                        <img src="https://secure.gravatar.com/avatar/9319b07509dc0bf003e35096b6f43d89?s=60&r=g&d=mm" 
                                class="header__profile-img img-circle col-md-4" alt="Avatar" />

                        <div class="col-md-8">
                            <b class="header__profile-name">Sri Karthik</b>
                            <span class="header__profile-title">Administrator</span> 
                            
                            <a href="#open" class="glyphicon glyphicon-menu-right header__arrow">

                            </a>
                        </div>
                </div>
                <a href="/" class="pull-right glyphicon glyphicon-question-sign header__question header__link"></a>
            </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style lang="scss">
@import './header.scss';
</style>