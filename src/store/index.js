import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//参考博客
//https://www.jianshu.com/p/eb23c72ab02a
export default new Vuex.Store({
    //state：存储状态。也就是变量；
    state: {
        //这里放全局参数
        demoValue: '',
        testValue: ''
    },
    //提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，
    //但不支持异步操作。第一个参数默认是state。外部调用方式：
    //store.commit('SET_AGE', 18)。和vue中的methods类似。
    mutations: {
        //这里是set方法
        setDemoValue(state, demoValue) {
            state.demoValue = demoValue
        },
        setTestValue(state, testValue) {
            state.testValue = testValue
        }
    },
    //getters：派生状态。也就是set、get中的get，有两个可选参数：
    //state、getters分别可以获取state中的变量和其他的getters。
    //外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
    getters: {
        //这里是get方法
        getDemoValue: state => state.demoValue,
        getTestValue:state=> state.testValue,
    },
    actions: {

    },
})
