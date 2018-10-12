<template>
  <div class="index">
    <div class="article-detail">
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <p>在本章之前，所有画面都是静止的，本章将介绍如果使用Three.js进行动态画面的渲染。此外，将会介绍一个Three.js作者写的另外一个库，用来观测每秒帧数（FPS）。</p>
        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        6.1 实现动画效果
      </h2>
      <div class="typo typo-selection">
        <div id="article1" class="markdown-body" deep="6">
          <h1>动画原理</h1>

          <hr>

          <p>在这里，我们将动态画面简称为动画（animation）。正如动画片的原理一样，动画的本质是利用了人眼的视觉暂留特性，快速地变换画面，从而产生物体在运动的假象。而对于Three.js程序而言，动画的实现也是通过在每秒中多次重绘画面实现的。</p>

          <p>为了衡量画面切换速度，引入了每秒帧数FPS（Frames Per Second）的概念，是指每秒画面重绘的次数。FPS越大，则动画效果越平滑，当FPS小于20时，一般就能明显感受到画面的卡滞现象。</p>

          <p>那么FPS是不是越大越好呢？其实也未必。当FPS足够大（比如达到60），再增加帧数人眼也不会感受到明显的变化，反而相应地就要消耗更多资源（比如电影的胶片就需要更长了，或是电脑刷新画面需要消耗计算资源等等）。因此，选择一个适中的FPS即可。</p>

          <p>NTSC标准的电视FPS是30，PAL标准的电视FPS是25，电影的FPS标准为24。而对于Three.js动画而言，一般FPS在30到60之间都是可取的。</p>

          <h1>setInterval方法</h1>

          <hr>

          <p>如果要设置特定的FPS（虽然严格来说，即使使用这种方法，<a href="http://ejohn.org/blog/how-javascript-timers-work/">JavaScript也不能保证帧数精确性</a>），可以使用JavaScript DOM定义的方法：</p>

          <pre><code>setInterval(func, msec)
          </code></pre>

          <p>其中，<code>func</code>是每过<code>msec</code>毫秒执行的函数，如果将<code>func</code>定义为重绘画面的函数，就能实现动画效果。<code>setInterval</code>函数返回一个<code>id</code>，如果需要停止重绘，需要使用<code>clearInterval</code>方法，并传入该<code>id</code>，具体的做法为：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter6/6.1.1.html"><strong>例6.1.1</strong></a></p>

          <p>首先，在<code>init</code>函数中定义每<code>20</code>毫秒执行<code>draw</code>函数的<code>setInterval</code>，返回值记录在全局变量<code>id</code>中：</p>

          <pre><code>id = setInterval(draw, 20);
          </code></pre>

          <p>在<code>draw</code>函数中，我们首先设定在每帧中的变化（毕竟，如果每帧都是相同的，即使重绘再多次，还是不会有动画的效果），这里我们让场景中的长方体绕y轴转动。然后，执行渲染：</p>

          <pre><code>function draw() {
          mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2);
          renderer.render(scene, camera);
          }
          </code></pre>

          <p>这样，每<code>20</code>毫秒就会调用一次<code>draw</code>函数，改变长方体的旋转值，然后进行重绘。最终得到的效果就是FPS为<code>50</code>的旋转长方体。</p>

          <p>我们在HTML中添加一个按钮，按下后停止动画：</p>

          <pre><code>&lt;button id="stopBtn" onclick="stop()"&gt;Stop&lt;/button&gt;
          </code></pre>

          <p>对应的<code>stop</code>函数为：</p>

          <pre><code>function stop() {
          if (id !== null) {
          clearInterval(id);
          id = null;
          }
          }
          </code></pre>

          <h1>requestAnimationFrame方法</h1>

          <hr>

          <p>大多数时候，我们并不在意多久重绘一次，这时候就适合用<a href="https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame">requestAnimationFrame</a>方法了。它告诉浏览器在合适的时候调用指定函数，通常可能达到60FPS。</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter6/6.1.2.html"><strong>例6.1.2</strong></a></p>

          <p><code>requestAnimationFrame</code>同样有对应的<code>cancelAnimationFrame</code>取消动画：</p>

          <pre><code>function stop() {
          if (id !== null) {
          cancelAnimationFrame(id);
          id = null;
          }
          }
          </code></pre>

          <p>和<code>setInterval</code>不同的是，由于<code>requestAnimationFrame</code>只请求一帧画面，因此，除了在<code>init</code>函数中需要调用，在被其调用的函数中需要再次调用<code>requestAnimationFrame</code>：</p>

          <pre><code>function draw() {
          mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2);
          renderer.render(scene, camera);
          id = requestAnimationFrame(draw);
          }
          </code></pre>

          <p>因为<code>requestAnimationFrame</code>较为“年轻”，因而一些老的浏览器使用的是试验期的名字：<code>mozRequestAnimationFrame</code>、<code>webkitRequestAnimationFrame</code>、<code>msRequestAnimationFrame</code>，为了支持这些浏览器，我们最好在调用之前，先判断是否定义了<code>requestAnimationFrame</code>以及上述函数：</p>

          <pre><code>var requestAnimationFrame = window.requestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.msRequestAnimationFrame;
          window.requestAnimationFrame = requestAnimationFrame;
          </code></pre>

          <h1>如何取舍</h1>

          <hr>

          <p><code>setInterval</code>方法与<code>requestAnimationFrame</code>方法的区别较为微妙。一方面，最明显的差别表现在<code>setInterval</code>可以手动设定FPS，而<code>requestAnimationFrame</code>则会自动设定FPS；但另一方面，即使是<code>setInterval</code>也不能保证按照给定的FPS执行，在浏览器处理繁忙时，很可能低于设定值。当浏览器达不到设定的调用周期时，<code>requestAnimationFrame</code>采用跳过某些帧的方式来表现动画，虽然会有卡滞的效果但是整体速度不会拖慢，而<code>setInterval</code>会因此使整个程序放慢运行，但是每一帧都会绘制出来；</p>

          <p>总而言之，<code>requestAnimationFrame</code>适用于对于时间较为敏感的环境（但是动画逻辑更加复杂），而<code>setInterval</code>则可在保证程序的运算不至于导致延迟的情况下提供更加简洁的逻辑（无需自行处理时间）。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        6.2 使用stat.js记录FPS
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body">
          <p><a href="https://github.com/mrdoob/stats.js">stat.js</a>是Three.js的作者<a href="http://mrdoob.com/">Mr. Doob</a>的另一个有用的JavaScript库。很多情况下，我们希望知道实时的FPS信息，从而更好地监测动画效果。这时候，stat.js就能提供一个很好的帮助，它占据屏幕中的一小块位置（如左上角），效果为：<img src="/download/01YdR9uw0N2N" alt="">，单击后显示每帧渲染时间：<img src="/download/01YdR9wcl3ka" alt="">。</p>

          <p>首先，我们需要下载stat.js文件，可以在<a href="https://github.com/mrdoob/stats.js/blob/master/build/stats.min.js">https://github.com/mrdoob/stats.js/blob/master/build/stats.min.js</a>找到。下载后，将其放在项目文件夹下，然后在HTML中引用：</p>

          <pre><code>&lt;script type="text/javascript" src="stat.js"&gt;&lt;/script&gt;
          </code></pre>

          <p>在页面初始化的时候，对其初始化并将其添加至屏幕一角。这里，我们以右上角为例：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter6/6.2.1.html"><strong>例6.2.1</strong></a>，<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter6/6.2.2.html"><strong>例6.2.2</strong></a></p>

          <pre><code>var stat = null;

          function init() {
          stat = new Stats();
          stat.domElement.style.position = 'absolute';
          stat.domElement.style.right = '0px';
          stat.domElement.style.top = '0px';
          document.body.appendChild(stat.domElement);

          // Three.js init ...
          }
          </code></pre>

          <p>然后，在上一节介绍的动画重绘函数<code>draw</code>中调用<code>stat.begin();</code>与<code>stat.end();</code>分别表示一帧的开始与结束：</p>

          <pre><code>function draw() {
          stat.begin();

          mesh.rotation.y = (mesh.rotation.y + 0.01) % (Math.PI * 2);
          renderer.render(scene, camera);

          stat.end();
          }
          </code></pre>

          <p>最终就能得到FPS效果了。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        6.3 完整的例子
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body">
          <p>本节我们将使用一个弹球的例子来完整地学习使用动画效果。</p>

          <p>首先，我们把通用的框架部分写好，按照4.1节的方法实现动画重绘函数，并按6.2节的方法加入stat.js库：</p>

          <pre><code deep="8">var requestAnimationFrame = window.requestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.msRequestAnimationFrame;
          window.requestAnimationFrame = requestAnimationFrame;

          var scene = null;
          var camera = null;
          var renderer = null;

          var id = null;

          var stat = null;

          function init() {
          stat = new Stats();
          stat.domElement.style.position = 'absolute';
          stat.domElement.style.right = '0px';
          stat.domElement.style.top = '0px';
          document.body.appendChild(stat.domElement);

          renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('mainCanvas')
          });
          scene = new THREE.Scene();

          id = requestAnimationFrame(draw);
          }

          function draw() {
          stat.begin();

          renderer.render(scene, camera);

          id = requestAnimationFrame(draw);

          stat.end();
          }

          function stop() {
          if (id !== null) {
          cancelAnimationFrame(id);
          id = null;
          }
          }
          </code></pre>

          <p>然后，为了实现弹球弹动的效果，我们创建一个球体作为弹球模型，创建一个平面作为弹球反弹的平面。为了在<code>draw</code>函数中改变弹球的位置，我们可以声明一个全局变量<code>ballMesh</code>，以及弹球半径<code>ballRadius</code>。</p>

          <pre><code>var ballMesh = null;
          var ballRadius = 0.5;
          </code></pre>

          <p>在<code>init</code>函数中添加球体和平面，使弹球位于平面上，平面采用棋盘格图像作材质：</p>

          <pre><code>// ball
          ballMesh = new THREE.Mesh(new THREE.SphereGeometry(ballRadius, 16, 8),
          new THREE.MeshLambertMaterial({
          color: 0xffff00
          }));
          ballMesh.position.y = ballRadius;
          scene.add(ballMesh);

          // plane
          var texture = THREE.ImageUtils.loadTexture('../img/chess.png', {}, function() {
          renderer.render(scene, camera);
          });
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5),
          new THREE.MeshLambertMaterial({map: texture}));
          plane.rotation.x = -Math.PI / 2;
          scene.add(plane);
          </code></pre>

          <p>现在，每帧绘制的都是相同的效果：</p>

          <p><img src="/download/01YdfV6BrTHD" alt=""></p>

          <p>为了记录弹球的状态，我们至少需要位置、速度、加速度三个矢量，为了简单起见，这里弹球只做竖直方向上的自由落体运动，因此位置、速度、加速度只要各用一个变量表示。其中，位置就是<code>ballMesh.position.y</code>，不需要额外的变量，因此我们在全局声明速度<code>v</code>和加速度<code>a</code>：</p>

          <pre><code>var v = 0;
          var a = -0.1;
          </code></pre>

          <p>这里，<code>a = -0.1</code>代表每帧小球向y方向负方向移动<code>0.1</code>个单位。</p>

          <p>一开始，弹球从高度为<code>maxHeight</code>处自由下落，掉落到平面上时会反弹，并且速度有损耗。当速度很小的时候，弹球会在平面上作振幅微小的抖动，所以，当速度足够小时，我们需要让弹球停止跳动。因此，定义一个全局变量表示是否在运动，初始值为<code>false</code>：</p>

          <pre><code>var isMoving = false;
          </code></pre>

          <p>在HTML中定义一个按钮，点击按钮时，弹球从最高处下落：</p>

          <pre><code>function drop() {
          isMoving = true;
          ballMesh.position.y = maxHeight;
          v = 0;
          }
          </code></pre>

          <p>下面就是最关键的函数了，在<code>draw</code>函数中，需要判断当前的<code>isMoving</code>值，并且更新小球的速度和位置：</p>

          <pre><code>function draw() {
          stat.begin();

          if (isMoving) {
          ballMesh.position.y += v;
          v += a;

          if (ballMesh.position.y &lt;= ballRadius) {
          // hit plane
          v = -v * 0.9;
          }

          if (Math.abs(v) &lt; 0.001) {
          // stop moving
          isMoving = false;
          ballMesh.position.y = ballRadius;
          }
          }

          renderer.render(scene, camera);

          id = requestAnimationFrame(draw);

          stat.end();
          }
          </code></pre>

          <p>这样就实现小球的弹动效果了。最终的代码为：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter6/6.3.1.html"><strong>例6.3.1</strong></a></p>

          <pre><code>var requestAnimationFrame = window.requestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.msRequestAnimationFrame;
          window.requestAnimationFrame = requestAnimationFrame;

          var scene = null;
          var camera = null;
          var renderer = null;

          var id = null;

          var stat = null;

          var ballMesh = null;
          var ballRadius = 0.5;
          var isMoving = false;
          var maxHeight = 5;

          var v = 0;
          var a = -0.01;

          function init() {
          stat = new Stats();
          stat.domElement.style.position = 'absolute';
          stat.domElement.style.right = '0px';
          stat.domElement.style.top = '0px';
          document.body.appendChild(stat.domElement);

          renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('mainCanvas')
          });
          scene = new THREE.Scene();

          camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
          camera.position.set(5, 10, 20);
          camera.lookAt(new THREE.Vector3(0, 3, 0));
          scene.add(camera);

          // ball
          ballMesh = new THREE.Mesh(new THREE.SphereGeometry(ballRadius, 16, 8),
          new THREE.MeshLambertMaterial({
          color: 0xffff00
          }));
          ballMesh.position.y = ballRadius;
          scene.add(ballMesh);

          // plane
          var texture = THREE.ImageUtils.loadTexture('../img/chess.png', {}, function() {
          renderer.render(scene, camera);
          });
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5),
          new THREE.MeshLambertMaterial({map: texture}));
          plane.rotation.x = -Math.PI / 2;
          scene.add(plane);

          var light = new THREE.DirectionalLight(0xffffff);
          light.position.set(10, 10, 15);
          scene.add(light);

          id = requestAnimationFrame(draw);
          }

          function draw() {
          stat.begin();

          if (isMoving) {
          ballMesh.position.y += v;
          v += a;

          if (ballMesh.position.y &lt;= ballRadius) {
          // hit plane
          v = -v * 0.9;
          }

          if (Math.abs(v) &lt; 0.001) {
          // stop moving
          isMoving = false;
          ballMesh.position.y = ballRadius;
          }
          }

          renderer.render(scene, camera);

          id = requestAnimationFrame(draw);

          stat.end();
          }

          function stop() {
          if (id !== null) {
          cancelAnimationFrame(id);
          id = null;
          }
          }

          function drop() {
          isMoving = true;
          ballMesh.position.y = maxHeight;
          v = 0;
          }
          </code></pre>

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
