<template>
  <div class="text-shapes">
    <h2>text-shapes</h2>
    <div id="info">
      <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - Simple text from json fonts.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextShapes',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.text-shapes {
  font-family: Monospace;
  background-color: #f0f0f0;
  margin: 0px;
  overflow: hidden;
}
#info {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
}
</style>
