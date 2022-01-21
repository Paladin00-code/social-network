<template>
  <div class="login">
    <img alt="social logo" src="../assets/logo.svg">
  </div>
  <div>
    <article v-for="(location, idx) in locations" :key="idx">
  <img :src="location.image">
  <h1>{{ location.name }}</h1>
 </article>
</div>
<form @submit="addLocation(name, image)">
<input v-model="name" placeholder="Location Name">
<input v-model="image" placeholder="Location Image URL">
<button type="submit">Add New Location</button>
</form>
</template>

<script>
// @ is an alias to /src
import LogIn from '@/components/LogIn.vue'

import { db } from '../db'

export default {
  name: 'LogIn',
  data () {
   return {
     locations: [],
     name: '',      // <-- новое свойство
     image: ''      // <-- новое свойство
   }
 },
 firestore () {
   return {
     locations: db.collection('locations').orderBy('createdAt')
   }
 },
 methods: {
   addLocation (name, image) {      // <-- новый метод
     const createdAt = new Date()
     db.collection('locations').add({ name, image, createdAt })
   }
 }
}
</script>
