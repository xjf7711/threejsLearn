<template>
  <div class="index">
    <div class="article-detail">
      <h2 class="article-tit">
        第4章 材质
      </h2>
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <p>材质（Material）是独立于物体顶点信息之外的与渲染效果相关的属性。通过设置材质可以改变物体的颜色、纹理贴图、光照模式等。</p>

          <p>本章将介绍基本材质、两种基于光照模型的材质，以及使用法向量作为材质。除此之外，本章还将介绍如何使用图像作为材质。 </p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        4.1 基本材质
      </h2>
      <div class="typo typo-selection">
        <div id="article1" class="markdown-body">
          <p>使用基本材质（BasicMaterial）的物体，渲染后物体的颜色始终为该材质的颜色，而不会由于光照产生明暗、阴影效果。如果没有指定材质的颜色，则颜色是随机的。其构造函数是：</p>

          <pre><code>THREE.MeshBasicMaterial(opt)
          </code></pre>

          <p>其中，<code>opt</code>可以缺省，或者为包含各属性的值。如新建一个不透明度为0.75的黄色材质：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.1.1.html"><strong>例4.1.1</strong></a></p>

          <pre><code>new THREE.MeshBasicMaterial({
          color: 0xffff00,
          opacity: 0.75
          });
          </code></pre>

          <p>将其应用于一个正方体（方法参见3.1节），效果为：</p>

          <p><img src="static/threejs/guide/download/01YcqIzlPlcs" alt=""></p>

          <p>接下来，我们介绍几个较为常用的属性。</p>

          <ul>
            <li><code>visible</code>：是否可见，默认为<code>true</code></li>
            <li><code>side</code>：渲染面片正面或是反面，默认为正面<code>THREE.FrontSide</code>，可设置为反面<code>THREE.BackSide</code>，或双面<code>THREE.DoubleSide</code></li>
            <li><code>wireframe</code>：是否渲染线而非面，默认为<code>false</code></li>
            <li><code>color</code>：十六进制RGB颜色，如红色表示为<code>0xff0000</code></li>
            <li><code>map</code>：使用纹理贴图，详见4.5节</li>
          </ul>

          <p>对于基本材质，即使改变场景中的光源，使用该材质的物体也始终为颜色处处相同的效果。当然，这不是很具有真实感，因此，接下来我们将介绍更为真实的光照模型：Lambert光照模型以及Phong光照模型。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        4.2 Lambert材质
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>Lambert材质（MeshLambertMaterial）是符合Lambert光照模型的材质。Lambert光照模型的主要特点是只考虑漫反射而不考虑镜面反射的效果，因而对于金属、镜子等需要镜面反射效果的物体就不适应，对于其他大部分物体的漫反射效果都是适用的。</p>

          <p>其光照模型公式为：</p>

          <pre><code>Idiffuse = Kd * Id * cos(theta)
          </code></pre>

          <p>其中，<code>Idiffuse</code>是漫反射光强，<code>Kd</code>是物体表面的漫反射属性，<code>Id</code>是光强，<code>theta</code>是光的入射角弧度。</p>

          <p>当然，对于使用Three.js的Lambert材质，不需要了解以上公式就可以直接使用。创建一个黄色的Lambert材质的方法为：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.2.1.html"><strong>例4.2.1</strong></a></p>

          <pre><code>new THREE.MeshLambertMaterial({
          color: 0xffff00
          })
          </code></pre>

          <p>在使用了光照之后（具体方法参见第8章），得到这样的效果：</p>

          <p><img src="static/threejs/guide/download/01Yd1dCsz1hd" alt=""></p>

          <p><code>color</code>是用来表现材质对散射光的反射能力，也是最常用来设置材质颜色的属性。除此之外，还可以用<code>ambient</code>和<code>emissive</code>控制材质的颜色。</p>

          <p><code>ambient</code>表示对环境光的反射能力，只有当设置了<code>AmbientLight</code>后，该值才是有效的，材质对环境光的反射能力与环境光强相乘后得到材质实际表现的颜色。</p>

          <p><code>emissive</code>是材质的自发光颜色，可以用来表现光源的颜色。单独使用红色的自发光：</p>

          <pre><code>new THREE.MeshLambertMaterial({
          emissive: 0xff0000
          })
          </code></pre>

          <p>效果为：</p>

          <p><img src="static/threejs/guide/download/01Yd1dYesUKl" alt=""></p>

          <p>如果同时使用红色的自发光与黄色的散射光：</p>

          <pre><code>new THREE.MeshLambertMaterial({
          color: 0xffff00,
          emissive: 0xff0000
          })
          </code></pre>

          <p>效果为：</p>

          <p><img src="static/threejs/guide/download/01Yd1dahduU8" alt=""></p>

          <p>如果将同样的材质用于球体，看起来像不像滚烫的太阳呢？</p>

          <p><img src="static/threejs/guide/download/01Yd1deIFZpV" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        4.3 Phong材质
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body">
          <p>Phong材质（MeshPhongMaterial）是符合Phong光照模型的材质。和Lambert不同的是，Phong模型考虑了镜面反射的效果，因此对于金属、镜面的表现尤为适合。</p>

          <p>漫反射部分和Lambert光照模型是相同的，镜面反射部分的模型为：</p>

          <pre><code> Ispecular = Ks * Is * (cos(alpha)) ^ n
          </code></pre>

          <p>其中，<code>Ispecular</code>是镜面反射的光强，<code>Ks</code>是材质表面镜面反射系数，<code>Is</code>是光源强度，<code>alpha</code>是反射光与视线的夹角，<code>n</code>是高光指数，越大则高光光斑越小。</p>

          <p>由于漫反射部分与Lambert模型是一致的，因此，如果不指定镜面反射系数，而只设定漫反射，其效果与Lambert是相同的：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.3.1.html"><strong>例4.3.1</strong></a></p>

          <pre><code>new THREE.MeshPhongMaterial({
          color: 0xffff00
          });
          </code></pre>

          <p><img src="static/threejs/guide/download/01Yd1efqqsn5" alt=""></p>

          <p>同样地，可以指定<code>emissive</code>和<code>ambient</code>值，这里不再说明。下面就<code>specular</code>值指定镜面反射系数作说明。首先，我们只使用镜面反射，将高光设为红色，应用于一个球体：</p>

          <pre><code>var material = new THREE.MeshPhongMaterial({
          specular: 0xff0000
          });
          var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 8), material);
          </code></pre>

          <p>效果为：</p>

          <p><img src="static/threejs/guide/download/01Yd1epRAhXy" alt=""></p>

          <p>可以通过<code>shininess</code>属性控制光照模型中的<code>n</code>值，当<code>shininess</code>值越大时，高光的光斑越小，默认值为<code>30</code>。我们将其设置为<code>1000</code>时：</p>

          <pre><code>new THREE.MeshPhongMaterial({
          specular: 0xff0000,
          shininess: 1000
          });
          </code></pre>

          <p>效果为：</p>

          <p><img src="static/threejs/guide/download/01Yd1evoE4fH" alt=""></p>

          <p>使用黄色的镜面光，红色的散射光：</p>

          <pre><code>material = new THREE.MeshPhongMaterial({
          color: 0xff0000,
          specular: 0xffff00,
          shininess: 100
          });
          </code></pre>

          <p><img src="static/threejs/guide/download/01Yd1f3VBcV6" alt=""></p>

          <p>看起来是不是像个桌球了呢？</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        4.4 法向材质
      </h2>
      <div class="typo typo-selection">
        <div id="article4" class="markdown-body" deep="6">
          <p>法向材质可以将材质的颜色设置为其法向量的方向，有时候对于调试很有帮助。</p>

          <p>法向材质的设定很简单，甚至不用设置任何参数：</p>

          <pre><code>new THREE.MeshNormalMaterial()
          </code></pre>

          <p>材质的颜色与照相机与该物体的角度相关，下面我们只改变照相机位置，观察两个角度的颜色变化：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.4.1.html"><strong>例4.4.1</strong></a></p>

          <p><code>camera.position.set(5, 25, 25);</code>的效果：</p>

          <p><img src="static/threejs/guide/download/01Yd1fJ9vVWF" alt=""></p>

          <p><code>camera.position.set(25, 25, 25);</code>的效果：</p>

          <p><img src="static/threejs/guide/download/01Yd1fIjCp3I" alt=""></p>

          <p>我们观察的是同样的三个面，但是由于观察的角度不同，物体的颜色就不同了。因此，在调试时，要知道物体的法向量，使用法向材质就很有效。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        4.5 材质的纹理贴图
      </h2>
      <div class="typo typo-selection">
        <div id="article5" class="markdown-body" deep="6">
          <p>在此之前，我们使用的材质都是单一颜色的，有时候，我们却希望使用图像作为材质。这时候，就需要导入图像作为纹理贴图，并添加到相应的材质中。下面，我们介绍具体的做法。</p>

          <h1>单张图像应用于长方体</h1>

          <hr>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.5.1.html"><strong>例4.5.1</strong></a></p>

          <p>首先，我们选择一张长宽均为128像素的图像：</p>

          <p><img src="static/threejs/guide/download/01YdRBbTLpi6" alt=""></p>

          <p>将其导入纹理中：</p>

          <pre><code>var texture = THREE.ImageUtils.loadTexture('../img/0.png');
          </code></pre>

          <p>然后，将材质的<code>map</code>属性设置为<code>texture</code>：</p>

          <pre><code>var material = new THREE.MeshLambertMaterial({
          map: texture
          });
          </code></pre>

          <p>这样就完成了将图片应用于材质的基本步骤。但是由于现在我们还没使用动画，画面只被渲染了一次，而在导入纹理之前，已经完成了这次渲染，因此看到的只是一片黑。所以，如果没有重绘函数（将在下一章介绍），就需要在完成导入纹理的步骤后，重新绘制画面，这是在回调函数中实现的：</p>

          <pre><code>var texture = THREE.ImageUtils.loadTexture('../img/0.png', {}, function() {
          renderer.render(scene, camera);
          });
          var material = new THREE.MeshLambertMaterial({
          map: texture
          });
          </code></pre>

          <p>现在，就能看到这样的效果了：</p>

          <p><img src="static/threejs/guide/download/01YdRBgn7Nsq" alt=""></p>

          <p>类似地，如果将其应用于球体，将会把整个球体应用该图像：</p>

          <p><img src="static/threejs/guide/download/01YdRBk72ob7" alt=""></p>

          <h1>六张图像应用于长方体</h1>

          <hr>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.5.2.html"><strong>例4.5.2</strong></a></p>

          <p>有时候，我们希望长方体的六面各种的贴图都不同。因此，我们首先准备了六张颜色各异的图像，分别写了数字0到5。然后，分别导入图像到六个纹理，并设置到六个材质中：</p>

          <pre><code>var materials = [];
          for (var i = 0; i &lt; 6; ++i) {
          materials.push(new THREE.MeshBasicMaterial({
          map: THREE.ImageUtils.loadTexture('../img/' + i + '.png',
          {}, function() {
          renderer.render(scene, camera);
          }),
          overdraw: true
          }));
          }

          var cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5),
          new THREE.MeshFaceMaterial(materials));
          scene.add(cube);
          </code></pre>

          <p>效果为：</p>

          <p><img src="static/threejs/guide/download/01YdRC1icOKh" alt=""></p>

          <h1>棋盘格</h1>

          <hr>

          <p>现在，我们有一个黑白相间的图像：</p>

          <p><img src="static/threejs/guide/download/01YdRC86nAUx" alt=""></p>

          <p>我们希望用它填满一个屏幕。按照之前的做法依法炮制：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter4/4.5.3.html"><strong>例4.5.3</strong></a></p>

          <pre><code>var texture = THREE.ImageUtils.loadTexture('../img/chess.png', {}, function() {
          renderer.render(scene, camera);
          });
          </code></pre>

          <p>效果是：</p>

          <p><img src="static/threejs/guide/download/01YdRCCQ8piG" alt=""></p>

          <p>可是，棋盘格是8横8纵64个小方格组成的，那应该怎么办呢？</p>

          <p>首先，我们需要指定重复方式为两个方向（<code>wrapS</code>和<code>wrapT</code>）都重复：</p>

          <pre><code>texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          </code></pre>

          <p>然后，设置两个方向上都重复4次，由于我们的图像本来是有2行2列，所以重复4次即为8行8列：</p>

          <pre><code>texture.repeat.set(4, 4);
          </code></pre>

          <p>最终就得到了棋盘格：</p>

          <p><img src="static/threejs/guide/download/01YdRCMAK2Xq" alt=""></p>

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
p,
li,
pre {
  text-align: left;
}
.index {
  padding: 10px;
}
</style>
