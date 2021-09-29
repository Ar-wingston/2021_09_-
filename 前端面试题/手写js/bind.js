/**
 * 首先将参数解析成数组
 * 数组取出数据第一项设为this，数组剩余的是返回的参数
 */
Function.prototype.newBind = function () {
    const args = Array.prototype.slice.call(arguments)
    const _this = args.shift()
    const self = this
    return function () {
        return self.apply(_this, args)
    }
}

function fn1(a, b, c) {
    console.log('this => ', this);
    console.log(a, b, c);
    return 'this is fn1()'
}

const fn2 = fn1.newBind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log('res => ', res);