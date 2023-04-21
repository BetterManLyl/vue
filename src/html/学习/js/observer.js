
//让对象变得可检测
//data(){}
export class Observer {

    constructor(value) {
        this.value = value;
        if (Array.isArray(value)) {
            //如果是数组的情况
        } else {
            //如果是对象的情况
            this.walk(value)
        }
    }

    walk(obj) {
        //Object.keys是专门拿对象里面的key值的 如 obj:{name:"lyl",age:"18"},获取的就是name和age
        const keys = Object.keys(obj)
        for (let index = 0; index < keys.length; index++) {
            defineReactive(obj, keys[index])
        }
    }
}


//循环 让对象的每一个属性都变成可观测的

function defineReactive(obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key]//对象的某个值
    }
    if (typeof val == "object") {
        //递归
        new Observer(val)
    }

    Object.defineProperty(obj, key, {
        enumerable: true,//可枚举
        configurable: true,//可删除

        get() {
            console.log(`${key}值被读取了`)
            return val

        },
        set(newValue) {
            console.log(`${key}值被修改了`)
            val = newValue
            console.log(`修改成了${val}`)
        }
    })
}
