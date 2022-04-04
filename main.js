import App from './App'
import store from './store'

import Vue from 'vue'
import uView from 'uview-ui'
import TuniaoUI from 'tuniao-ui'
import member from './common/common.js'

Vue.config.productionTip = false
import attention from "@/components/attention/attention.vue"

let vuexStore = require('@/store/$t.mixin.js')
Vue.mixin(vuexStore)


Vue.component("my-attention",attention);
Vue.use(uView)
Vue.use(TuniaoUI)
Vue.prototype.$member = member;

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
}) 


app.$mount()
