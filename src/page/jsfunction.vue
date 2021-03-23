<template>
  <div>
    js常用方法总结
    <div>
      <h1>Array常用方法</h1>
      <button @click="array_slice">slice</button>
      <button @click="array_toString">toString</button>
      <button @click="array_valueOf">valueOf</button>
      <button @click="array_indexOf">indexOf</button>
      <button @click="array_lastindexOf">lastindexOf</button>
      <button @click="array_push">push</button>
      <button @click="array_pop">pop</button>
      <button @click="array_shift">shift</button>
      <button @click="array_unshift">unshift</button>
      <button @click="array_reverse">reverse</button>
      <button @click="array_sort">sort</button>
      <button @click="array_filter">filter</button>
      <button @click="array_forEach">forEach</button>
      <button @click="array_splice">splice</button>
      <button @click="array_join">join</button>
      <button @click="array_concat">concat</button>

      <h1>String常用方法</h1>
      <button @click="string_indexOf">indexOf</button>
      <button @click="string_trim">trim</button>
      <button @click="string_toUpperCase">toUpperCase</button>
      <button @click="string_toLowerCase">toLowerCase</button>
      <button @click="string_slice">slice</button>
      <button @click="string_substring">substring</button>
      <button @click="string_substr">substr</button>
      <button @click="string_replace">replace</button>
      <button @click="string_split">split</button>

      <h1>Math常用方法</h1>
      <button @click="math_abs()">abs</button>
      <button @click="math_round()">round</button>
      <button @click="math_PI()">PI</button>
      <button @click="math_max()">max</button>
      <button @click="math_min()">min</button>
      <button @click="math_ceil()">ceil</button>
      <button @click="math_floor()">floor</button>
      <button @click="math_random()">random</button>

      <h1>Other</h1>
      <button @click="typeOf">typeOf</button>
      <button @click="testtimeOut">耗时任务测试</button>
      <button @click="tttt">回调函数</button>
      <button @click="async_await">测试异步执行顺序</button>
    </div>
  </div>
</template>

