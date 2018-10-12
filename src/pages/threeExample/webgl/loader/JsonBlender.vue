<template>
  <div id="loader-json-claraio">
    <h2>{{ title }}</h2>
    <div id="container"/>
    <div id="info">
      <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> -
      monster by <a href="http://www.3drt.com/downloads.htm" target="_blank" rel="noopener">3drt</a>
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'
// import Detector from '@/assets/threejs/Detector'

export default {
  name: 'LoaderJsonLender',
  data() {
    return {
      title: 'loader-json-lender',
      width: 700,
      height: 500,

      renderer: null,
      scene: null,
      camera: null,

      clock: null,
      mixer: [],
      objects: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.getElementById('container')

      this.camera = new THREE.PerspectiveCamera(
        50,
        this.width / this.height,
        1,
        2000
      )
      this.camera.position.set(2, 4, 5)

      this.clock = new THREE.Clock()

      this.scene = new THREE.Scene()
      this.scene.fog = new THREE.FogExp2(0x000000, 0.035)

      this.mixer = new THREE.AnimationMixer(this.scene)

      const loader = new THREE.JSONLoader()
      const url = 'static/threejs/examples/models/animated/monster/monster.json'
      // const url = '/examples/json/cube.json'
      loader.load(url, (geometry, materials) => {
        // adjust color a bit

        const material = materials[0]
        material.morphTargets = true
        material.color.setHex(0xffaaaa)

        // for ( let i = 300; i < 370; i ++ ) {

        const mesh = new THREE.Mesh(geometry, materials)

        // random placement in a grid

        // let x = ( ( i % 27 )  - 13.5 ) * 2 + THREE.Math.randFloatSpread( 1 );
        // let z = ( Math.floor( i / 27 ) - 13.5 ) * 2 + THREE.Math.randFloatSpread( 1 );
        //
        // mesh.position.set( x, 0, z );

        const s = THREE.Math.randFloat(0.005, 0.0055)
        mesh.scale.set(s, s, s)
        //
        // mesh.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );
        //
        // mesh.matrixAutoUpdate = false;
        // mesh.updateMatrix();

        this.scene.add(mesh)

        // this.mixer.clipAction( geometry.animations[ 0 ], mesh )
        //   .setDuration( 1 )			// one second
        //   .startAt( - Math.random() )	// random phase (already running)
        //   .play();					// let's go

        // }
      })

      // lights

      const ambientLight = new THREE.AmbientLight(0xcccccc)
      this.scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xff4400, 5, 30)
      pointLight.position.set(5, 0, 0)
      this.scene.add(pointLight)

      // renderer

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.width, this.height)
      container.appendChild(this.renderer.domElement)

      // stats

      // stats = new Stats();
      // container.appendChild( stats.dom );

      // events

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize(event) {
      this.renderer.setSize(this.width, this.height)

      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    },
    animate() {
      requestAnimationFrame(this.animate)

      this.render()
      // stats.update();
    },
    render() {
      // const timer = Date.now() * 0.0005;

      // this.camera.position.x = Math.cos( timer ) * 10;
      // this.camera.position.y = 4;
      // this.camera.position.z = Math.sin( timer ) * 10;

      // this.mixer.update( this.clock.getDelta() );

      // this.camera.lookAt( this.scene.position );

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
#loader-json-claraio {
  font-family: Monospace;
  background-color: #cccccc;
  color: #fff;
  margin: 0;
  overflow: hidden;
}
#info {
  color: #fff;
  /*position: absolute;*/
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
#info a,
.button {
  color: #f00;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
