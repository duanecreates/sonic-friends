import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import AOS from 'aos';

import 'aos/dist/aos.css';

axios.defaults.baseURL = 'http://localhost:3000/';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),

  mounted() {
    AOS.init({
      once: true,
    });
  }
}).$mount('#app');
