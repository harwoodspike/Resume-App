import { createApp } from 'vue'

import { vuesticPlugin } from '@/services/vuestic'
import 'vuestic-ui/dist/vuestic-ui.css'

import App from '@/App.vue'

createApp(App)
    .use(vuesticPlugin)
    .mount('#app')
