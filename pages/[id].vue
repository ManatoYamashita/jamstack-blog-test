<template v-if="data">
  <h1 class="text-3xl font-semibold">
    {{ data.title }}
  </h1>
  <img
    :src="data.thumbnail?.url"
    :width="data.thumbnail?.width"
    class="mt-6 md:mt-10"
    alt=""
  />
  <div class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
    <div class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
      category: {{ data.category?.name }}
    </div>
    <div class="text-sm text-gray-700">
      {{ dateFormat(data.publishedAt ?? data.createdAt) }}
    </div>
  </div>
  <div v-html="data.content" class="prose mt-6 md:mt-10"></div>
</template>

<script setup lang="ts">
import { Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blog",
//   contentId: Array.isArray(params.id) ? params.id[0] : params.id,
    contentId: 'o0-nao3n1-xn',
});
console.log(data)
</script>