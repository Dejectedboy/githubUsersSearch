//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'
//关闭vue生成提示
Vue.config.productionTip = false;

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    //安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})