// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js' // 追加

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 追加
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (store.state.auth && to.path === '/login') {
    next({path: '/'})
  } else if (to.matched.some(record => record.meta.requiresAuth) && !store.state.auth) {
    next({path: '/login', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})
