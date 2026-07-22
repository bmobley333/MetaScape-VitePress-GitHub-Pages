import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import SupaFlexTableViewer from './components/SupaFlexTableViewer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('SupaFlexTableViewer', SupaFlexTableViewer)
  }
}
