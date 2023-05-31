<template>
    <!-- Adding the text props
    To add the color we will use inline style and for the we will use vbinder -->
    <!-- <button :style="{background: color}" class="button">{{ text }}</button> -->

    <!-- To add an event to the button -->
    <button v-on:click=onClick() :style="{ background: color }" class="button">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },

    // Defining out method 
    methods: {
        onClick() {
            this.$emit('button-click')
        },
    }
}
</script> 