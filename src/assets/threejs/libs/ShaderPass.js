/**
 * @author alteredq / http://alteredqualia.com/
 */
import * as THREE from 'three'
import EffectComposer from './EffectComposer'

const ShaderPass = function ( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;

};

ShaderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		EffectComposer.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( EffectComposer.scene, EffectComposer.camera );

		} else {

			renderer.render( EffectComposer.scene, EffectComposer.camera, writeBuffer, this.clear );

		}

	}

};

export default ShaderPass
