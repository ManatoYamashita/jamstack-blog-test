<!-- トップページにあるブログリスト -->

<script setup lang="ts">
    import { Blog } from "~/types/blog";

    const { data } = await useMicroCMSGetList<Blog>({
        endpoint: "blog",
    });
    console.log(data)
</script>

<template>
    <div>
        <div>
            <img src="@/assets/tcu_yc.jpg" alt="blog">
        </div>

        <article>
            <h2>活動報告</h2>
            <ul class="blogs">
                <li v-for="blog in data?.contents" :key="blog.id" class="blog-data">
                    <NuxtLink :to="`/${blog.id}`" class="blog-card">
                    <div class="article">
                        <div><h3 class="blog-title">{{ blog.title }}</h3></div>
                        <div class="blog-date">{{ dateFormat(blog.publishedAt ?? blog.createdAt) }}</div>
                    </div>
                    </NuxtLink>
                </li>
            </ul>
            <nuxt-link to="/blogs">もっと見る</nuxt-link>
        </article>
    </div>
</template>

<style scoped>
    article {
        margin: 0 auto;
        width: 100%;
        height: 100vh;
    }
    img {
        width: 10rem;
        object-fit: cover;
    }
</style>