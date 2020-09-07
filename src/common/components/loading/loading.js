//引入组件
import loadingCon from './loading.vue'
//定义loading对象
const loading = {
    //install是默认的方法，当外界在use这个组件的时候，就会调用本身的install方法，同时传一个Vue这个类的参数
    install: function (Vue) {
        console.log('loading install');
        Vue.component('loading', loadingCon);
    }
}
//导出
export default loading