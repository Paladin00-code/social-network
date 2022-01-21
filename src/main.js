import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import database from '../dataBase/dataBase.js'
// import { getAnalytics } from "firebase/analytics"
// import { firestorePlugin } from 'vuefire'
import { initializeApp } from "firebase/compat/app"
import firebase from 'firebase/compat/app'
import { firestorePlugin } from 'vuefire'
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCbxrS5B9t6It56ChO1M1u1HQPjcvyZXKc",
  authDomain: "social-network-1dfd8.firebaseapp.com",
  projectId: "social-network-1dfd8",
  storageBucket: "social-network-1dfd8.appspot.com",
  messagingSenderId: "231960142066",
  appId: "1:231960142066:web:d1f71e4011f1484232f06b",
  measurementId: "G-G65VVZPPYF"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router, firestorePlugin).mount('#app')
export const db = firebase.firestore()

// Vue.use(firestorePlugin)