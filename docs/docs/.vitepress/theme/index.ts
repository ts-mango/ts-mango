import { VPTheme } from '../../../src/index'
import { h } from 'vue'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}
