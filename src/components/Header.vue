<!-- Creating a component Header.vue -->

<template>
    <header>

        <!-- <h1>Task Tracker</h1> -->

        <!-- Adding props to the template -->
        <h1>{{ title }}</h1>

        <!-- We have added the Button compononent -->
        <!-- <Button /> -->

        <!-- Want to add the "text" and "color" of the button as props -->
        <Button v-show="homepage" @button-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" />
    </header>
</template>

<!-- Export a defualt object and give it a name of header -->
<script>
import Button from './Button.vue'

export default {
    name: 'Header',

    // Adding a prop by having an array
    // props: ['title'],

    // You can also define your props as an object
    props: {
        title: String,
        showAddTask: Boolean,
    },

    components: {
        Button,
    },
    computed: {
        homepage() {
            if(this.$route.path === '/'){
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<!-- Scoped means anything here will only be for this component -->
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>