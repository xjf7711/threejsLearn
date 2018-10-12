<template>
  <div class="example">
    <h2>23 Three.js的光源种类</h2>
    <div class="markdown_views">
      <h3 id="为什么需要光源">
      <a name="t0"/>为什么需要光源？</h3>

      <p>我们能看到物体都是因为有光的反射效果，不同的物体反射出来的光也就显示出来了不同的颜色。所以，three.js框架模拟了一些现实生活中的光源来实现所需要的效果。</p>

      <h3 id="光源的种类">
      <a name="t1"/>光源的种类</h3>

      <table>
        <thead>
          <tr>
            <th>名字</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>THREE.AmbientLight</td>
            <td>这是一个基础光源，也叫环境光源，该光源的颜色将会叠加到场景现有的颜色上面，无法创建阴影。</td>
          </tr>
          <tr>
            <td>THREE.PointLight</td>
            <td>点光源，从空间的一点向所有方向发射光源。</td>
          </tr>
          <tr>
            <td>THREE.SpotLight</td>
            <td>这种光源有聚光的效果，类似台灯、天花板上的吊灯或者手电筒。</td>
          </tr>
          <tr>
            <td>THREE.DirectionalLight</td>
            <td>无限光，平行光。从这种光源发出的光线可以看作是平行的，比如太阳光。</td>
          </tr>
          <tr>
            <td>THREE.HemisphereLight</td>
            <td>这是一种特殊光源，可以通过模拟反光面和光线微弱的天空来创建更加自然的室外光线。无法创建阴影。</td>
          </tr>
          <tr>
            <td>THREE.AreaLight</td>
            <td>使用这种光源可以指定散发光线的平面，而不是一个点。无法创建阴影。</td>
          </tr>
          <tr>
            <td>THREE.LensFlare</td>
            <td>这不是一种光源，但是通过使用THREE.LensFlare，可以为场景中的光源添加镜头光晕效果。</td>
          </tr>
        </tbody>
      </table>

      <h3 id="光源内容的相关更新">
      <a name="t2"/>光源内容的相关更新</h3>

      <p>由于我也是边学边更新，有不如的地方大家可以留言给我，或者加群沟通。未来的几节更新首先更新THREE.AmbientLight、THREE.PointLight、THREE.SpotLight和THREE.DirectionalLight。这四种光源都是继承至THREE.Light对象。这些光源都比较简单，可用于大多数的场景当中。 <br> 然后会更新就是剩下的三种THREE.HemisphereLight、THREE.AreaLight和THREE.LensFlare只在特殊情况下使用的光源。
      </p>

      <h3 id="点光源聚光源和平行光源之间的区别">
      <a name="t3"/>点光源、聚光源和平行光源之间的区别</h3>

      <p><img src="https://img-blog.csdn.net/20170815235846238?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <p>（1）点光源THREE.PointLight 从特定的一点向所有方向发射光线。 <br> （2）聚光灯光源THREE.SpotLight 从特定的一点发射锥形形状的光线。 <br> （3）平行光源THREE.DirectionalLight 不是从单个点发射光线，而是从二维平面发射光线，光线彼此平行。</p>
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
