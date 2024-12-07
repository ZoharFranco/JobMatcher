import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';

// Import Views
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Jobs from './views/Jobs.vue';
import JobDetails from './views/JobDetails.vue'; // Import the JobDetail component

// Set up routes
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/profile', name: 'Profile', component: Profile},
    {path: '/jobs', name: 'Jobs', component: Jobs},
    {path: '/jobs/:id', name: 'JobDetail', component: JobDetails, props: true}, // Ensure dynamic route here
];

// Set up Router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
