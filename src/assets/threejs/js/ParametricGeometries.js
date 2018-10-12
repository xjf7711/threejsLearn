/*
 * @author zz85
 *
 * Experimenting of primitive geometry creation using Surface Parametric equations
 *
 */
import * as THREE from 'three'
const ParametricGeometries = {

  klein: function(v, u, target) {
    u *= Math.PI
    v *= 2 * Math.PI

    u = u * 2
    let x
    let z
    if (u < Math.PI) {
      x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v)
      z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v)
    } else {
      x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI)
      z = -8 * Math.sin(u)
    }

    const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v)

    target.set(x, y, z)
  },

  plane: function(width, height) {
    return function(u, v, target) {
      const x = u * width
      const y = 0
      const z = v * height

      target.set(x, y, z)
    }
  },

  mobius: function(u, t, target) {
    // flat mobius strip
    // http://www.wolframalpha.com/input/?i=M%C3%B6bius+strip+parametric+equations&lk=1&a=ClashPrefs_*Surface.MoebiusStrip.SurfaceProperty.ParametricEquations-
    u = u - 0.5
    const v = 2 * Math.PI * t

    const a = 2

    const x = Math.cos(v) * (a + u * Math.cos(v / 2))
    const y = Math.sin(v) * (a + u * Math.cos(v / 2))
    const z = u * Math.sin(v / 2)

    target.set(x, y, z)
  },

  mobius3d: function(u, t, target) {
    // volumetric mobius strip

    u *= Math.PI
    t *= 2 * Math.PI

    u = u * 2
    const phi = u / 2
    const major = 2.25
    const a = 0.125
    const b = 0.65

    let x = a * Math.cos(t) * Math.cos(phi) - b * Math.sin(t) * Math.sin(phi)
    const z = a * Math.cos(t) * Math.sin(phi) + b * Math.sin(t) * Math.cos(phi)
    const y = (major + x) * Math.sin(u)
    x = (major + x) * Math.cos(u)

    target.set(x, y, z)
  }

}

/** *******************************************
 *
 * Parametric Replacement for TubeGeometry
 *
 *********************************************/

ParametricGeometries.TubeGeometry = function(path, segments, radius, segmentsRadius, closed, debug) {
  this.path = path
  this.segments = segments || 64
  this.radius = radius || 1
  this.segmentsRadius = segmentsRadius || 8
  this.closed = closed || false
  if (debug) this.debug = new THREE.Object3D()

  const scope = this
  const numpoints = this.segments + 1

  const frames = path.computeFrenetFrames(segments, closed)
  const tangents = frames.tangents
  const normals = frames.normals
  const binormals = frames.binormals

  // proxy internals

  this.tangents = tangents
  this.normals = normals
  this.binormals = binormals

  const ParametricTube = function(u, v, target) {
    v *= 2 * Math.PI

    let i = u * (numpoints - 1)
    i = Math.floor(i)

    const pos = path.getPointAt(u)

    const tangent = tangents[ i ]
    const normal = normals[ i ]
    const binormal = binormals[ i ]

    if (scope.debug) {
      scope.debug.add(new THREE.ArrowHelper(tangent, pos, radius, 0x0000ff))
      scope.debug.add(new THREE.ArrowHelper(normal, pos, radius, 0xff0000))
      scope.debug.add(new THREE.ArrowHelper(binormal, pos, radius, 0x00ff00))
    }

    const cx = -scope.radius * Math.cos(v) // TODO: Hack: Negating it so it faces outside.
    const cy = scope.radius * Math.sin(v)

    pos.x += cx * normal.x + cy * binormal.x
    pos.y += cx * normal.y + cy * binormal.y
    pos.z += cx * normal.z + cy * binormal.z

    target.copy(pos)
  }

  THREE.ParametricGeometry.call(this, ParametricTube, segments, segmentsRadius)
}

ParametricGeometries.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype)
ParametricGeometries.TubeGeometry.prototype.constructor = ParametricGeometries.TubeGeometry

/** *******************************************
  *
  * Parametric Replacement for TorusKnotGeometry
  *
  *********************************************/
ParametricGeometries.TorusKnotGeometry = function(radius, tube, segmentsT, segmentsR, p, q) {
  this.radius = radius || 200
  this.tube = tube || 40
  this.segmentsT = segmentsT || 64
  this.segmentsR = segmentsR || 8
  this.p = p || 2
  this.q = q || 3

  function TorusKnotCurve() {
    THREE.Curve.call(this)
  }

  TorusKnotCurve.prototype = Object.create(THREE.Curve.prototype)
  TorusKnotCurve.prototype.constructor = TorusKnotCurve

  TorusKnotCurve.prototype.getPoint = function(t, optionalTarget) {
    const point = optionalTarget || new THREE.Vector3()

    t *= Math.PI * 2

    const r = 0.5

    const x = (1 + r * Math.cos(q * t)) * Math.cos(p * t)
    const y = (1 + r * Math.cos(q * t)) * Math.sin(p * t)
    const z = r * Math.sin(q * t)

    return point.set(x, y, z).multiplyScalar(radius)
  }

  const segments = segmentsT
  const radiusSegments = segmentsR
  const extrudePath = new TorusKnotCurve()

  ParametricGeometries.TubeGeometry.call(this, extrudePath, segments, tube, radiusSegments, true, false)
}

ParametricGeometries.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype)
ParametricGeometries.TorusKnotGeometry.prototype.constructor = ParametricGeometries.TorusKnotGeometry

/** *******************************************
  *
  * Parametric Replacement for SphereGeometry
  *
  *********************************************/
ParametricGeometries.SphereGeometry = function(size, u, v) {
  function sphere(u, v, target) {
    u *= Math.PI
    v *= 2 * Math.PI

    const x = size * Math.sin(u) * Math.cos(v)
    const y = size * Math.sin(u) * Math.sin(v)
    const z = size * Math.cos(u)

    target.set(x, y, z)
  }

  THREE.ParametricGeometry.call(this, sphere, u, v)
}

ParametricGeometries.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype)
ParametricGeometries.SphereGeometry.prototype.constructor = ParametricGeometries.SphereGeometry

/** *******************************************
  *
  * Parametric Replacement for PlaneGeometry
  *
  *********************************************/

ParametricGeometries.PlaneGeometry = function(width, depth, segmentsWidth, segmentsDepth) {
  function plane(u, v, target) {
    const x = u * width
    const y = 0
    const z = v * depth

    target.set(x, y, z)
  }

  THREE.ParametricGeometry.call(this, plane, segmentsWidth, segmentsDepth)
}

ParametricGeometries.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype)
ParametricGeometries.PlaneGeometry.prototype.constructor = ParametricGeometries.PlaneGeometry
export default ParametricGeometries
