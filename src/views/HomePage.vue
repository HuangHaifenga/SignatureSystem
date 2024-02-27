<template>
     <div class="Handwriting">
          <canvas @mousemove="canvasMove" @mouseup="canvasUp" ref="canvas" :width="WindowWidth" :height="WindowHeight"
               @mousedown="mousedown" @mouseleave="canvasLeave"></canvas>
          <div @click="saveImg" class="btn">保存图片</div>

     </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const isDown = ref(false) // 是否可以绘制
const canvas = ref(<any>null) // canvas 元素
const ctx = ref(<any>null) // ctx承接上下文

const WindowWidth = computed(() => `${window.innerWidth}`)
const WindowHeight = computed(() => `${window.innerHeight}`)


// 鼠标按下
const mousedown = (e: MouseEvent) => {
     let { offsetX, offsetY } = e // 拿到x，y坐标
     ctx.value = canvas.value.getContext('2d') // 上下文
     ctx.value.strokeStyle = 'red'; // 设置线条颜色
     ctx.value.lineWidth = 2; // 线条宽度
     ctx.value.beginPath(); // 开始绘制路径
     ctx.value.moveTo(offsetX, offsetY); // 将鼠标移动到某一个坐标，准备绘制
     isDown.value = true // 打开绘制开关
}

// 鼠标移动
const canvasMove = (e: MouseEvent) => {
     let { offsetX, offsetY } = e // 拿到移动时的坐标信息
     isDown.value && startDraw(offsetX, offsetY) // 绘制开关为true 开始绘制
}

// 鼠标松开
const canvasUp = () => {
     console.log('松开');
     isDown.value = false
}


// 鼠标超出canvas绘制区域
const canvasLeave = () => {
     console.log('超出canvas');
     isDown.value = false
}

// 绘制方法
const startDraw = (x: number, y: number) => {
     ctx.value.lineTo(x, y); // 绘制线条
     ctx.value.stroke(); // 
}

// 保存图片
const saveImg = () => {
     const base64 = canvas.value.toDataURL("image/jpeg", 1.0)
     const file = base64ToFile(base64, '签名', 'image/png')
     console.log(file);

}

/**
 * Base64 转 File
 * @param base64 String base64格式字符串
 * @param filename String 文件名称或者文件路径
 * @param contentType String file对象的文件类型，如："image/png"
 */
//将base64转换为文件对象
const base64ToFile = (base64: string, filename: string, contentType: string) => {
     let arr = base64.split(',')  //去掉base64格式图片的头部
     let bstr = atob(arr[1])   //atob()方法将数据解码
     let leng = bstr.length
     let u8arr = new Uint8Array(leng)
     while (leng--) {
          u8arr[leng] = bstr.charCodeAt(leng) //返回指定位置的字符的 Unicode 编码
     }
     return new File([u8arr], filename, { type: contentType })
}
</script>

<style scoped  lang="scss">
.Handwriting {
     width: 100%;
     height: 100%;
}

.canvasSpace {
     border: 5px solid red;
     width: 1920px;
     height: 1080px;
     pointer-events: all;
}

.btn {
     width: 5rem;
     height: 2rem;
     line-height: 2rem;
     text-align: center;
     position: absolute;
     left: 0;
     bottom: 0;
     border: 1px solid red;

}
</style>