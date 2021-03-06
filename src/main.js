import Vue from "vue";
// 注意引入在 Vue的下面
//  ElementUI 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";


// 使用 ElementUI
Vue.use(ElementUI);

//权限拦截
import './permission'

// 消息提示的环境配置，是否为生产环境：
// false 开发环境：Vue会提供很多警告来方便调试代码。
// true 生产环境：警告却没有用，反而会增加应用的体积
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.VUE_APP_SERVICE_URL) // 开发环境 development, 生产环境 production 

//将APP.vue渲染到id=app的节点上
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
