import test from '../common/js/test'

function addDecimals(a, b) { // 将小数转换为整数
    let aInt = a * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length)); 
    let bInt = b * Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
    // 计算整数之和 
    let sumInt = aInt + bInt;
    // 返回小数之和 
    return sumInt / Math.pow(10, Math.max(a.toString().split('.')[1].length, b.toString().split('.')[1].length));
}
export default {
    test
}