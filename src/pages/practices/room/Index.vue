<template>
  <div id="example">
    <h2>3D room</h2>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import { initThree } from './roomObj'
export default {
  name: 'RoomIndex',
  data() {
    return {

    }
  },
  mounted() {
    initThree('example')
    // this.roomObj = new ThreeObj('example')
    // this.roomObj.draw()
    // // roomObj.render()
    // // this.render()
    // window.onResize = this.onWindowResize
    // window.onresize = this.onWindowResize
  },
  methods: {
    onWindowResize() {
      console.log('resize begins.')
      // roomObj.Fdiv = document.getElementById('example')
      // roomObj.width = this.Fdiv.clientWidth - 40
      // roomObj.height = this.Fdiv.clientHeight - 100
      // roomObj.camera.aspect = this.width / this.height
      //
      // roomObj.camera.updateProjectionMatrix()
      //
      // roomObj.renderer.render(roomObj.scene, roomObj.camera)
      //
      // roomObj.renderer.setSize(roomObj.width, roomObj.height)
    }
  }
}
</script>

<style scoped>
#example {
  padding: 20px;
  /*background-color: #ddd;*/
  width: 100%;
  height: 800px;
}
</style>
