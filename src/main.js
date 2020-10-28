
import Vue from "vue"
import App from './App'
import router from './router'
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
// HTTP导入使得页面不显示
Vue.use(VueAxios, axios)
import api from "./api/http"
Vue.use(VueDirectiveImagePreviewer);
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$api=api;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
