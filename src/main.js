import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './style/app.css'
import router from './router'
import  './utils/rem';
import axios from'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.axios= axios;
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
    document.title = to.meta.title
    }
    next()
})
Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
