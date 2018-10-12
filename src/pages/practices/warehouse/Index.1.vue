<template>
  <div class="example">
    <h2>3DWarehouse</h2>
    <div id="canvas-frame"/>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<script>
import {
  initThree
} from './threeObj'
export default {
  name: 'Warehouse3D',
  data() {
    return {

    }
  },
  mounted() {
    initThree('canvas-frame')
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    /*background-color: #ddd;*/
    width: 100%;
    height: 800px;
  }

  #canvas-frame {
    width: 100%;
    height: 700px;
  }
</style>
