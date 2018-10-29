<template>
  <div class="example">
    <h2>EExample 12.06 - DOF Constraint</h2>
  </div>
</template>

<script>
import * as THREE from 'three'
import threeMixin from '../../mixin/index'
import Physijs from './js/physi'
Physijs.scripts.worker = 'static/threejs/learning/libs/other/physijs/physijs_worker.js'
Physijs.scripts.ammo = './ammo.js'
export default {
  name: 'Example06',
  mixins: [threeMixin],
  data() {
    return {
      clock: new THREE.Clock()
    }
  },
  mounted() {
  },
  methods: {
    // once everything is loaded, we run our Three.js stuff.
    initScene() {
      // create a scene, that will hold all our elements such as objects, cameras and lights.
      this.scene = new Physijs.Scene({ reportSize: 10, fixedTimeStep: 1 / 60 })
      this.scene.setGravity(new THREE.Vector3(0, -10, 0))
      this.scene.simulate()
    },
    // setRenderer() {
    //   // this.renderer.setClearColor(new THREE.Color(0xdddddd, 1.0))
    //   // this.renderer.sortObjects = false
    // },
    setCamera() {
      // this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000)
      // position and point the camera to the center of the scene
      this.camera.position.set(10, 10, 10)
    },
    // initLight() {
    //   this.setSpotLight()
    //   this.scene.add(new THREE.AmbientLight(0x444444))
    // },
    // initHelper() {
    //   // 辅助工具
    //   const axesHelper = new THREE.AxesHelper(50)
    //   this.scene.add(axesHelper)
    // },
    initModels() {
      this.createGroundAndWalls(this.scene)
    },
    setGui() {
      var car = this.createCar(this.scene)
      var controls = new function() {
        this.velocity = -2
        this.wheelAngle = 0.5

        this.loosenXRight = 0.0001
        this.loosenXLeft = 0.0001

        this.changeVelocity = function() {
          // if you add a motor, the current constraint is overridden if you want to rotate set min higher then max
          car.flConstraint.configureAngularMotor(2, 0.1, 0, controls.velocity, 15000)
          car.frConstraint.configureAngularMotor(2, 0.1, 0, controls.velocity, 15000)

          // motor two is forward and backwards
          car.flConstraint.enableAngularMotor(2)
          car.frConstraint.enableAngularMotor(2)
        }

        this.changeOrientation = function() {
          car.rrConstraint.setAngularLowerLimit({ x: 0, y: controls.wheelAngle, z: 0.1 })
          car.rrConstraint.setAngularUpperLimit({ x: controls.loosenXRight, y: controls.wheelAngle, z: 0 })
          car.rlConstraint.setAngularLowerLimit({ x: controls.loosenXLeft, y: controls.wheelAngle, z: 0.1 })
          car.rlConstraint.setAngularUpperLimit({ x: 0, y: controls.wheelAngle, z: 0 })
        }
      }()

      this.gui.add(controls, 'velocity', -10, 10).onChange(controls.changeVelocity)
      this.gui.add(controls, 'wheelAngle', -1, 1).onChange(controls.changeOrientation)
      this.gui.add(controls, 'loosenXRight', 0, 0.5).step(0.01).onChange(controls.changeOrientation)
      this.gui.add(controls, 'loosenXLeft', 0, 0.6).step(-0.01).onChange(controls.changeOrientation)
      controls.loosenXLeft = 0
      controls.loosenXRight = 0
    },
    render() {
      this.scene.simulate(undefined, 1)
    },
    createCar(scene) {
      var car = {}
      var car_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ color: 0xff4444, opacity: 0.9, transparent: true }),
        0.5, // high friction
        0.5 // medium restitution
      )

      // create the car body
      var geom = new THREE.BoxGeometry(15, 4, 4)
      var body = new Physijs.BoxMesh(geom, car_material, 500)
      body.position.set(5, 5, 5)
      body.castShadow = true
      scene.add(body)

      // create the wheels
      var fr = this.createWheel(new THREE.Vector3(0, 4, 10))
      var fl = this.createWheel(new THREE.Vector3(0, 4, 0))
      var rr = this.createWheel(new THREE.Vector3(10, 4, 10))
      var rl = this.createWheel(new THREE.Vector3(10, 4, 0))

      // add the wheels to the scene
      scene.add(fr)
      scene.add(fl)
      scene.add(rr)
      scene.add(rl)

      var frConstraint = this.createWheelConstraint(fr, body, new THREE.Vector3(0, 4, 8))
      scene.addConstraint(frConstraint)

      var flConstraint = this.createWheelConstraint(fl, body, new THREE.Vector3(0, 4, 2))
      scene.addConstraint(flConstraint)

      var rrConstraint = this.createWheelConstraint(rr, body, new THREE.Vector3(10, 4, 8))
      scene.addConstraint(rrConstraint)

      var rlConstraint = this.createWheelConstraint(rl, body, new THREE.Vector3(10, 4, 2))
      scene.addConstraint(rlConstraint)

      // backwheels don't move themselves and are restriced in their
      // movement. They should be able to rotate along the z-axis
      // same here, if the complete angle is allowed set lower higher
      // than upper.
      // by setting the lower and upper to the same value you can
      // fix the position
      // we can set the x position to 'loosen' the axis for the directional
      rrConstraint.setAngularLowerLimit({ x: 0, y: 0.5, z: 0.1 })
      rrConstraint.setAngularUpperLimit({ x: 0, y: 0.5, z: 0 })
      rlConstraint.setAngularLowerLimit({ x: 0, y: 0.5, z: 0.1 })
      rlConstraint.setAngularUpperLimit({ x: 0, y: 0.5, z: 0 })

      // front wheels should only move along the z axis.
      // we don't need to specify anything here, since
      // that value is overridden by the motors
      frConstraint.setAngularLowerLimit({ x: 0, y: 0, z: 0 })
      frConstraint.setAngularUpperLimit({ x: 0, y: 0, z: 0 })
      flConstraint.setAngularLowerLimit({ x: 0, y: 0, z: 0 })
      flConstraint.setAngularUpperLimit({ x: 0, y: 0, z: 0 })

      // if you add a motor, the current constraint is overridden
      // if you want to rotate set min higher then max
      flConstraint.configureAngularMotor(2, 0.1, 0, -2, 1500)
      frConstraint.configureAngularMotor(2, 0.1, 0, -2, 1500)

      // motor one is for left and right
      // frConstraint.enableAngularMotor(1);

      // motor two is forward and backwards
      flConstraint.enableAngularMotor(2)
      frConstraint.enableAngularMotor(2)

      car.flConstraint = flConstraint
      car.frConstraint = frConstraint
      car.rlConstraint = rlConstraint
      car.rrConstraint = rrConstraint

      return car
    },
    createWheelConstraint(wheel, body, position) {
      var constraint = new Physijs.DOFConstraint(
        wheel, body, position)

      return constraint
    },
    createWheel(position) {
      var wheel_material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ color: 0x444444, opacity: 0.9, transparent: true }),
        1.0, // high friction
        0.5 // medium restitution
      )

      var wheel_geometry = new THREE.CylinderGeometry(4, 4, 2, 10)
      var wheel = new Physijs.CylinderMesh(
        wheel_geometry,
        wheel_material,
        100
      )

      wheel.rotation.x = Math.PI / 2
      wheel.castShadow = true
      wheel.position.copy(position)
      return wheel
    },
    createGroundAndWalls(scene) {
      var ground_material = Physijs.createMaterial(
        new THREE.MeshPhongMaterial({
          map: new THREE.TextureLoader().load('static/threejs/learning/assets/textures/general/floor-wood.jpg') }),
        0.9,
        0.7)
      var ground = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 1, 80), ground_material, 0)
      scene.add(ground)
      var wall_material = Physijs.createMaterial(new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.1 }), 0.9, 0.7)
      var wall1 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 100, 80), wall_material, 0)
      wall1.position.x = -25
      wall1.position.y = 50
      scene.add(wall1)
      var wall2 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 100, 80), wall_material, 0)
      wall2.position.x = 25
      wall2.position.y = 50
      scene.add(wall2)
      var wall3 = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 100, 1), wall_material, 0)
      wall3.position.y = 50
      wall3.position.z = -40
      scene.add(wall3)
      var wall4 = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 100, 1), wall_material, 0)
      wall4.position.y = 50
      wall4.position.z = 40
      scene.add(wall4)
    }
  }
}
</script>

<style scoped>
  .example {
    padding: 20px;
    width: 100%;
    height: 900px;
    background-color: #eeeeee;
  }
</style>
