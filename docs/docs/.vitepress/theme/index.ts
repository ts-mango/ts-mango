import { VPTheme } from '../../../src/index'
import { h } from 'vue'

export default {
  ...VPTheme,
  enhanceApp({ app }) { },
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}
