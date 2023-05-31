<template>
    <!-- We can use to conditional directive here to toggle  -->
      <AddTask v-if="showAddTask" @add-task="addTask" />
      
    <!-- Since we are passing in an array which is going to be dynamic, if it changes
              it should be sent down into tasks so we will vbind tasks to tasks data -->
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
// Bring the tasks in 
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
    
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      // To add, this.task and set it to an array where we will spread across the current tasks and then add new one
      this.tasks = [...this.tasks, data]
    },

    async deleteTask(id) {

      const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',
      })

      // To check if it's deleted form the server
      res.status === 200 ? (
        // We will reset it to something else, setting this.tasks to reset to this.tasks.filter()
        // (filter is a high order array method) which takes in a function, which will loop through tasks,
        // foreach task take task.id which is not equal to id which was passed it and return everything except that
        this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      })

      const data = await res.json()
      // We will use map as we are updating the task, we will update the reminder from true to false
      // map allows us to basically manipulate the array and return the array of whatever we want
      // in the map lets put an arrow function and foreach task lets use a conditional here and we will check to see
      // if the task.id is equal to the id that is passed is. If it is then we will return the array of objects were
      // we can spread across the initial tasks properites and change the reminder to the opposite of current task reminder
      // else we will return the inital task
      this.tasks = this.tasks.map
        (
          (task) => task.id === id ? { ...task, reminder: data.reminder } : task
        )
    },

    // Fetch data from json
    async fetchTasks() {
      const res = await fetch('api/tasks')
      const data = await res.json()
      return data
    },

    async fetchTask(id) {
      const res = await fetch(`api/${id}`)
      const data = await res.json()
      return data
    },
  },

  async created() {
    this.tasks = await this.fetchTasks()
  },
}

</script>