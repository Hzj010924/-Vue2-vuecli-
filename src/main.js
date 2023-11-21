import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import './api/mock'
import Cookie from 'js-cookie';


Vue.config.productionTip = false

// 登录逻辑
router.beforeEach((to, from, next) => {
  // 判断token存不存在
  const token = Cookie.get('token')
  //token不存在，说明用户未登录，跳转至登录页
  if (!token && to.name !== 'login') {
    next({
      name: 'login'
    })
  }
  else if(token && to.name === 'login') {
    next({
      name: 'home'
    })
  }else{
    next()
  }
})

//全局引入
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
