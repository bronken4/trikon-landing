// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark', // 'dark' matches the key of your dark theme
    themes: {
      dark: {
        background: "#121212",
        primary: "#FBC02D",
        secondary: "#3F51B5",
      }
    },
  },
})
