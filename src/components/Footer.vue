<template>
    <footer>
        <p>Copyrights &copy; 2021</p>

        <!-- Adding router-link so that the pages doesn't load everytime we click on a link -->
        <router-link to="/about">About</router-link>
    </footer>
</template>

<style scoped>
a {
    color: #333
}

footer {
    margin-top: 30px;
    text-align: center;
}
</style>