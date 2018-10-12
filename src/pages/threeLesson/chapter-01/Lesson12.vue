<template>
  <div class="example">
    <h2>12 Three.js官方文档介绍的相关对象功能列表构</h2>
    <div class="htmledit_views">

      <span style="font-family:'Microsoft YaHei';font-size:18px;">
        <span style="color:#ff0000;">Cameras（照相机，控制投影方式）</span><br>
        <span/>Camera<br>
        <span/>OrthographicCamera<br>
        <span/>PerspectiveCamera<br>
        <span style="color:#ff0000;">Core（核心对象）</span><br>
        <span/>BufferGeometry<br>
        <span/>Clock（用来记录时间）<br>
        <span/>EventDispatcher<br>
        <span/>Face3<br>
        <span/>Face4<br>
        <span/>Geometry<br>
        <span/>Object3D<br>
        <span/>Projector<br>
        <span/>Raycaster（计算鼠标拾取物体时很有用的对象）<br>
        <span style="color:#ff0000;">Lights（光照）</span><br>
        <span/>Light<br>
        <span/>AmbientLight<br>
        <span/>AreaLight<br>
        <span/>DirectionalLight<br>
        <span/>HemisphereLight<br>
        <span/>PointLight<br>
        <span/>SpotLight<br>
        <span style="color:#ff0000;">Loaders（加载器，用来加载特定文件）</span><br>
        <span/>Loader<br>
        <span/>BinaryLoader<br>
        <span/>GeometryLoader<br>
        <span/>ImageLoader<br>
        <span/>JSONLoader<br>
        <span/>LoadingMonitor<br>
        <span/>SceneLoader<br>
        <span/>TextureLoader<br>
        <span style="color:#ff0000;">Materials（材质，控制物体的颜色、纹理等）</span><br>
        <span/>Material<br>
        <span/>LineBasicMaterial<br>
        <span/>LineDashedMaterial<br>
        <span/>MeshBasicMaterial<br>
        <span/>MeshDepthMaterial<br>
        <span/>MeshFaceMaterial<br>
        <span/>MeshLambertMaterial<br>
        <span/>MeshNormalMaterial<br>
        <span/>MeshPhongMaterial<br> ParticleBasicMaterial
        <br>
        <span/>ParticleCanvasMaterial<br>
        <span/>ParticleDOMMaterial<br>
        <span/>ShaderMaterial<br>
        <span/>SpriteMaterial<br>
        <span style="color:#ff0000;">Math（和数学相关的对象）</span><br>
        <span/>Box2<br>
        <span/>Box3<br>
        <span/>Color<br>
        <span/>Frustum<br>
        <span/>Math<br>
        <span/>Matrix3<br>
        <span/>Matrix4<br>
        <span/>Plane<br>
        <span/>Quaternion<br>
        <span/>Ray<br>
        <span/>Sphere<br>
        <span/>Spline<br>
        <span/>Triangle<br>
        <span/>Vector2<br>
        <span/>Vector3<br>
        <span/>Vector4<br>
        <span/>
        <span style="color:#ff0000;">Objects（物体）</span><br>
        <span/>Bone<br>
        <span/>Line<br>
        <span/>LOD<br>
        <span style="color:#ff0000;">Mesh（网格，最常用的物体）</span><br>
        <span/>MorphAnimMesh<br>
        <span/>Particle<br>
        <span/>ParticleSystem<br>
        <span/>Ribbon<br>
        <span/>SkinnedMesh<br>
        <span/>Sprite<br>
        <span style="color:#ff0000;">Renderers（渲染器，可以渲染到不同对象上）</span><br>
        <span/>CanvasRenderer<br>
        <span/>WebGLRenderer（使用 WebGL 渲染，这是本书中最常用的方式）<br>
        <span/>WebGLRenderTarget<br>
        <span/>WebGLRenderTargetCube<br>
        <span/>WebGLShaders（着色器，在最后一章作介绍）<br>
        <span style="color:#ff0000;">Renderers / Renderables</span><br>
        <span/>RenderableFace3<br>
        <span/>RenderableFace4<br>
        <span/>RenderableLine<br>
        <span/>RenderableObject<br>
        <span/>RenderableParticle<br>
        <span/>RenderableVertex<br>
        <span style="color:#ff0000;">Scenes（场景）</span><br>
        <span/>Fog<br>
        <span/>FogExp2<br>
        <span/>Scene<br>
        <span style="color:#ff0000;">Textures（纹理）</span><br>
        <span/>CompressedTexture<br>
        <span/>DataTexture<br>
        <span/>Texture<br> Extras
        <br>
        <span/>FontUtils<br>
        <span/>GeometryUtils<br>
        <span/>ImageUtils<br>
        <span/>SceneUtils<br>
        <span style="color:#ff0000;">Extras / Animation</span><br>
        <span/>Animation<br>
        <span/>AnimationHandler<br>
        <span/>AnimationMorphTarget<br>
        <span/>KeyFrameAnimation<br>
        <span style="color:#ff0000;">Extras / Cameras</span><br>
        <span/>CombinedCamera<br>
        <span/>CubeCamera<br>
        <span style="color:#ff0000;">Extras / Core</span><br>
        <span/>Curve<br>
        <span/>CurvePath<br>
        <span/>Gyroscope<br>
        <span/>Path<br>
        <span/>Shape<br>
        <span style="color:#ff0000;">Extras / Geometries（几何形状）</span><br>
        <span/>CircleGeometry<br>
        <span/>ConvexGeometry<br>
        <span/>CubeGeometry<br>
        <span/>CylinderGeometry<br>
        <span/>ExtrudeGeometry<br>
        <span/>IcosahedronGeometry<br>
        <span/>LatheGeometry<br>
        <span/>OctahedronGeometry<br>
        <span/>ParametricGeometry<br>
        <span/>PlaneGeometry<br>
        <span/>PolyhedronGeometry<br>
        <span/>ShapeGeometry<br>
        <span/>SphereGeometry<br>
        <span/>TetrahedronGeometry<br>
        <span/>TextGeometry<br>
        <span/>TorusGeometry<br>
        <span/>TorusKnotGeometry<br>
        <span/>TubeGeometry<br>
        <span/>Extras / Helpers<br>
        <span/>ArrowHelper<br>
        <span/>AxisHelper<br>
        <span/>CameraHelper<br>
        <span/>DirectionalLightHelper<br>
        <span/>HemisphereLightHelper<br>
        <span/>PointLightHelper<br>
        <span/>SpotLightHelper<br>
        <span style="color:#ff0000;">Extras / Objects</span><br>
        <span/>ImmediateRenderObject<br>
        <span/>LensFlare<br>
        <span/>MorphBlendMesh<br>
        <span style="color:#ff0000;">Extras / Renderers / Plugins</span><br>
        <span/>DepthPassPlugin<br>
        <span/>LensFlarePlugin<br>
        <span/>ShadowMapPlugin<br>
        <span/>SpritePlugin<br>
        <span style="color:#ff0000;">Extras / Shaders</span><br>
        <span/>ShaderFlares<br>
      <span/>ShaderSprite</span>
    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>

<style scoped>
.example {
  padding: 20px;
  /*background-color: #ddd;*/
  width: 100%;
  height: 800px;
}
</style>
