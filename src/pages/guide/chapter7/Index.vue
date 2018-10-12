<template>
  <div class="index">
    <div class="article-detail">
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <p>第3章中我们了解到，使用Three.js创建常见几何体是十分方便的，但是对于人或者动物这样非常复杂的模型使用几何体组合就非常麻烦了。因此，Three.js允许用户导入由<em>3ds Max</em>等工具制作的三维模型，并添加到场景中。</p>

          <p>本章以<em>3ds Max</em>为例，介绍如何导入外部模型。 </p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        7.1 支持格式
      </h2>
      <div class="typo typo-selection">
        <div id="article1" class="markdown-body">
          <p>Three.js有一系列导入外部文件的辅助函数，是在<code>three.js</code>之外的，使用前需要额外下载，在<a href="https://github.com/mrdoob/three.js/tree/master/examples/js/loaders">https://github.com/mrdoob/three.js/tree/master/examples/js/loaders</a>可以找到。</p>

          <p><code>*.obj</code>是最常用的模型格式，导入<code>*.obj</code>文件需要<code>OBJLoader.js</code>；导入带<code>*.mtl</code>材质的<code>*.obj</code>文件需要<code>MTLLoader.js</code>以及<code>OBJMTLLoader.js</code>。另有<code>PLYLoader.js</code>、<code>STLLoader.js</code>等分别对应不同格式的加载器，可以根据模型格式自行选择。</p>

          <p>目前，支持的模型格式有：</p>

          <ul>
            <li>*.obj</li>
            <li>*.obj, *.mtl</li>
            <li>*.dae</li>
            <li>*.ctm</li>
            <li>*.ply</li>
            <li>*.stl</li>
            <li>*.wrl</li>
            <li>*.vtk</li>
          </ul>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        7.2 无材质的模型
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>本节中，我们将使用<em>3ds Max</em>创建一个茶壶模型，并将导出的没有材质的模型使用Three.js导入场景中。</p>

          <p>首先，下载<a href="https://github.com/mrdoob/three.js/raw/master/examples/js/loaders/OBJLoader.js">OBJLoader.js</a>并在HTML的<code>&lt;head&gt;</code>中使用：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter7/7.2.1.html"><strong>例7.2.1</strong></a></p>

          <pre><code>&lt;script type="text/javascript" src="OBJLoader.js"&gt;&lt;/script&gt;
          </code></pre>

          <p>然后，我们需要准备一个<code>*.obj</code>模型，可以使用建模软件导出，也可以在网上下载。这里，我们在<em>3ds Max</em>中创建一个茶壶，将其放置在原点处。设置其半径为<code>3</code>，这一单位与我们的three.js场景的单位是一致的。</p>

          <p><img src="/download/01Ydl4UN3RGN.small" alt=""></p>

          <p>导出成<code>port.obj</code>，在选项中，如果选择了<code>Export materials</code>，会生成一个同名的<code>*.mtl</code>文件。在本例中，我们不需要导出材质，因此可以不选中这项。看到导出的<code>port.obj</code>文件后，我们就可以进行下一步了。</p>

          <p>在<code>init</code>函数中，创建<code>loader</code>变量，用于导入模型：</p>

          <pre><code>var loader = new THREE.OBJLoader();
          </code></pre>

          <p><code>loader</code>导入模型的时候，接受两个参数，第一个表示模型路径，第二个表示完成导入后的回调函数，一般我们需要在这个回调函数中将导入的模型添加到场景中。</p>

          <pre><code>loader.load('../lib/port.obj', function(obj) {
          mesh = obj; //储存到全局变量中
          scene.add(obj);
          });
          </code></pre>

          <p>看到的结果是不带材质的茶壶：</p>

          <p><img src="/download/01Ydl63CF3Xk" alt=""></p>

          <p>我们在重绘函数中让茶壶旋转：</p>

          <pre><code>function draw() {
          renderer.render(scene, camera);

          mesh.rotation.y += 0.01;
          if (mesh.rotation.y &gt; Math.PI * 2) {
          mesh.rotation.y -= Math.PI * 2;
          }
          }
          </code></pre>

          <p>可以看到在某些角度时，好像有些面片没有被绘制出来，因而后方的茶嘴似乎穿越到前方了：</p>

          <p><img src="/download/01Ydl6LiOMHE" alt=""></p>

          <p>这是由于默认的情况下，只有正面的面片被绘制，而如果需要双面绘制，需要这样设置：</p>

          <pre><code>var loader = new THREE.OBJLoader();
          loader.load('../lib/port.obj', function(obj) {
          obj.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
          child.material.side = THREE.DoubleSide;
          }
          });

          mesh = obj;
          scene.add(obj);
          });
          </code></pre>

          <p>现在，正反面都会被正确绘制了：</p>

          <p><img src="/download/01Ydl6TiylTD" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        7.3 有材质的模型
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body" deep="6">
          <p>模型的材质可以有两种定义方式，一种是在代码中导入模型后设置材质，另一种是在建模软件中导出材质信息。下面，我们将分别介绍这两种方法。</p>

          <h1>代码中设置材质</h1>

          <hr>

          <p>这种方法与<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter7/7.2.1.html"><strong>例7.2.1</strong></a>类似，不同之处在于回调函数中设置模型的材质：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter7/7.3.1.html"><strong>例7.3.1</strong></a></p>

          <pre><code>var loader = new THREE.OBJLoader();
          loader.load('../lib/port.obj', function(obj) {
          obj.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshLambertMaterial({
          color: 0xffff00,
          side: THREE.DoubleSide
          });
          }
          });

          mesh = obj;
          scene.add(obj);
          });
          </code></pre>

          <p>效果为：</p>

          <p><img src="/download/01Ydl7Ih11gl" alt=""></p>

          <h1>建模软件中设置材质</h1>

          <hr>

          <p>使用上一节相似的方法导出模型，在选项中选中<code>Export materials</code>，最终导出<code>port.obj</code>模型文件以及<code>port.mtl</code>材质文件。</p>

          <p>现在，我们不再使用<code>OBJLoader.js</code>，而是使用<code>MTLLoader.js</code>与<code>OBJMTLLoader.js</code>，并且要按改顺序引用：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter7/7.3.2.html"><strong>例7.3.2</strong></a></p>

          <pre><code>&lt;script type="text/javascript" src="MTLLoader.js"&gt;&lt;/script&gt;
          &lt;script type="text/javascript" src="OBJMTLLoader.js"&gt;&lt;/script&gt;
          </code></pre>

          <p>调用方法略有不同：</p>

          <pre><code>var loader = new THREE.OBJMTLLoader();
          loader.addEventListener('load', function(event) {
          var obj = event.content;
          mesh = obj;
          scene.add(obj);
          });
          loader.load('../lib/port.obj', '../lib/port.mtl');
          </code></pre>

          <p>效果是我们在<em>3ds Max</em>中设置的材质：</p>

          <p><img src="/download/01Ydl9lhGxxP" alt=""></p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      msg: '介绍'
    }
  }
}
</script>

<style scoped>
</style>
