var name = "cml";
var age = 20
let appB={}
appB.moduleB = (function () {
    var birth = "192030B"
    return {
        getBirth: function () {
            return birth
        }
    }
})()