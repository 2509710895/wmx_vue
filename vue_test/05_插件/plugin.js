const obj = {
    install(Vue) {
        console.log('install');
        // 1. 添加全局方法或属性
        // 过滤器
        Vue.filter('mySlice',function(value,start,end) {
            return value.slice(start,end);
        })
        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来）
            bind(el, binding) {
                el.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(el, binding) {
                console.log(el, binding);
                el.focus()
            },
            // 指令所在的模版被重新解析时
            update(el, binding) {
                // console.log(el,binding);
                el.value = binding.value;
            }
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            }
        })

        // 给Vue原型上添加一个方法
        Vue.prototype.$myMethod = function () {
            console.log('myMethod');
        }
    }
}

export default obj