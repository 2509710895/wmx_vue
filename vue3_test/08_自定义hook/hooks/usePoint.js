import {reactive, onMounted, onBeforeUnmount} from 'vue'

function usePoint(){
    let point = reactive({
        x: 0,
        y: 0
    })

    const updatePoint = (e) => {
        point.x = e.clientX
        point.y = e.clientY
    }

    onMounted(()=>{
        console.log('onMounted')
        window.addEventListener('click',updatePoint)
    })

    onBeforeUnmount(()=>{
        console.log('onBeforeUnmount')
        window.removeEventListener('click', updatePoint)
    })

    return point
}

export default usePoint