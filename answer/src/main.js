import Vue from 'vue'
import App from './App.vue'
//引入ElementUI组件库
import Element from 'element-ui'
//引入ElementUI组件库样式
import 'element-ui/lib/theme-chalk/index.css';
//引入mock模拟数据
import '@/mock/mockServe'
//引入仓库
import store from '@/store/index'
Vue.use(Element);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册全局事件总线（兄弟间通信）$bus
  beforeCreate(){
    Vue.prototype.$bus=this;
},
 //注册仓库:组件实例身上会多了一个属性$store属性
 store
}).$mount('#app')
