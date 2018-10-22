import * as THREE from 'three'

/**
 * Add a simple cube and sphere to the provided scene
 *
 * @param {THREE.Scene} scene
 */
export function addDefaultCubeAndSphere(scene) {
  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000
  })
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.castShadow = true

  // position the cube
  cube.position.x = -4
  cube.position.y = 3
  cube.position.z = 0

  // add the cube to the scene
  scene.add(cube)

  var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff
  })
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

  // position the sphere
  sphere.position.x = 20
  sphere.position.y = 0
  sphere.position.z = 2
  sphere.castShadow = true

  // add the sphere to the scene
  scene.add(sphere)

  return {
    cube: cube,
    sphere: sphere
  }
}

/**
 * Add a simple ground plance to the provided scene
 *
 * @param {THREE.Scene} scene
 */
export function addGroundPlane(scene) {
  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(60, 20, 120, 120)
  var planeMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff
  })
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 15
  plane.position.y = 0
  plane.position.z = 0

  scene.add(plane)

  return plane
}

/**
 * Add a simple ground plance to the provided scene
 *
 * @param {THREE.Scene} scene
 */
export function addLargeGroundPlane(scene, useTexture) {
  var withTexture = (useTexture !== undefined) ? useTexture : false

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(10000, 10000)
  var planeMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff
  })
  if (withTexture) {
    var textureLoader = new THREE.TextureLoader()
    planeMaterial.map = textureLoader.load('../../assets/textures/general/floor-wood.jpg')
    planeMaterial.map.wrapS = THREE.RepeatWrapping
    planeMaterial.map.wrapT = THREE.RepeatWrapping
    planeMaterial.map.repeat.set(80, 80)
  }
  var plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 0
  plane.position.y = 0
  plane.position.z = 0

  scene.add(plane)

  return plane
}

export function addHouseAndTree(scene) {
  createBoundingWall(scene)
  createGroundPlane(scene)
  createHouse(scene)
  createTree(scene)

  function createBoundingWall(scene) {
    var wallLeft = new THREE.CubeGeometry(70, 2, 2)
    var wallRight = new THREE.CubeGeometry(70, 2, 2)
    var wallTop = new THREE.CubeGeometry(2, 2, 50)
    var wallBottom = new THREE.CubeGeometry(2, 2, 50)

    var wallMaterial = new THREE.MeshPhongMaterial({
      color: 0xa0522d
    })

    var wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial)
    var wallRightMesh = new THREE.Mesh(wallRight, wallMaterial)
    var wallTopMesh = new THREE.Mesh(wallTop, wallMaterial)
    var wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial)

    wallLeftMesh.position.set(15, 1, -25)
    wallRightMesh.position.set(15, 1, 25)
    wallTopMesh.position.set(-19, 1, 0)
    wallBottomMesh.position.set(49, 1, 0)

    scene.add(wallLeftMesh)
    scene.add(wallRightMesh)
    scene.add(wallBottomMesh)
    scene.add(wallTopMesh)
  }

  function createGroundPlane(scene) {
    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(70, 50)
    var planeMaterial = new THREE.MeshPhongMaterial({
      color: 0x9acd32
    })
    var plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    scene.add(plane)
  }

  function createHouse(scene) {
    var roof = new THREE.ConeGeometry(5, 4)
    var base = new THREE.CylinderGeometry(5, 5, 6)

    // create the mesh
    var roofMesh = new THREE.Mesh(roof, new THREE.MeshPhongMaterial({
      color: 0x8b7213
    }))
    var baseMesh = new THREE.Mesh(base, new THREE.MeshPhongMaterial({
      color: 0xffe4c4
    }))

    roofMesh.position.set(25, 8, 0)
    baseMesh.position.set(25, 3, 0)

    roofMesh.receiveShadow = true
    baseMesh.receiveShadow = true
    roofMesh.castShadow = true
    baseMesh.castShadow = true

    scene.add(roofMesh)
    scene.add(baseMesh)
  }

  /**
   * Add the tree to the scene
   * @param scene The scene to add the tree to
   */
  function createTree(scene) {
    var trunk = new THREE.CubeGeometry(1, 8, 1)
    var leaves = new THREE.SphereGeometry(4)

    // create the mesh
    var trunkMesh = new THREE.Mesh(trunk, new THREE.MeshPhongMaterial({
      color: 0x8b4513
    }))
    var leavesMesh = new THREE.Mesh(leaves, new THREE.MeshPhongMaterial({
      color: 0x00ff00
    }))

    // position the trunk. Set y to half of height of trunk
    trunkMesh.position.set(-10, 4, 0)
    leavesMesh.position.set(-10, 12, 0)

    trunkMesh.castShadow = true
    trunkMesh.receiveShadow = true
    leavesMesh.castShadow = true
    leavesMesh.receiveShadow = true

    scene.add(trunkMesh)
    scene.add(leavesMesh)
  }
}

