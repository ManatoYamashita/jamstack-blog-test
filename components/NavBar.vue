<template>
    <nav>
        <div>            
            <nuxt-link to="/"><img src="@/assets/logo-white.png" alt="sekiken-logo"></nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/member">Member</nuxt-link>
            <nuxt-link to="/publish">Publish</nuxt-link>
            <nuxt-link to="/other">Other</nuxt-link>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #000;
        color: #fff;
        padding: 10px 20px;
    }
    nav div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav div a {
        color: #fff;
        text-decoration: none;
    }
    a:hover {
        color: #42539B;
    }
    nav div a img {
        width: 100px;
    }
</style>