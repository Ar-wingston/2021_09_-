/**
 * 使用递归的方法完成深拷贝
 * 首先要旁段传入值 obj 不是值类型
 * 然后通过 instanceof 判断 obj 是数组还是对象，再初始化返回结果值
 * 最后循环 obj ，还要保证 key 不是原型的属性，然后使用递归给 result 赋值
 */
function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) return obj
    let result = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) result[key] = deepClone(obj[key])
    }
    return result
}

const beforeCloneObject = {
    age: 22,
    name: 'pyd',
    address: {
        city: '广州'
    },
    arr: ['a', 'b', 'c']
}
const cloneObject = deepClone(beforeCloneObject)
console.log('cloneObject => ', cloneObject);