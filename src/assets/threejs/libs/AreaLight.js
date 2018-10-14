
// File:src/lights/AreaLight.js

/**
 * @author MPanknin / http://www.redplant.de/
 * @author alteredq / http://alteredqualia.com/
 */
import * as THREE from 'three'
const AreaLight = function ( color, intensity ) {

  THREE.Light.call( this, color );

  this.type = 'AreaLight';

  this.normal = new THREE.Vector3( 0, - 1, 0 );
  this.right = new THREE.Vector3( 1, 0, 0 );

  this.intensity = ( intensity !== undefined ) ? intensity : 1;

  this.width = 1.0;
  this.height = 1.0;

  this.constantAttenuation = 1.5;
  this.linearAttenuation = 0.5;
  this.quadraticAttenuation = 0.1;

};

AreaLight.prototype = Object.create( THREE.Light.prototype );

export default AreaLight