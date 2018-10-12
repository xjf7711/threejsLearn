<template>
  <div class="index">
    <div class="article-detail">
      <h2 class="article-tit">
        2.1 什么是照相机
      </h2>
      <div class="typo typo-selection">
        <div id="article21" class="markdown-body">
          <p>什么是照相机？这个问题似乎太简单了，用来拍照的机器。咔嚓！</p>

          <p>可是，在图形学中照相机的概念并非如此。</p>

          <p>我们使用Three.js创建的场景是三维的，而通常情况下显示屏是二维的，那么三维的场景如何显示到二维的显示屏上呢？照相机就是这样一个抽象，它定义了三维空间到二维屏幕的投影方式，用“照相机”这样一个类比，可以使我们直观地理解这一投影方式。</p>

          <p>而针对投影方式的不同，照相机又分为正交投影照相机与透视投影照相机。我们需要为自己的程序选择合适的照相机。这两者分别是什么，以及两者有何差异，我们将在下节中作介绍。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        2.2 正交投影vs透视投影
      </h2>
      <div class="typo typo-selection">
        <div id="article22" class="markdown-body" deep="6">
          <p>举个简单的例子来说明正交投影与透视投影照相机的区别。使用透视投影照相机获得的结果是类似人眼在真实世界中看到的有“近大远小”的效果（如下图中的(a)）；而使用正交投影照相机获得的结果就像我们在数学几何学课上老师教我们画的效果，对于在三维空间内平行的线，投影到二维空间中也一定是平行的（如下图中的(b)）。</p>

          <p><img src="static/threejs/guide/download/01YYdCnhfW2V" alt="透视投影与正交投影"></p>

          <p><em>(a)透视投影，(b)正交投影</em></p>

          <p>那么，你的程序需要正交投影还是透视投影的照相机呢？</p>

          <p>一般说来，对于制图、建模软件通常使用正交投影，这样不会因为投影而改变物体比例；而对于其他大多数应用，通常使用透视投影，因为这更接近人眼的观察效果。当然，照相机的选择并没有对错之分，你可以更具应用的特性，选择一个效果更佳的照相机。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        2.3 正交投影照相机
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body" deep="6">
          <h1>参数介绍</h1>

          <hr>

          <p>正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：</p>

          <pre><code>THREE.OrthographicCamera(left, right, top, bottom, near, far)
          </code></pre>

          <p>这六个参数分别代表正交投影照相机拍摄到的空间的六个面的位置，这六个面围成一个长方体，我们称其为<strong>视景体</strong>（Frustum）。只有在视景体内部（下图中的灰色部分）的物体才可能显示在屏幕上，而视景体外的物体会在显示之前被裁减掉。</p>

          <p><img src="static/threejs/guide/download/01YiZI4zr57Q.small" alt=""></p>

          <p>为了保持照相机的横竖比例，需要保证<code>(right - left)</code>与<code>(top - bottom)</code>的比例与Canvas宽度与高度的比例一致。</p>

          <p><code>near</code>与<code>far</code>都是指到照相机位置在深度平面的位置，而照相机不应该拍摄到其后方的物体，因此这两个值应该均为正值。为了保证场景中的物体不会因为太近或太远而被照相机忽略，一般<code>near</code>的值设置得较小，<code>far</code>的值设置得较大，具体值视场景中物体的位置等决定。</p>

          <h1>实例说明</h1>

          <hr>

          <p>下面，我们通过一个具体的例子来解释正交投影照相机的设置。</p>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter2/2.3.1.html">例2.3.1</a></strong></p>

          <h2>基本设置</h2>

          <p>设置照相机：</p>

          <pre><code>var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
          camera.position.set(0, 0, 5);
          scene.add(camera);
          </code></pre>

          <p>在原点处创建一个边长为<code>1</code>的正方体，为了和透视效果做对比，这里我们使用<code>wireframe</code>而不是实心的材质，以便看到正方体后方的边：</p>

          <pre><code>var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true
          })
          );
          scene.add(cube);
          </code></pre>

          <p>得到的效果是：</p>

          <p><img src="static/threejs/guide/download/01ujJxZ6WS5C.small" alt=""></p>

          <p>我们看到正交投影的结果是一个正方形，后面的边与前面完全重合了，这也就是正交投影与透视投影的区别所在。</p>

          <h2>长宽比例</h2>

          <p>这里，我们的Canvas宽度是<code>400px</code>，高度是<code>300px</code>，照相机水平方向距离<code>4</code>，垂直方向距离<code>3</code>，因此长宽比例保持不变。为了试验长宽比例变化时的效果，我们将照相机水平方向的距离减小为<code>2</code>：</p>

          <pre><code>var camera = new THREE.OrthographicCamera(-1, 1, 1.5, -1.5, 1, 10);
          </code></pre>

          <p>得到的结果是水平方向被拉长了：</p>

          <p><img src="static/threejs/guide/download/01ujJxbDfdbT.small" alt=""></p>

          <h2>照相机位置</h2>

          <p>接下来，我们来看看照相机位置对渲染结果的影响。在之前的例子中，我们将照相机设置在<code>(0, 0, 5)</code>位置，而由于照相机默认是面向z轴负方向放置的，所以能看到在原点处的正方体。现在，如果我们将照相机向右移动<code>1</code>个单位：</p>

          <pre><code>var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
          camera.position.set(1, 0, 5);
          </code></pre>

          <p>得到的效果是物体看上去向左移动了：</p>

          <p><img src="static/threejs/guide/download/01ujJxcHFCNq.small" alt=""></p>

          <p>仔细想一下的话，这也不难理解。就好比你人往右站了，看起来物体就相对往左移动了。</p>

          <p>那么，正交投影照相机在设置时，是否需要保证<code>left</code>和<code>right</code>是相反数呢？如果不是，那么会产生什么效果呢？下面，我们将原本的参数<code>(-2, 2, 1.5, -1.5, 1, 10)</code>改为<code>(-1, 3, 1.5, -1.5, 1, 10)</code>，即，将视景体设置得更靠右：</p>

          <pre><code>var camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);
          camera.position.set(0, 0, 5);
          </code></pre>

          <p>得到的结果是：</p>

          <p><img src="static/threejs/guide/download/01ujJxcHFCNq.small" alt=""></p>

          <p>细心的读者已经发现，这与之前向右移动照相机得到的效果是等价的。</p>

          <h2>换个角度看世界</h2>

          <p>到现在为止，我们使用照相机都是沿z轴负方向观察的，因此看到的都是一个正方形。现在，我们想尝试一下仰望这个正方体。我们已经学会设置照相机的位置，不妨将其设置在<code>(4, -3, 5)</code>处：</p>

          <pre><code>camera.position.set(4, -3, 5);
          </code></pre>

          <p>但是现在照相机沿z轴负方向观察的，因此观察不到正方体，只看到一片黑。我们可以通过<code>lookAt</code>函数指定它看着原点方向：</p>

          <pre><code>camera.lookAt(new THREE.Vector3(0, 0, 0));
          </code></pre>

          <p>这样我们就能过仰望正方体啦：</p>

          <p><img src="static/threejs/guide/download/01ujJxdnEsIf.small" alt=""></p>

          <p>不过一定要注意，<code>lookAt</code>函数接受的是一个<code>THREE.Vector3</code>的实例，因此千万别写成<code>camera.lookAt(0, 0, 0)</code>，否则非但不能得到理想的效果，而且不会报错，使你很难找到问题所在。</p>

          <p>现在，恭喜你学会设置正交照相机了！虽然它看起来较为简单，但是加入动画、交互等因素后，可以为你的应用程序增色不少的！</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        2.4 透视投影照相机
      </h2>
      <div class="typo typo-selection">
        <div id="article" class="markdown-body" deep="6">
          <h1>参数介绍</h1>

          <hr>

          <p>透视投影照相机（Perspective Camera）的构造函数是：</p>

          <pre><code>THREE.PerspectiveCamera(fov, aspect, near, far)
          </code></pre>

          <p>让我们通过一张透视照相机投影的图来了解这些参数。</p>

          <p><img src="static/threejs/guide/download/01YYrMaASOzm.small" alt="透视投影照相机示意图"></p>

          <p>透视图中，灰色的部分是视景体，是可能被渲染的物体所在的区域。<code>fov</code>是视景体竖直方向上的张角（是角度制而非弧度制），如侧视图所示。</p>

          <p><code>aspect</code>等于<code>width / height</code>，是照相机水平方向和竖直方向长度的比值，通常设为Canvas的横纵比例。</p>

          <p><code>near</code>和<code>far</code>分别是照相机到视景体最近、最远的距离，均为正值，且<code>far</code>应大于<code>near</code>。</p>

          <h1>实例说明</h1>

          <hr>

          <p>下面，我们从一个最简单的例子学习设置透视投影照相机。</p>

          <h2>基本设置</h2>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter2/2.4.1.html"><strong>例2.4.1</strong></a></p>

          <p>设置透视投影照相机，这里Canvas长<code>400px</code>，宽<code>300px</code>，所以aspect设为<code>400 / 300</code>：</p>

          <pre><code>var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
          camera.position.set(0, 0, 5);
          scene.add(camera);
          </code></pre>

          <p>和<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter2/2.3.1.html"><strong>例2.3.1</strong></a>一样，设置一个在原点处的边长为1的正方体：</p>

          <pre><code>// a cube in the scene
          var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
          color: 0xff0000,
          wireframe: true
          })
          );
          scene.add(cube);
          </code></pre>

          <p>得到的结果是：</p>

          <p><img src="static/threejs/guide/download/01ujJxft5Sgb.small" alt=""></p>

          <p>对比<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter2/2.3.1.html"><strong>例2.3.1</strong></a>正方形的效果，透视投影可以看到全部的12条边，而且有近大远小的效果，这也就是与正交投影的区别。</p>

          <h2>竖直张角</h2>

          <p>接下来，我们来看下<code>fov</code>的改变对渲染效果的影响。我们将原来的<code>45</code>改为<code>60</code>，得到这样的效果：</p>

          <p><img src="static/threejs/guide/download/01ujJxh0RBxy.small" alt=""></p>

          <p>为什么正方体显得更小了呢？我们从下面的侧视图来看，虽然正方体的实际大小并未改变，但是将照相机的竖直张角设置得更大时，视景体变大了，因而正方体相对于整个视景体的大小就变小了，看起来正方形就显得变小了。</p>

          <p><img src="static/threejs/guide/download/01YYrNchAHXz" alt=""></p>

          <p>注意，改变<code>fov</code>并不会引起画面横竖比例的变化，而改变<code>aspect</code>则会改变横竖比例。这一效果类似2.3节，此处不再重复说明。</p>

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
