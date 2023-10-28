<template>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <NavBar />
      <div class="mx-auto max-w-3xl py-10 md:py-16">
        <NuxtPage />
      </div>
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