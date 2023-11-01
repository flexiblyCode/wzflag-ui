import Vue from 'vue'
import App from './App.vue'
import wzflagUI from '../packages'
import '../packages/style/index.scss'

Vue.use(wzflagUI)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
