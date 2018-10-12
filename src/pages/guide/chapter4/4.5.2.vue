<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example452',
  data() {
    return {
      msg: '例 4.5.2',
      width: 700,
      height: 500
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
      })
      renderer.setClearColor(0x000000)
      const scene = new THREE.Scene()

      // camera
      const camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 0.1, 100)
      camera.position.set(25, 25, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      // light
      const light = new THREE.PointLight(0xffffff, 1, 1000)
      light.position.set(10, 15, 20)
      scene.add(light)

      const materials = []
      const loader = new THREE.TextureLoader()
      for (let i = 0; i < 6; ++i) {
        materials.push(
          new THREE.MeshBasicMaterial({
            map: loader.load(
              // resource URL
              'static/threejs/guide/img/' + i + '.png',

              // onLoad callback
              function(texture) {
                renderer.render(scene, camera)
              },

              // onProgress callback currently not supported
              undefined,

              // onError callback
              function(err) {
                console.error('An error happened.', err)
              }
            ),
            //   THREE.ImageUtils.loadTexture(
            //   'static/threejs/guide/img/' + i + '.png',
            //   {},
            //   function() {
            //     renderer.render(scene, camera)
            //   }
            // ),
            overdraw: true
          })
        )
      }

      const cube = new THREE.Mesh(
        new THREE.CubeGeometry(5, 5, 5),
        materials // new THREE.MeshFaceMaterial(materials) MeshFaceMaterial has been removed
      )
      scene.add(cube)

      renderer.render(scene, camera)
    }
  }
}
</script>

<style scoped>
.example {
  background-color: #dddddd;
  width: 100%;
  height: 800px;
}
</style>