export function createGhostTexture() {
  var canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 32

  var ctx = canvas.getContext('2d')
  // the body
  ctx.translate(-81, -84)

  ctx.fillStyle = 'orange'
  ctx.beginPath()
  ctx.moveTo(83, 116)
  ctx.lineTo(83, 102)
  ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
  ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
  ctx.lineTo(111, 116)
  ctx.lineTo(106.333, 111.333)
  ctx.lineTo(101.666, 116)
  ctx.lineTo(97, 111.333)
  ctx.lineTo(92.333, 116)
  ctx.lineTo(87.666, 111.333)
  ctx.lineTo(83, 116)
  ctx.fill()

  // the eyes
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.moveTo(91, 96)
  ctx.bezierCurveTo(88, 96, 87, 99, 87, 101)
  ctx.bezierCurveTo(87, 103, 88, 106, 91, 106)
  ctx.bezierCurveTo(94, 106, 95, 103, 95, 101)
  ctx.bezierCurveTo(95, 99, 94, 96, 91, 96)
  ctx.moveTo(103, 96)
  ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
  ctx.bezierCurveTo(99, 103, 100, 106, 103, 106)
  ctx.bezierCurveTo(106, 106, 107, 103, 107, 101)
  ctx.bezierCurveTo(107, 99, 106, 96, 103, 96)
  ctx.fill()

  // the pupils
  ctx.fillStyle = 'blue'
  ctx.beginPath()
  ctx.arc(101, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(89, 102, 2, 0, Math.PI * 2, true)
  ctx.fill()

  var texture = new THREE.Texture(canvas)
  texture.needsUpdate = true
  return texture
}

/**
 * Add a folder to the gui containing the basic material properties.
 *
 * @param gui the gui to add to
 * @param controls the current controls object
 * @param material the material to control
 * @param geometry the geometry we're working with
 * @param name optionally the name to assign to the folder
 */
export function addBasicMaterialSettings(gui, controls, material, name) {
  var folderName = (name !== undefined) ? name : 'THREE.Material'

  controls.material = material

  var folder = gui.addFolder(folderName)
  folder.add(controls.material, 'id')
  folder.add(controls.material, 'uuid')
  folder.add(controls.material, 'name')
  folder.add(controls.material, 'opacity', 0, 1, 0.01)
  folder.add(controls.material, 'transparent')
  folder.add(controls.material, 'overdraw', 0, 1, 0.01)
  folder.add(controls.material, 'visible')
  folder.add(controls.material, 'side', { FrontSide: 0, BackSide: 1, BothSides: 2 }).onChange(function(side) {
    controls.material.side = parseInt(side)
  })

  folder.add(controls.material, 'colorWrite')
  folder.add(controls.material, 'flatShading').onChange(function(shading) {
    controls.material.flatShading = shading
    controls.material.needsUpdate = true
  })
  folder.add(controls.material, 'premultipliedAlpha')
  folder.add(controls.material, 'dithering')
  folder.add(controls.material, 'shadowSide', { FrontSide: 0, BackSide: 1, BothSides: 2 })
  folder.add(controls.material, 'vertexColors', { NoColors: THREE.NoColors, FaceColors: THREE.FaceColors, VertexColors: THREE.VertexColors }).onChange(function(vertexColors) {
    material.vertexColors = parseInt(vertexColors)
  })
  folder.add(controls.material, 'fog')

  return folder
}

export function addSpecificMaterialSettings(gui, controls, material, name) {
  controls.material = material

  var folderName = (name !== undefined) ? name : 'THREE.' + material.type
  var folder = gui.addFolder(folderName)
  switch (material.type) {
    case 'MeshNormalMaterial':
      folder.add(controls.material, 'wireframe')
      return folder

    case 'MeshPhongMaterial':
      controls.specular = material.specular.getStyle()
      folder.addColor(controls, 'specular').onChange(function(e) {
        material.specular.setStyle(e)
      })
      folder.add(material, 'shininess', 0, 100, 0.01)
      return folder

    case 'MeshStandardMaterial':
      controls.color = material.color.getStyle()
      folder.addColor(controls, 'color').onChange(function(e) {
        material.color.setStyle(e)
      })
      controls.emissive = material.emissive.getStyle()
      folder.addColor(controls, 'emissive').onChange(function(e) {
        material.emissive.setStyle(e)
      })
      folder.add(material, 'metalness', 0, 1, 0.01)
      folder.add(material, 'roughness', 0, 1, 0.01)
      folder.add(material, 'wireframe')

      return folder
  }
}
