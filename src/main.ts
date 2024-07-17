import './assets/css/satoshi.css'
import './assets/css/app.css'
import './style.css'
// import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/translation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(i18n)

app.mount('#app')
