<template>
    <div class="sidebar">
        <ul id="sidebar_menu" class="sidebar__nav">
            <li class="sidebar__name" id="menu-toggle">
                Name
                <div id="main_icon" class="sidebar__menu-icon pull-right active">
                <span></span>
                </div>
            </li>
        </ul>
        <ul class="sidebar__nav" id="sidebar">
            <li class="sidebar__menu-item"><a href="#/home" class="sidebar__menu-link">Home <span class="glyphicon glyphicon-home"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/app-designer" class="sidebar__menu-link">App Designer <span class="glyphicon glyphicon-book"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/race-sdk-access" class="sidebar__menu-link">Race SDK Access <span class="glyphicon glyphicon-cloud-download"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/race-api-explorer" class="sidebar__menu-link">Race API Explorer <span class="glyphicon glyphicon-hdd"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/app-generation-portal" class="sidebar__menu-link">App Generation Portal <span class="glyphicon glyphicon-th"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/user-managment" class="sidebar__menu-link">User Managment <span class="glyphicon glyphicon-user"></span></a></li>
            <li class="sidebar__menu-item"><a href="#/product-documentation" class="sidebar__menu-link">Product Documentation <span class="glyphicon glyphicon-file"></span></a></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'sidebar'
}
</script>
<style lang="scss">
@import './sidebar.scss';
</style>