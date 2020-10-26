import { createWebHistory, createRouter } from 'vue-router';

import CreateTask from '../components/task/CreateTask.vue';
import ListTasks from '../components/task/ListTasks.vue';
import Login from '../components/login/Login.vue';

const routes = [
    { path: '/', name: 'Home', component: ListTasks },
    { path: '/create-task/', name: 'Create', component: CreateTask },
    { path: '/list-tasks/', name: 'List', component: ListTasks },
    { path: '/login', name: 'Login', component: Login },
];

const Router = createRouter({
    history: createWebHistory(),
    routes
})

export default Router