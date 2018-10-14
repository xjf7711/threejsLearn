import * as THREE from 'three'
export default {
  data() {
    return {
      mouse: null,
      raycaster: null
    }
  },
  mounted() {
    this.mouse = new THREE.Vector2()
    this.raycaster = new THREE.Raycaster()
  },
  methods: {
    onDocumentMouseDown(event) {
    // event.preventDefault()
    // 将鼠标点击位置的屏幕坐标转成threejs中的标准坐标,具体解释见代码释义
    // const mouse = new THREE.Vector2()
    // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
      this.mouse.x = ((event.clientX - 260) / this.width) * 2 - 1
      this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

      // 新建一个三维单位向量 假设z方向就是0.5
      // 根据照相机，把这个向量转换到视点坐标系
      // const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5).unproject(this.camera)
      // 在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())

      // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
      // // vector = vector.unproject(this.camera)
      // this.projector.unprojectVector(vector, this.camera)
      // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
      // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera)

      // 获取raycaster直线和所有模型相交的数组集合
      // const intersects = this.raycaster.intersectObjects(this.scene.children)
      const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

      if (intersects.length > 0) {
        console.log(intersects[0])

        intersects[0].object.material.transparent = true
        intersects[0].object.material.opacity = 0.1
      }
    },
    onDocumentMouseMove(event) {
      if (this.controls.showRay) {
      // const vector = new THREE.Vector3((event.clientX / this.width) * 2 - 1, -(event.clientY / this.height) * 2 + 1, 0.5)
      // // unproject函数，将屏幕上的点击位置转换成Three.js场景中的坐标 --无效
      // // vector = vector.unproject(this.camera)
      // this.projector.unprojectVector(vector, this.camera) -- 偏上
      // const raycaster = new THREE.Raycaster()
      // 通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

        this.mouse.x = ((event.clientX - 260) / this.width) * 2 - 1
        this.mouse.y = -((event.clientY - 138) / this.height) * 2 + 1

        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera)
        // const raycaster = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
        const intersects = this.raycaster.intersectObjects([this.sphere, this.cylinder, this.cube])

        if (intersects.length > 0) {
          const points = []
          points.push(new THREE.Vector3(-30, 39.8, 30))
          points.push(intersects[0].point)

          const mat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6 })
          const tubeGeometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 60, 0.001)

          if (this.tube) this.scene.remove(this.tube)

          if (this.controls.showRay) {
            this.tube = new THREE.Mesh(tubeGeometry, mat)
            this.scene.add(this.tube)
          }
        }
      }
    }
  }
}
