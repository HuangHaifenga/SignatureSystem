<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// 修改1
</script>

<template>
     <div class="container">
          <router-view></router-view>

     </div>
</template>

<style  lang="scss">
#app {
     // font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
}

body,
html {
     margin: 0;
     padding: 0;
     width: 100%;
     height: 100%;
     user-select: none;
     overflow: hidden;
}
</style>

<style  scoped lang="scss" >
* {
     touch-action: none;

}

.container {
     position: absolute !important;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     width: 1920px;
     height: 1080px;

}
</style>