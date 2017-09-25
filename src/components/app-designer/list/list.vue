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
                <div class="list__item" v-for="item in items">
                    <div class="row">
                        <div class="col-md-1">
                            <img src="https://secure.gravatar.com/avatar/9319b07509dc0bf003e35096b6f43d89?s=60&r=g&d=mm" alt="app icon" />
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
                <form id="form" v-on:submit.prevent="addItem()">
                    <label for="itemName">App name</label>
                    <input type="text" class="form-control" required name="name" id="itemName" placeholder="Enter app name" v-model="newItem.name" />
                    <label for="itemDesc">App description</label>
                    <input type="text" class="form-control" required name="name" id="itemDesc" placeholder="Enter app name" v-model="newItem.description" />
                    <hr/>
                    <input type="submit" value="add" class="btn btn-primary" />
                </form>
            </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>

import Firebase from 'firebase'

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
        date: 'Mon 12, 2017, 8:59 PM'
      }
    }
  },
  methods: {
    addItem: function () {
      itemsRef.push(this.newItem)
      this.newItem.name = ''
      this.newItem.description = ''
    },
    removeItem: function (item) {
      itemsRef.child(item['.key']).remove()
    }
  }
}
</script>
<style lang="scss">
@import './list.scss';
</style>