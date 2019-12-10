import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


const a = Vue.extend({
  components: {
    App,
  },
  methods: {
    say() {
      console.log(this.$bbb)
      console.log(this.$sjodijsidjsiodajios)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
