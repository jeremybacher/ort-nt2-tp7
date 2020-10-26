import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './bootstrap'

createApp(App)
.use(Router)
.use(VuelidatePlugin)
.use(VueAxios, axios)
.mount('#app')
