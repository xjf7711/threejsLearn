<template>
  <div class="index">
    <div class="article-detail">
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <h2>第八章 光与影</h2>
          <p>图像渲染的丰富效果很大程度上也要归功于光与影的利用。真实世界中的光影效果非常复杂，但是其本质——光的传播原理却又是非常单一的，这便是自然界繁简相成的又一例证。为了使计算机模拟丰富的光照效果，人们提出了几种不同的光源模型（环境光、平行光、点光源、聚光灯等），在不同场合下组合利用，将能达到很好的光照效果。</p>

          <p>在Three.js中，光源与阴影的创建和使用是十分方便的。在学会了如何控制光影的基本方法之后，如果能将其灵活应用，将能使场景的渲染效果更加丰富逼真。在本章中，我们将探讨四种常用的光源（环境光、点光源、平行光、聚光灯）和阴影带来的效果，以及如何去创建使用光影。 </p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        8.1 环境光
      </h2>
      <div class="typo typo-selection">
        <div id="article1" class="markdown-body" deep="6">
          <p>环境光是指场景整体的光照效果，是由于场景内若干光源的多次反射形成的亮度一致的效果，通常用来为整个场景指定一个基础亮度。因此，环境光没有明确的光源位置，在各处形成的亮度也是一致的。</p>

          <p>在设置环境光时，只需要指定光的颜色：</p>

          <pre><code>THREE.AmbientLight(hex)
          </code></pre>

          <p>其中，<code>hex</code>是十六进制的RGB颜色信息，如红色表示为<code>0xff0000</code>。</p>

          <p>创建环境光并将其添加到场景中的完整做法是：</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.1.1.html">例8.1.1</a></strong></p>

          <pre><code>var light = new THREE.AmbientLight(0xffffff);
          scene.add(light);
          </code></pre>

          <p>但是，如果此时场景中没有物体，只添加了这个环境光，那么渲染的结果仍然是一片黑。所以，我们添加两个长方体看下效果：</p>

          <pre><code>var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
          new THREE.MeshLambertMaterial({color: 0x00ff00}));
          greenCube.position.x = 3;
          scene.add(greenCube);

          var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
          new THREE.MeshLambertMaterial({color: 0xffffff}));
          whiteCube.position.x = -3;
          scene.add(whiteCube);
          </code></pre>

          <p><img src="/download/01YhNTfeuHOY" alt=""></p>

          <p>如果想让环境光暗些，可以将其设置为<code>new THREE.AmbientLight(0xcccccc)</code>等，效果为：</p>

          <p><img src="/download/01YhNThiJbq5" alt=""></p>

          <p>那么，如果使用红色的环境光会有什么样的效果呢？</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.1.2.html">例8.1.2</a></strong></p>

          <p>我们将环境光设置为红色，场景内同样放置绿色和白色的长方体，效果为：</p>

          <p><img src="/download/01YhNSXgeUe1" alt=""></p>

          <p>我们将两个长方体材质的颜色分别设置为绿色和白色，渲染的结果是这两个长方体都被渲染成了环境光的红色，这一结果可能有些出乎你的意料。其实，环境光并不在乎物体材质的<code>color</code>属性，而是<code>ambient</code>属性。<code>ambient</code>属性的默认值是<code>0xffffff</code>。因此，如果将这两个长方体设置为：</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.1.3.html">例8.1.3</a></strong></p>

          <pre><code>var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
          new THREE.MeshLambertMaterial({ambient: 0x00ff00}));
          greenCube.position.x = 3;
          scene.add(greenCube);

          var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
          new THREE.MeshLambertMaterial({ambient: 0xffffff}));
          whiteCube.position.x = -3;
          scene.add(whiteCube);
          </code></pre>

          <p>效果是：</p>

          <p><img src="/download/01YhNTTCGnKw" alt=""></p>

          <p>也就意味着<code>ambient</code>为<code>0x00ff00</code>的右边的长方体被渲染成了黑色。这是因为不透明物体的颜色其实是其反射光的颜色，而<code>ambient</code>属性表示的是物体反射环境光的能力。对于<code>0x00ff00</code>的物体，红色通道是<code>0</code>，而环境光是完全的红光，因此该长方体不能反射任何光线，最终的渲染颜色就是黑色；而对于<code>0xffffff</code>的白色长方体，红色通道是<code>0xff</code>，因而能反射所有红光，渲染的颜色就是红色。</p>

          <p>前面我们看到，当环境光不是白色或灰色的时候，渲染的效果往往会很奇怪。因此，环境光通常使用白色或者灰色，作为整体光照的基础。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        8.2 点光源
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>点光源是不计光源大小，可以看作一个点发出的光源。点光源照到不同物体表面的亮度是线性递减的，因此，离点光源距离越远的物体会显得越暗。</p>

          <p>点光源的构造函数是：</p>

          <pre><code>THREE.PointLight(hex, intensity, distance)
          </code></pre>

          <p>其中，<code>hex</code>是光源十六进制的颜色值；<code>intensity</code>是亮度，缺省值为<code>1</code>，表示100%亮度；<code>distance</code>是光源最远照射到的距离，缺省值为<code>0</code>。</p>

          <p>创建点光源并将其添加到场景中的完整做法是：</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.2.1.html">例8.2.1</a></strong></p>

          <pre><code>var light = new THREE.PointLight(0xffffff, 2, 100);
          light.position.set(0, 1.5, 2);
          scene.add(light);
          </code></pre>

          <p><img src="/download/01YhmtleMiiX" alt=""></p>

          <p>注意，这里光在每个面上的亮度是不同的，对于每个三角面片，将根据三个顶点的亮度进行插值。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        8.3 平行光
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body" deep="6">
          <p>我们都知道，太阳光常常被看作平行光，这是因为相对地球上物体的尺度而言，太阳离我们的距离足够远。对于任意平行的平面，平行光照射的亮度都是相同的，而与平面所在位置无关。</p>

          <p>平行光的构造函数是：</p>

          <pre><code>THREE.DirectionalLight(hex, intensity)
          </code></pre>

          <p>其中，<code>hex</code>是光源十六进制的颜色值；<code>intensity</code>是亮度，缺省值为1，表示100%亮度。</p>

          <p>此外，对于平行光而言，设置光源位置尤为重要。</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.3.1.html">例8.3.1</a></strong></p>

          <pre><code>var light = new THREE.DirectionalLight();
          light.position.set(2, 5, 3);
          scene.add(light);
          </code></pre>

          <p>注意，这里设置光源位置并不意味着所有光从<code>(2, 5, 3)</code>点射出（如果是的话，就成了点光源），而是意味着，平行光将以矢量<code>(-2, -5, -3)</code>的方向照射到所有平面。因此，平面亮度与平面的位置无关，而只与平面的法向量相关。只要平面是平行的，那么得到的光照也一定是相同的。</p>

          <p><img src="/download/01Yhmu8yGCGb" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        8.4 聚光灯
      </h2>
      <div class="typo typo-selection">
        <div id="article4" class="markdown-body" deep="6">
          <p>从官网上的定义：</p>

          <blockquote>
            <p>A point light that can cast shadow in one direction.</p>
          </blockquote>

          <p>可以看出，聚光灯是一种特殊的点光源，它能够朝着一个方向投射光线。聚光灯投射出的是类似圆锥形的光线，这与我们现实中看到的聚光灯是一致的。</p>

          <p>其构造函数为：</p>

          <pre><code>THREE.SpotLight(hex, intensity, distance, angle, exponent)
          </code></pre>

          <p>相比点光源，多了<code>angle</code>和<code>exponent</code>两个参数。<code>angle</code>是聚光灯的张角，缺省值是<code>Math.PI / 3</code>，最大值是<code>Math.PI / 2</code>；<code>exponent</code>是光强在偏离<code>target</code>的衰减指数（<code>target</code>需要在之后定义，缺省值为<code>(0, 0, 0)</code>），缺省值是<code>10</code>。</p>

          <p>在调用构造函数之后，除了设置光源本身的位置，一般还需要设置<code>target</code>：</p>

          <pre><code>light.position.set(x1, y1, z1);
          light.target.position.set(x2, y2, z2);
          </code></pre>

          <p>除了设置<code>light.target.position</code>的方法外，如果想让聚光灯跟着某一物体移动（就像真的聚光灯！），可以<code>target</code>指定为该物体：</p>

          <pre><code>var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshLambertMaterial({color: 0x00ff00}));

          var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
          light.target = cube;
          </code></pre>

          <p>不妨试着让该物体运动起来看下效果吧！</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.4.1.html"><strong>例8.4.1</strong></a></p>

          <p><img src="/download/01YiFNMN1e9q" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        8.5 阴影
      </h2>
      <div class="typo typo-selection">
        <div id="article5" class="markdown-body" deep="6">
          <p>明暗是相对的，阴影的形成也就是因为比周围获得的光照更少。因此，要形成阴影，光源必不可少。</p>

          <p><strong>在Three.js中，能形成阴影的光源只有<code>THREE.DirectionalLight</code>与<code>THREE.SpotLight</code>；而相对地，能表现阴影效果的材质只有<code>THREE.LambertMaterial</code>与<code>THREE.PhongMaterial</code>。</strong>因而在设置光源和材质的时候，一定要注意这一点。</p>

          <p>下面，我们以聚光灯为例，在<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.4.1.html">例8.4.1</a>的基础上增加阴影效果。</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter8/8.5.1.html"><strong>例8.5.1</strong></a></p>

          <p>首先，我们需要在初始化时，告诉渲染器渲染阴影：</p>

          <pre><code>renderer.shadowMapEnabled = true;
          </code></pre>

          <p>然后，对于光源以及所有要产生阴影的物体调用：</p>

          <pre><code>xxx.castShadow = true;
          </code></pre>

          <p>对于接收阴影的物体调用：</p>

          <pre><code>xxx.receiveShadow = true;
          </code></pre>

          <p>比如场景中一个平面上有一个正方体，想要让聚光灯照射在正方体上，产生的阴影投射在平面上，那么就需要对聚光灯和正方体调用<code>castShadow = true</code>，对于平面调用<code>receiveShadow = true</code>。</p>

          <p>以上就是产生阴影效果的必要步骤了，不过通常还需要设置光源的阴影相关属性，才能正确显示出阴影效果。</p>

          <p>对于聚光灯，需要设置<code>shadowCameraNear</code>、<code>shadowCameraFar</code>、<code>shadowCameraFov</code>三个值，类比我们在第二章学到的透视投影照相机，只有介于<code>shadowCameraNear</code>与<code>shadowCameraFar</code>之间的物体将产生阴影，<code>shadowCameraFov</code>表示张角。</p>

          <p>对于平行光，需要设置<code>shadowCameraNear</code>、<code>shadowCameraFar</code>、<code>shadowCameraLeft</code>、<code>shadowCameraRight</code>、<code>shadowCameraTop</code>以及<code>shadowCameraBottom</code>六个值，相当于正交投影照相机的六个面。同样，只有在这六个面围成的长方体内的物体才会产生阴影效果。</p>

          <p>为了看到阴影照相机的位置，通常可以在调试时开启<code>light.shadowCameraVisible = true</code>。</p>

          <p>至此，阴影效果已经能正常显示了：</p>

          <p><img src="/download/01YiFPFWwEKv" alt=""></p>

          <p>如果想要修改阴影的深浅，可以通过设置<code>shadowDarkness</code>，该值的范围是<code>0</code>到<code>1</code>，越小越浅。</p>

          <p>另外，这里实现阴影效果的方法是<a href="http://en.wikipedia.org/wiki/Shadow_mapping">Shadow Mapping</a>，即阴影是作为渲染前计算好的贴图贴上去的，因而会受到贴图像素大小的限制。所以可以通过设置<code>shadowMapWidth</code>与<code>shadowMapHeight</code>值控制贴图的大小，来改变阴影的精确度。</p>

          <p>而如果想实现软阴影的效果，可以通过<code>renderer.shadowMapSoft = true;</code>方便地实现。</p>

          <p>设置阴影完整的代码是：</p>

          <pre>
            <code>
              renderer = new THREE.WebGLRenderer();
              renderer.shadowMapEnabled = true;
              renderer.shadowMapSoft = true;

              var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
                      new THREE.MeshLambertMaterial({color: 0xcccccc}));
              plane.rotation.x = -Math.PI / 2;
              plane.position.y = -1;
              plane.receiveShadow = true;
              scene.add(plane);

              cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
                      new THREE.MeshLambertMaterial({color: 0x00ff00}));
              cube.position.x = 2;
              cube.castShadow = true;
              scene.add(cube);

              var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
              light.position.set(2, 5, 3);
              light.target = cube;
              light.castShadow = true;

              light.shadowCameraNear = 2;
              light.shadowCameraFar = 10;
              light.shadowCameraFov = 30;
              light.shadowCameraVisible = true;

              light.shadowMapWidth = 1024;
              light.shadowMapHeight = 1024;
              light.shadowDarkness = 0.3;

              scene.add(light);
            </code>
          </pre>

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
