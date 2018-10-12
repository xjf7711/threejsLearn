<template>
  <div class="example">
    <h2>51 使用ThreeBSP库进行Three.js网格组合</h2>
    <div class="markdown_views">
      <!-- flowchart 箭头图标 勿删 -->
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><path id="raphael-marker-block" stroke-linecap="round" d="M5,0 0,2.5 5,5z" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"/></svg>
      <h2 id="简介"><a name="t0"/>简介</h2>

      <p>之前我们一直使用Three.js默认提供的几何体，今天我们使用 ThreeBSP库，可以将现有的模型组合出更多个性的模型来使用。我们可以使用ThreeBSP库里面的三个函数进行现有模型的组合，分别是：差集(相减)、并集(组合、相加)、交集(两几何体重合的部分)。下面我们介绍一下三个函数，并提供每个方法的简单案例。</p>

      <p>查看案例效果：<a href="http://www.wjceo.com/blog/threejs/2018-02-12/53.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/53.html</a></p>

      <h2 id="相关函数"><a name="t1"/>相关函数</h2>

      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>intersect（交集）</td>
          <td>使用该函数可以基于两个现有几何体的重合的部分定义此几何体的形状。</td>
        </tr>
          <tr>
            <td>union（并集）</td>
            <td>使用该函数可以将两个几何体联合起来创建出一个新的几何体。</td>
          </tr>
          <tr>
            <td>subtract（差集）</td>
            <td>使用该函数可以在第一个几何体中移除两个几何体重叠的部分来创建新的几何体。</td>
          </tr>
      </tbody></table>

      <h2 id="使用intersect交集创建新几何体"><a name="t2"/>使用intersect（交集）创建新几何体</h2>

      <p>首先，需要先把库文件引入，我的github地址是</p>
      <pre class="prettyprint" name="code">
  <code class="hljs xml has-numbering"><span class="hljs-tag">&lt;<span class="hljs-title">script</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"https://johnson2heng.github.io/three.js-demo/lib/threebsp.js"</span>&gt;</span>
    <span class="javascript"/><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
  </code>
      </pre>

      <p>请自行保存到本地。 <br>
        然后创建两个几何体，一个球形 sphere 一个立方体 cube 。 <br>
      <img src="https://img-blog.csdn.net/20180101014230594?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <pre class="prettyprint" name="code"><code class="hljs oxygene has-numbering"><span class="hljs-comment">//创建球形几何体</span>
        <span class="hljs-keyword">var</span> sphereGeometry = <span class="hljs-keyword">new</span> THREE.SphereGeometry(<span class="hljs-number">50</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);
        <span class="hljs-keyword">var</span> sphere = createMesh(sphereGeometry);

        <span class="hljs-comment">//创建立方体几何体</span>
        <span class="hljs-keyword">var</span> cubeGeometry = <span class="hljs-keyword">new</span> THREE.BoxGeometry(<span class="hljs-number">30</span>, <span class="hljs-number">30</span>, <span class="hljs-number">30</span>);
        <span class="hljs-keyword">var</span> cube = createMesh(cubeGeometry);
        cube.position.x = -<span class="hljs-number">50</span>;

        scene.<span class="hljs-keyword">add</span>(sphere);
        scene.<span class="hljs-keyword">add</span>(cube);</code></pre>

      <p>两个立方体的效果就是这样，有一部分重叠。 <br>
        我们就创建出重叠的这一部分的图形，具体代码是这样的 <br>
      <img src="https://img-blog.csdn.net/20180101022815267?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <p><img src="https://img-blog.csdn.net/20180101022633901?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <pre class="prettyprint" name="code">
  <code class="hljs oxygene has-numbering">
    <span class="hljs-comment">//创建球形几何体</span>
        <span class="hljs-keyword">var</span> sphereGeometry = <span class="hljs-keyword">new</span> THREE.SphereGeometry(<span class="hljs-number">50</span>, <span class="hljs-number">20</span>, <span class="hljs-number">20</span>);
        <span class="hljs-keyword">var</span> sphere = createMesh(sphereGeometry);

        <span class="hljs-comment">//创建立方体几何体</span>
        <span class="hljs-keyword">var</span> cubeGeometry = <span class="hljs-keyword">new</span> THREE.BoxGeometry(<span class="hljs-number">30</span>, <span class="hljs-number">30</span>, <span class="hljs-number">30</span>);
        <span class="hljs-keyword">var</span> cube = createMesh(cubeGeometry);
        cube.position.x = -<span class="hljs-number">50</span>;

        <span class="hljs-comment">//生成ThreeBSP对象</span>
        <span class="hljs-keyword">var</span> sphereBSP = <span class="hljs-keyword">new</span> ThreeBSP(sphere);
        <span class="hljs-keyword">var</span> cubeBSP = <span class="hljs-keyword">new</span> ThreeBSP(cube);

        <span class="hljs-comment">//进行并集计算</span>
        <span class="hljs-keyword">var</span> resultBSP = sphereBSP.intersect(cubeBSP);

        <span class="hljs-comment">//从BSP对象内获取到处理完后的mesh模型数据</span>
        <span class="hljs-keyword">var</span> <span class="hljs-keyword">result</span> = resultBSP.toMesh();
        <span class="hljs-comment">//更新模型的面和顶点的数据</span>
        <span class="hljs-keyword">result</span>.geometry.computeFaceNormals();
        <span class="hljs-keyword">result</span>.geometry.computeVertexNormals();

        <span class="hljs-comment">//重新赋值一个纹理</span>
        <span class="hljs-keyword">var</span> material = <span class="hljs-keyword">new</span> THREE.MeshPhongMaterial(<span class="hljs-comment">{color: 0x00ffff}</span>);
        <span class="hljs-keyword">result</span>.material = material;

        <span class="hljs-comment">//将计算出来模型添加到场景当中</span>
        scene.<span class="hljs-keyword">add</span>(<span class="hljs-keyword">result</span>);
  </code>
      </pre>

      <p>按上面的步骤，我们就可以获得交集的模型了。</p>

      <h2 id="使用union并集创建新几何体"><a name="t3"/>使用 union （并集）创建新几何体</h2>

      <p>代码和上面交集的方法一样的，只是改成了并集计算</p>

      <pre class="prettyprint" name="code"><code class="hljs oxygene has-numbering"><span class="hljs-keyword">var</span> resultBSP = sphereBSP.<span class="hljs-keyword">union</span>(cubeBSP);</code></pre>

      <p>就实现了如下的效果。 <br>
      <img src="https://img-blog.csdn.net/20180101023331022?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <h2 id="使用subtract差集创建新几何体"><a name="t4"/>使用 subtract （差集）创建新几何体</h2>

      <p>如上，直接把调用方法改掉即可</p>

      <pre class="prettyprint" name="code"><code class="hljs fix has-numbering"><span class="hljs-attribute">var resultBSP </span>=<span class="hljs-string"> sphereBSP.subtract(cubeBSP);</span></code></pre>

      <p><img src="https://img-blog.csdn.net/20180101030817841?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <p><img src="https://img-blog.csdn.net/20180101030836497?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt="这里写图片描述" title=""></p>

      <p>整个项目的代码: Example08.vue</p>
      <br>
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
