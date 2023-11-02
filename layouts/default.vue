<!-- default.vue -->

<template>
  <div id="layout">
    <NavBar />
    <main>
      <NuxtPage />
    </main>
    <Fotter />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    components: {
      NavBar,
    },
  };
</script>

<style>
  #layout {
    min-height: 100vh;
    font-family: sans-serif, monospace;
    color: #333;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #42539B;
  }
</style>