<script>
import trade from "../components/child01";
export default {
  components: {
    trade,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    //从索引为start的开始取，取到索引为end的为止，end的取不到, 如果end为负数，表示索引为数组的长度+负数.
    array_slice() {
      let array = [1, 2, 3, 4, 5];
      let resultArray = array.slice(2, 4);
      console.log(resultArray);
    },
    //把数组转换成字符串，每一项用,分割
    array_toString() {
      let array = [1, 2, 3, 4, 5];
      let resultArray = array.toString(2, 3);
      console.log(array + "  " + resultArray);
    },
    // 返回数组对象本身
    array_valueOf() {
      let array = [1, 2, 3, 4, 5];
      let resultArray = array.valueOf();
      console.log(resultArray);
    },
    //从数组开头开始获取 返回指定元素下标
    array_indexOf() {
      let array = [1, 2, 3, 4, 5];
      let resultArray = array.indexOf(3);
      console.log(resultArray);
    },
    //添加到数组的最后面
    array_push() {
      let array = [1, 2, 3, 4, 5];
      array.push(6);
      for (let item of array) {
        console.log("array:" + item);
      }
    },
    //从数组末尾开始获取
    array_lastindexOf() {
      let array = [1, 2, 3, 4, 5];
      let resultArray = array.lastIndexOf(8);
      let resultArray2 = array.lastIndexOf(3);
      console.log(resultArray + "  " + resultArray2);
    },
    // 删除数组中的最后一个
    array_pop() {
      let array = [1, 2, 3, 4, 5];
      array.pop();
      console.log("array:" + array);
    },
    // 删除数组中的最前一个
    array_shift() {
      let array = [1, 2, 3, 4, 5];
      array.shift();
      console.log("array:" + array);
    },
    // 添加到数组的最前面
    array_unshift() {
      let array = [1, 2, 3, 4, 5];
      array.unshift(8);
      console.log("array:" + array);
    },
    // 将数组中的元素进行反转，倒序显示
    array_reverse() {
      let array = [1, 2, 3, 4, 5];
      array.reverse();
      console.log("array:" + array);
    },
    // 将数组元素进行排序
    array_sort() {
      let array = [3, 4, 5, 1, 2];
      console.log("array:" + array.sort());
    },
    //返回true的留下，false的舍弃
    array_filter() {
      //1、filter高级函数
      let num = [100, 2, 30, 50, 40, 200, 400, 400];
      //数组遍历 根据遍历条件 返回新的数组
      //item:当前元素的值  必选
      //index：当前元素的索引值 可选
      //array：当前元素属于的数组对象 可选
      let newnum = num.filter((item, index, array) => {
        // console.log("i:" + i);
        // console.log("index:" + index);
        // console.log("array:" + array);
        console.log("array.indexOf(item) == index---->" + array.indexOf(item) == index);

        return item > 100 && array.indexOf(item) == index;
      });

      console.log("newnum:" + newnum);
    },
    //foreach循环
    //item:当前元素的值  必选
    //index：当前元素的索引值 可选
    //array：当前元素属于的数组对象 可选
    array_forEach() {
      let num = [100, 2, 30, 50, 40, 200, 400, 400];
      // num.forEach(function (item, index, array) {
      //   console.log("item:" + item);
      // });
      //简写
      num.forEach((item, index, array) => {
        console.log("item:" + item);
      });
    },
    array_splice() {
      let num = [100, 2, 30, 50, 40, 200, 400, 400];
      //删除下标是0的元素  删除个数
      num.splice(0, 1);
      //array.splice(0,arr.length);    删除数组中所有项目
      console.log("num:" + num);
    },
    //将数组中的元素连接成字符串输出
    array_join() {
      let num = [100, 2, 30, 50, 40, 200, 400, 400];
      var string = num.join("-");
      console.log("string:" + string);
    },
    //  连接两个数组
    array_concat() {
      let array1 = [100, 200];
      let array2 = [300, 400];
      let array3 = array1.concat(array2);
      console.log("array3:" + array3);
    },
    // 返回指定内容在元字符串中的位置
    string_indexOf() {
      let string1 = "你好！";
      let string2 = "你好，你叫什么";
      console.log("string_indexOf:" + string2.indexOf("好"));
      console.log("string_lastIndexOf:" + string2.lastIndexOf("好"));
    },
    //去掉空格
    string_trim() {
      let string1 = "   你好";
      console.log("string_trim：" + string1.trim());
    },
    //转大写
    string_toUpperCase() {
      let string1 = "abcd";
      console.log("string_toUpperCase:" + string1.toUpperCase());
    },
    //转大写
    string_toLowerCase() {
      let string1 = "ABCD";
      console.log("string_toLowerCase:" + string1.toLowerCase());
    },
    //从start位置开始，截取到end位置，end取不到
    string_slice() {
      let string1 = "ABCD";
      console.log("string_slice:" + string1.slice(2, 3));
    },
    //  从start位置开始，截取到end位置，end取不到
    string_substring() {
      let string1 = "ABCD";
      console.log("string_substring:" + string1.substring(2, 3));
    },
    //从start位置开始，截取length个字符，只有一个就参数就截取到最后
    string_substr() {
      let string1 = "ABCD";
      console.log("string_substr:" + string1.substr(1));
    },
    //替换字符串的某元素,并返回替换后的字符串
    string_replace() {
      let string1 = "ABCD";
      console.log("string_replace:" + string1.replace("D", "E"));
    },
    //将字符串分割(l转换)成数组
    string_split() {
      let string1 = "ABCD";
      console.log("string_split:" + string1.split());
    },
    //获取一个对象的绝对值
    math_abs() {
      let string1 = -500;
      console.log("math_abs:" + Math.abs(string1));
    },
    // 四舍五入
    math_round() {
      let string1 = -1.8356;
      console.log("math_round:" + Math.round(string1));
    },
    //π
    math_PI() {
      console.log("math_PI:" + Math.PI);
    },
    //求几个数的最大数
    math_max() {
      console.log("math_max:" + Math.max(1, 2, 3, 4, 56));
    },
    //求几个数的最小数
    math_min() {
      console.log("math_min:" + Math.min(1, 2, 3, 4, 56));
    },
    //向上取整
    math_ceil() {
      console.log("math_ceil:" + Math.ceil(1.23));
    },
    //向下取整
    math_floor() {
      console.log("math_floor:" + Math.floor(1.23));
    },
    //随机数 (随机生成0 ~1之间的数)
    math_random() {
      console.log("math_random:" + Math.floor(Math.random() * 10));
    },

    //typeOf的使用方法
    //typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。它返回值是一个字符串，该字符串说明运算数的类型。
    typeOf() {
      let strings = "abss";
      console.log(typeof strings == "boolean");
      console.log(typeof strings == "string");
      let array = [1, 2, 3];
      console.log(typeof array == "object");
      console.log(typeof sss);
    },
    timeOut(type) {
      setTimeout(function () {
        if (type == "1") {
          for (var i = 0; i < 1000; i++) {
            console.log(i);
          }
        } else if (type == "2") {
          console.log("aaaaaaaaaa");
        }
      }, 3000);
    },

    fn1() {
      return new Promise((resolve) => {
        setTimeout(function () {
          let msg = "wait me 3000";
          resolve(msg);
        }, 3000);
      });
    },
    async asyncCall() {
      var result = await this.fn1();
      console.log("result11:" + result);
    },
    async testtimeOut() {
      // await this.timeOut("1");
      // await this.timeOut("2");
      this.asyncCall();

      let result = await this.upLoadFile("path1");
      console.log("result222:" + result);

      new Promise(function (resolve, reject) {
        resolve("lyl");
        // reject('cml')
      })
        .then((result) => {
          console.log(result);
        })
        .then(function () {
          console.log("123");
        })
        .catch((err) => {
          console.log(err);
        });

      this.fun1("1")
        .then(function (res) {
          console.log("res:" + res);
        })
        .then(function (res) {
          console.log("res:" + res);
        });

      // this.convertImgToBase64("../static/img/background.jpg");
    },

    convertImgToBase64(e) {
      return new Promise(function (resolve, reject) {
        // 使用Promise进行异步处理

        const reader = new FileReader(); // 实例化一个对象

        reader.readAsDataURL("../static/img/background.jpg"); // 把图片文件对象转换base64
        reader.onload = function (e) {
          resolve(e.target.result); // 回到函数返回base64值
        };
      });
    },

    upLoadFile(path) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("path:" + path);
          resolve(path + " success");
        }, 1000);
      });
    },

    fun1(test) {
      return new Promise((resolve) => {
        if (test) {
          resolve(test);
        }
      });
    },
    fun2(test2) {
      return new Promise((resolve) => {
        if (test2) {
          resolve(test2);
        }
      });
    },
    fun3(test3) {
      return new Promise((resolve) => {
        if (test3) {
          resolve(test3);
        }
      });
    },

    tttt() {
      this.testCallBack((data) => {
        console.log("data:" + data);
      });
    },

    //测试回调函数
    testCallBack(callback) {
      let _this = this.$parent;

      setTimeout(() => {
        let callValue = "这是回调数据";
        callback(callValue);
      }, 2000);
    },
    async async_await() {
      console.log("开始");
      let res = await this.timeout11();
      console.log("执行结束:" + res);
    },

    timeout11() {
      return new Promise((resolve) => {
        console.log("耗时任务执行");
        setTimeout(() => {
          console.log("2222");
          resolve("2222");
        }, 2000);
      });
    },
  },
};
</script>
