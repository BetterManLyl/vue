//使用箭头函数需要注意事项
/**
 * 
 * 1、函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象
 * 2、不可以当做构造函数。也就是说，不可以使用new命令，否则会抛出要给错误
 * 3、不可以使用arguements对象，该对象在函数体内不存在，如果要用，可以使用rest参数代替
 * 4、不可以使用yiled命令，因此箭头函数不能用作Generator函数
 * 
 */

// 'use strict';

//箭头函数
let v = (v) => {
  return v
}

//判断是否是数组集合
let isArray = (obj) => Array.isArray(obj) && obj.length > 0;

//上面的箭头函数
let v1 = function v(v) {
  return v + "11"
}

//返回 num1+num2
let test1 = (num1, num2) => num1 + num2

const isEven = n => n % 2 == 0;

//返回一个新的数组，进过map处理的数组
let test2 = [1, 2, 3, 4].map(function (x) {
  return x * x
})

//test2箭头函数写法
let test3 = [1, 2, 3, 4].map(x => x * x)

//arguments用法
function test4() {
  for (let i = 0; i < arguments.length; i++) {
    console.log('item:' + arguments[i]);
  }
}

let test5 = () => {
  //   for (let i = 0; i < arguments.length; i++) {
  //     console.log('item:' + arguments[i]);
  //   }
}

//rest参数和扩展运算符.
let test6 = (...nums) => nums;

let array = [1, 2, 3, 4]

array.aa = function (aaa) {
  for (let i = 0; i < this.length; i++) {
    aaa(this[i]);
  }

}

array.aa(function (item) {
  console.log('this111是', item);
})

//this---普通函数 用于访问当前方法所属的对象
//普通函数的this跟定义无关，跟调用有关
//下面的例子中，当前方法test，所属的对象就是obj，所以this指向的就是obj
let name = "cml";
console.log('77777777777777777777777');
console.log(this);

function show() {
  console.log(this);
}
show();
//call方法强制规定this是什么
show.call('00000000')

setTimeout(() => {
  show();
}, 1000);

let obj = {
  name: 'lyl',
  //这里要注意普通函数和箭头函数中this的区别
  //普通函数的this指向obj，箭头函数的this指向外部对象
  test: function (callback) {
    console.log(this);
    console.log(this == obj);
    callback('cml');
  },
  //箭头函数
  test1: (callback) => {
    console.log(this);
    console.log(this == obj);
    callback('lyl');
    // setTimeout(function () {
    //     _this.show();
    //   console.log(this);
    // }, 1000);
    // setTimeout(() => {
    //     _this.show();
    //   console.log(this);
    // }, 2000);
  },

}

let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promise.reject('失败')

Promise.all([p1, p2]).then((result) => {
  console.log(result) //['成功了', 'success']
}).catch((error) => {
  console.log(error);
})

Promise.all([p1, p3, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error) // 失败了，打出 '失败'
})


// window.setTimeout(()=>{

// },1000)

//导出
export default {
  v,
  v1,
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  obj,
  show,
  isArray,

}
