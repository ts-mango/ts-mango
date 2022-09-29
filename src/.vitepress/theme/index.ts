import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
