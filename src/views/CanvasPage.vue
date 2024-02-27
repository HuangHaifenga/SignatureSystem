<template>
  <div class="canvasbg">
    <canvas class="canvas1" ref="canvas1" :width="WindowWidth" :height="WindowHeight"></canvas>
    <div class="actions">
      <button class="danger" @click="handleClear">清除</button>
      <button class="warning" @click="handleUndo">撤销</button>
      <button class="success" @click="handlePreview">图片预览</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from "vue"
import SmoothSignature from 'smooth-signature';
import { preview } from 'v-preview-image'

const canvas = document.querySelector('canvas')

const canvas1 = ref<any>(null)
const signature1 = ref<any>(null)
// 获取屏幕宽高
const WindowWidth = computed(() => `${window.innerWidth}`)
const WindowHeight = computed(() => `${window.innerHeight}`)

watchEffect(() => {

  console.log('%c [  ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', WindowHeight.value)
})


const initSignature1 = () => {
  // const canvas = this.$refs["canvas1"]
  const canvas = canvas1.value as any
  const options = {


    openSmooth: true,
    minWidth: 4,
    maxWidth: 12,
    // color: '#1890ff',
    bgColor: '#f6f6f6'
  }
  signature1.value = new SmoothSignature(canvas, options)
}

// 清除
const handleClear = () => {
  const sgn = signature1.value
  sgn.clear()
}

// 撤销
const handleUndo = () => {
  const sgn = signature1.value
  sgn.undo()
}

// 保存
const handlePreview = () => {
  const sgn = signature1.value
  const isEmpty = sgn.isEmpty()
  if (isEmpty) {
    alert('isEmpty')
    return
  }
  // const pngUrl = sgn.getPNG()
  // const pngUrl = sgn.getJPG()
  // console.log(pngUrl)
  const pngUrl = signature1.value.getPNG();
  //@ts-ignore
  // window.previewImage(pngUrl);
  preview(pngUrl)
}

onMounted(() => {
  // 初始化canvas
  initSignature1()
})

</script>

<style lang="scss" scoped>
// .canvasbg:hover {
//   cursor: url('../../../public/hover.png'), auto;
// }

.actions {
  position: absolute;
  left: 3%;
  bottom: 8%;

}
</style>
