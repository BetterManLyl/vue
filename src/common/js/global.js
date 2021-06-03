//通过混入的方式 添加全局方法
let globalf = {
  data() {
    return {

    }
  },
  methods: {
    init() {
      console.log('init');
    }
  },
  created() {
    // console.log('created');

  },
}

//注意如果使用export default 则不能带大括号export default {globalf}，这样是错误的
//如果使用export ，要带上大括号 export {globalf}
export default globalf


//步骤
// 1、创建全局的方法 global.js
// 2、在main.js中通过import导入，并使用Vue.mixin()方式混入
