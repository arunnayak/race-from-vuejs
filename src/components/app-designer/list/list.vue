<template>
<div class="list">
<app-designer-header></app-designer-header>
    <section class="container list__apps-container">
        <div class="row">
            <div class="col-md-12">
            <div class="row">
                <div class="col-md-3">
                <div>
                    <input type="text" placeholder="Search apps" class="form-control" id="search">
                </div>
                </div>
                <div class="col-md-9">
                    <button class="btn btn-primary pull-right">Create</button>
                </div>
            </div>
            <div class="list__item-container">
                <div class="list__item">
                    <div class="row">
                        <div class="col-md-1">
                            <img src="https://secure.gravatar.com/avatar/9319b07509dc0bf003e35096b6f43d89?s=60&r=g&d=mm" alt="app icon" />
                        </div>
                        <div class="col-md-9">
                            <a href="#app-designer/list/configure" class="apps__list-link"> App name </a>
                            <div class="apps__list-desc">App desc </div>
                            <div class="apps__list-date">App date</div>
                        </div>
                        <div class="col-md-2 text-right">
                            <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#createAppModal">Edit</button>
                            <button type="button" class="btn btn-primary btn-xs">Copy</button>
                            <button type="button" class="btn btn-danger btn-xs">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="list__item">
                    <div class="row">
                        <div class="col-md-1">
                            <img src="https://secure.gravatar.com/avatar/9319b07509dc0bf003e35096b6f43d89?s=60&r=g&d=mm" alt="app icon" />
                        </div>
                        <div class="col-md-9">
                            <a href="#app-designer/list/configure" class="apps__list-link"> App name </a>
                            <div class="apps__list-desc">App desc </div>
                            <div class="apps__list-date">App date</div>
                        </div>
                        <div class="col-md-2 text-right">
                            <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#createAppModal">Edit</button>
                            <button type="button" class="btn btn-primary btn-xs">Copy</button>
                            <button type="button" class="btn btn-danger btn-xs">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
  name: 'list',
  firebase: function () {
    return {
      // items: db.ref('https://mytestapp-d87cd.firebaseio.com')
    }
  }
}
</script>
<style lang="scss">
@import './list.scss';
</style>