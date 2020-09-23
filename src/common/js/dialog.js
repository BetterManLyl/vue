

//https://www.cnblogs.com/Kiddzz/p/8471521.html 参考博客
import Vue from "vue";
import mydialog from '../components/mydialog'

// 注册dialog
mydialog.install = function (Vue) {
    console.log('install');
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(mydialog)
    // 生成一个该子类的实例
    const instance = new ToastConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    //后面相当于三个参数，可自己定义
    // Vue.prototype.$mydialog = (msg,log, duration) => {
    //     instance.message = msg;
    //     instance.isVisable = true;
    //     console.log(log)
    //     setTimeout(() => {
    //         instance.isVisable = false;
    //     }, duration);
    // }


    Vue.prototype.$mydialog = function (msg, log, duration) {
        instance.message = msg;
        instance.isVisable = true;
        console.log(log)
        setTimeout(() => {
            instance.isVisable = false;
        }, duration);
    }
}

export default mydialog