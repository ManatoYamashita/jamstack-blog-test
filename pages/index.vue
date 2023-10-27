<template>
  <h1 class="">Jamstack test</h1>
  <ul class="">
    <li v-for="blog in data?.contents" :key="blog.id" class="blog-data mt-3">
      <NuxtLink 
        :to="`/${blog.contentId}`"
        class="sm:transition-shadow sm:hover:shadow blog-card">
        <img
          :src="blog.thumbnail?.url"
          :width="100"
          alt=""
        />
        <div class="">
          <!-- <div class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
            category: {{ blog.category?.name }}
          </div> -->
          <div class="mt-2 font-semibold">
            <h2>{{ blog.title }}</h2>
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Blog } from "~/types/Blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blog",
});
console.log(data)
</script>

<style scoped>
.blog-data {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
}
.blog-card {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>