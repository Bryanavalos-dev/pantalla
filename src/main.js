import Vue from 'vue'
import App from './App.vue'
// import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import './assets/css/main.css'
// import App from './App.vue';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
Vue.config.productionTip = false

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/