import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //这里放全局参数
        count:0
    },
    mutations: {
        //这里是set方法
    },
    getters: {
        //这里是get方法
    },
    actions: {

    },
    modules: {
        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
    }
})
