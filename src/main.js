// This file is the entry point to vue

// Importing createApp method from vue
import { createApp } from 'vue'

// Importing root App component which is in ./App.vue
import App from './App.vue'

import router from './router'

// Calling in the createApp and passing in the main App component and mounting it to the div with id of "app"
createApp(App).use(router).mount('#app')
