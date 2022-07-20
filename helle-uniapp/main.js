import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

import uView from 'uview-ui'
import 'uview-ui/theme.scss';
Vue.use(uView)


const app = new Vue({
    ...App
})

require('./config/request')(app)
// console.log(app)

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif