// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import SV from './i18n/sv.json'
import EN from './i18n/en.json'

const i18n = createI18n({
    locale: 'SV',
    messages: {
        SV: SV,
        EN: EN
    }
  })

const app = createApp(App)

registerPlugins(app)

app.use(i18n)
app.mount('#app')
