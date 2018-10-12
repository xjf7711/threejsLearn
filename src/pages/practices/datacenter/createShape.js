import * as THREE from 'three'
import SceneUtils from '@/assets/threejs/js/utils/SceneUtils'
export function createShape(_this) {
  console.log('createShape begins.')
  // const cubeGeometry = new THREE.BoxGeometry(250, 250, 250)
  // const cubeMaterial = new THREE.MeshNormalMaterial() // MeshBasicMaterial({ color: 0xff0000 })
  // _this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  // _this.cube.position.set(0, 125, 0)
  // _this.scene.add(_this.cube)

  const planeGeometry = new THREE.PlaneGeometry(200, 100)
  const planeMeterial = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
  const plane = new THREE.Mesh(planeGeometry, planeMeterial)

  plane.position.set(250, 100, 10)
  _this.scene.add(plane)

  const path = new THREE.Path()
  path.lineTo(0, 80)
  // path.quadraticCurveTo(110, 1000, 0.2, 1)
  path.moveTo(80, 80)
  path.lineTo(1000, 1000)
  path.lineTo(1000, 500)
  path.lineTo(0, 0)

  const points = path.getPoints()

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 })

  const line = new THREE.Line(lineGeometry, lineMaterial)
  // line.rotation.x = -0.5 * Math.PI
  _this.scene.add(line)

  const length = 800
  const width = 200

  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(0, width)
  shape.lineTo(length, width)
  shape.lineTo(length, 0)
  shape.lineTo(0, 0)
  // add trangle 必须闭合
  const trangle = new THREE.Path()
  trangle.moveTo(150, 150)
  trangle.lineTo(350, 150)
  trangle.lineTo(350, 60)
  trangle.lineTo(150, 60)
  trangle.lineTo(150, 150)
  shape.holes.push(trangle)
  console.log('shape is ', shape)
  const extrudeSettings = {
    steps: 1,
    depth: 40, // THREE.ExtrudeBufferGeometry: amount has been renamed to depth.
    bevelEnabled: false
  }

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  const mesh = createMesh(geometry)
  // const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
  // const mesh = new THREE.Mesh(geometry, material)
  // // mesh.rotation.x = -0.5 * Math.PI
  _this.scene.add(mesh)
}

// 创建模型
function createMesh(geom) {
  // assign two materials
  const meshMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
  meshMaterial.side = THREE.DoubleSide
  const wireFrameMat = new THREE.MeshBasicMaterial()
  wireFrameMat.wireframe = true

  // create a multimaterial
  return SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]) //
}
