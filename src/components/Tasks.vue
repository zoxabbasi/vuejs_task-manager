<template>
    <!-- Take in the prop of tasks(the array), loop through them and then take single task component for each one -->
    <!-- v-for directive to display a list, or loop through and output something -->
    <!-- we need to create a unique key when we create a list :key -->
    <div :key="task.id" v-for="task in tasks">

        <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)"
            :task="task" />
    </div>
</template>

<script>
import Task from './Task.vue'
export default {
    name: 'Tasks',
    emits: ['delete-task', 'toggle-reminder'],
    props: {
        tasks: Array,
    },
    components: {
        Task,
    }
}
</script>