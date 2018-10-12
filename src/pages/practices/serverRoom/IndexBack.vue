<template>
  <div class="example">
    <h2>Server Room</h2>
    <div id="canvas-frame"/>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import { createRoom } from './serverRoom'
// import { threeStart } from './threeObj'
export default {
  name: 'ServerRoom',
  data() {
    return {

    }
  },
  mounted() {
    createRoom('canvas-frame')
    // threeStart()
  }
}
</script>

<style scoped>
.example {
  padding: 20px;
  background-color: #eee;
  width: 100%;
  height: 800px;
}
#canvas-frame {
  width: 100%;
  height: 800px;
}
</style>
