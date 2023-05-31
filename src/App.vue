<!-- This is the root component, everything we do will basically go through this file for now
  Any components we create, will be embeded in here
  It has the template, which contains the html,
  Then script which has the logic
  Then we have the styling -->

<template>
  <div class="container">

    <!-- Embedding the component in the template -->
    <!-- <Header /> -->

    <!-- Adding "props" -->
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" />

      <router-view :showAddTask="showAddTask" ></router-view>
    <Footer />
  </div>
</template>

<script>
// Bringing the Header.vue in our App.vue
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {

    // Register the component here
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.button {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.button:focus {
  outline: none
}

.button:active {
  transform: scale(0.98);
}

.button-block {
  display: block;
  width: 100%;
}
</style>

