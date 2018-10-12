import ThreeClass from './threeClass'
import TWEEN from '@tweenjs/tween.js'
const roomObj = new ThreeClass('example')
export function initThree() {
  roomObj.draw()
  render()
  initEvent()
}

function render() {
  // console.log('this is ', roomObj)
  // const that = this
  // console.log('render this.stats is ', roomObj.stats)
  roomObj.stats.update()
  roomObj.cameraControls.update()
  // render using requestAnimationFrame
  roomObj.renderer.render(roomObj.scene, roomObj.camera)
  requestAnimationFrame(render)
  TWEEN.update()
}
function initEvent() {
  window.onresize = onWindowResize
  window.addEventListener('keydown', onkeyDown)
  // THREEx.WindowResize(renderer, camera);
  // THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
}
// 窗口变动触发的函数

function onWindowResize() {
  // console.log('resize begins. this is ', this)
  const _this = roomObj
  // _this.Fdiv = document.getElementById(_this.fId)
  _this.width = _this.Fdiv.clientWidth - 40
  _this.height = _this.Fdiv.clientHeight - 100
  _this.camera.aspect = _this.width / _this.height

  _this.camera.updateProjectionMatrix()

  _this.renderer.render(_this.scene, _this.camera)

  _this.renderer.setSize(_this.width, _this.height)
}
// Enter=13,Space=32;
function onkeyDown(event) {
  const _this = roomObj
  switch (event.keyCode) {
    case 13:
      console.log(event.keyCode)
      if (_this.door_state) {
        _this.dummy.rotation.y += 0.5 * Math.PI
        _this.door_state = false
      } else {
        _this.dummy.rotation.y -= 0.5 * Math.PI
        _this.door_state = true
      }
      break
    default:
      console.log(event.keyCode)
      break
  }
}
