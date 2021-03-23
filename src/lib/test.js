;
var module = function () {
  let flag = false;
  if (flag) {
    console.log('你好，你叫什么名字111');
  }
  let obj = {};


  function sum() {
    console.log('这是sum方法');

  }
  obj.flag = "12132131313";
  obj.sum = sum;
  return obj;
}()

export default module;
