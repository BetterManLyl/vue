var name = "lyl";
var age = 18

let appA = {}

// 匿名函数的写法 https://blog.csdn.net/weixin_45203607/article/details/124227504
appA.moduleA = (function a() {
    var birth = "192030A"
    return {
        getBirth() {
            return birth
        }
    }
}())

//立即执行函数
let fun = (function(){
    console.log('立即执行函数');
}());

let fun1 = (function(){
    console.log('立即执行函数2');
})();

appA.moduleC = function b(){
    var aaa = "111"
    function getaaa(){
        return aaa;
    }
    return getaaa;
}
