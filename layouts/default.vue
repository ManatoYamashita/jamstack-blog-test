<!-- default.vue -->

<template>
    <div>
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
  a:hover {
    color: #42539B;
  }
</style>