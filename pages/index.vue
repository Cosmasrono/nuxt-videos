<template>
    <div>
      <button @click="toggleMenu">Toggle Menu</button>
      <nav v-if="showMenu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
    }
  }
  </script>
  
  <style>
  nav {
    display: flex;
    flex-direction: column;
    /* Additional styles for your menu */
  }
  </style>
  