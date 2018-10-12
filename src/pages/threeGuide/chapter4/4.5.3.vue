<template>
  <div class="example">
    <h2>{{ msg }}</h2>
    <canvas id="mainCanvas" :width="width" :height="height"/>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'Example331',
  data() {
    return {
      msg: '例 3.3.1',
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
      renderer.setClearColor(0xdddddd)
      const scene = new THREE.Scene()

      // camera
      const camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 0.1, 100)
      camera.position.set(0, 0, 25)
      camera.lookAt(new THREE.Vector3(0, 0, 0))
      scene.add(camera)

      // light
      const light = new THREE.PointLight(0xffffff, 1, 1000)
      light.position.set(10, 15, 20)
      scene.add(light)

      // instantiate a loader
      const loader = new THREE.TextureLoader()

      // load a resource
      loader.load(
        // resource URL
        'static/threejs/guide/img/chess.png',

        // onLoad callback
        function(texture) {
          // in this example we create the material when the texture is loaded
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          texture.repeat.set(4, 4)
          const material = new THREE.MeshBasicMaterial({
            map: texture
          })
          const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 12),
            material
          )
          scene.add(plane)
          renderer.render(scene, camera)
        },

        // onProgress callback currently not supported
        undefined,

        // onError callback
        function(err) {
          console.error('An error happened.', err)
        }
      )

      // console.log("/guide/img/chess.png")
      // const texture = THREE.ImageUtils.loadTexture // TextureLoader
      //   "/guide/img/chess.png",
      //   {},
      //   function() {
      //     renderer.render(scene, camera);
      //   }
      // );
      // console.log('texture is ', texture)
      // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      // texture.repeat.set(4, 4);
      // const material = new THREE.MeshLambertMaterial({
      //   map: texture
      // });

      // const plane = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), material);
      // scene.add(plane);

      // renderer.render(scene, camera);
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
