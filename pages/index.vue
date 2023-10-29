<!-- index.vue -->

<template>
    <div>
      <div class="cover">
        <div class="title">
          <h1>東京都市大学 関研究室 <br>
            情報セキュリティ</h1>
          <h2>"つながる"にもっと安心を</h2>
        </div>
      </div>
        <blogs />
        <ProfessorComponent />
        <AboutComponent />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .cover {
    /* background-image: url('/cover.jpg');
    background-size: cover;
    background-position: center center; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
  }
  .cover .title {
    /* 画面の左下に配置する */
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5rem;

  }
  .cover h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: Dela Gothic One, monospace;
    line-height: 1;
  }
  .cover h2 {
    font-size: 1.5rem;
    font-family: serif;
  }
</style>