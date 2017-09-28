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
                    <button class="btn btn-primary pull-right" id="show-modal" v-on:click="showModal">Create</button>
                    <!--modal -->
                    <modal name="create-app" :height="350" :resizable="true">
                            <form id="form" v-on:submit.prevent="addItem">
                                <div class="modal__container">
                                    <div class="form-group">
                                        <label for="itemName">App name</label>
                                        <input type="text" class="form-control" required name="name" id="itemName" placeholder="Enter app name" v-model="newItem.name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="itemDesc">App description</label>
                                        <input type="text" class="form-control" required name="description" id="itemDesc" placeholder="Enter app name" v-model="newItem.description" />
                                    </div>
                                    <div class="form-group">
                                        <label for="itemDesc">Launch Icon</label><br/>
                                        <div v-if="!image">
                                            <input type="file" v-on:change="onFileChange">
                                        </div>
                                        <div class="modal__logo" v-else>
                                            <img v-on:click="removeImage" class="modal__logo-img" :src="image" />
                                        </div>

                                        <span v-if="image">Click on the image to upload new</span>
                                    </div>
                                </div>
                                <div class="modal__buttons">
                                    <input type="submit" value="Create app" class="btn btn-primary" />
                                    <input type="submit" value="Cancel" class="btn btn-default" v-on:click="hideModal" />
                                </div>
                            </form>
                    </modal>
                <!--modal -->
                </div>
            </div>
            <div class="list__item-container">
                <div class="list__item" v-for="item in items">
                    <div class="row">
                        <div class="col-md-1">
                            <img v-if="item.logo" :src="item.logo" alt="app icon" />
                        </div>
                        <div class="col-md-9">
                            <a href="#app-designer/list/configure" class="apps__list-link"> {{item.name}} </a>
                            <div class="apps__list-desc">{{item.description}} </div>
                            <div class="apps__list-date">{{item.date}}</div>
                        </div>
                        <div class="col-md-2 text-right">
                            <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#createAppModal">Edit</button>
                            <button type="button" class="btn btn-primary btn-xs">Copy</button>
                            <button type="button" class="btn btn-danger btn-xs" v-on:click="removeItem(item)">Delete</button>
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

import Firebase from 'firebase'
import Vue from 'vue'
// firebase configuration
var VueFire = require('vuefire')
Vue.use(VueFire)

let config = {
  apiKey: 'AIzaSyAkvSXEKIo9kOT2NldjljPj8kEtJoSL5Xg',
  authDomain: 'mytestapp-d87cd.firebaseio.com',
  databaseURL: 'https://mytestapp-d87cd.firebaseio.com',
  storageBucket: 'mytestapp-d87cd.appspot.com'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let itemsRef = db.ref('/items')

export default {
  name: 'list',
  firebase: {
    items: itemsRef
  },
  data () {
    return {
      newItem: {
        name: '',
        description: '',
        date: 'Mon 12, 2017, 8:59 PM',
        logo: 'https://secure.gravatar.com/avatar/9319b07509dc0bf003e35096b6f43d89?s=60&r=g&d=mm'
      },
      image: ''
    }
  },
  methods: {
    addItem: function () {
      itemsRef.push(this.newItem)
      this.newItem.name = ''
      this.newItem.description = ''
      this.newItem.logo = ''
      this.image = ''
    },
    removeItem: function (item) {
      itemsRef.child(item['.key']).remove()
    },
    showModal: function () {
      this.$modal.show('create-app')
      this.$modal.resizable = true
    },
    hideModal: function () {
      this.$modal.hide('create-app')
      this.image = ''
    },
    /* eslint-disable no-unused-vars */
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage: function (file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
    /* eslint-enable no-unused-vars */
  }
}
</script>
<style lang="scss">
@import './list.scss';
@import '../../../assets/scss/modal.scss';
</style>