<template>
  <div class="index">
    <div class="article-detail">
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <p>在学习了几何形状和材质之后，我们就能使用他们来创建物体了。最常用的一种物体就是网格（Mesh），网格是由顶点、边、面等组成的物体；其他物体包括线段（Line）、骨骼（Bone）、粒子系统（ParticleSystem）等。创建物体需要指定几何形状和材质，其中，几何形状决定了物体的顶点位置等信息，材质决定了物体的颜色、纹理等信息。</p>
          <p>本章将介绍创建较为常用的物体：网格，然后介绍如何修改物体的属性。 </p>
        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        5.1 创建网格
      </h2>
      <div class="typo typo-selection">
        <div id="article1" class="markdown-body" deep="6">
          <p>在上两节中，我们学习了如何创建几何形状与材质，而网格的创建非常简单，只要把几何形状与材质传入其构造函数。最常用的物体是网格（Mesh），它代表包含点、线、面的几何体，其构造函数是：</p>

          <pre><code>Mesh(geometry, material)
          </code></pre>

          <p>下面，让我们通过一个具体的例子了解如何创建网格：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter5/5.1.1.html"><strong>例5.1.1</strong></a></p>

          <pre><code>var material = new THREE.MeshLambertMaterial({
          color: 0xffff00
          });
          var geometry = new THREE.CubeGeometry(1, 2, 3);
          var mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);
          </code></pre>

          <p>如果<code>material</code>和<code>geometry</code>之后不会复用的话，也可以合在一起写为：</p>

          <pre><code>var mesh = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
          new THREE.MeshLambertMaterial({
          color: 0xffff00
          })
          );
          scene.add(mesh);
          </code></pre>

          <p>添加光照后，得到的效果为：</p>

          <p><img src="/download/01YdFrYuL6CJ" alt=""></p>

          <p>如果不指定<code>material</code>，则每次会随机分配一种<code>wireframe</code>为<code>true</code>的材质，每次刷新页面后的颜色是不同的，一种可能的效果是：</p>

          <p><img src="/download/01YdFrcTxAvZ" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        5.2 修改属性
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <h1>材质</h1>

          <hr>

          <p>除了在构造函数中指定材质，在网格被创建后，也能对材质进行修改：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter5/5.2.1.html"><strong>例5.2.1</strong></a></p>

          <pre><code>var material = new THREE.MeshLambertMaterial({
          color: 0xffff00
          });
          var geometry = new THREE.CubeGeometry(1, 2, 3);
          var mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);

          mesh.material = new THREE.MeshLambertMaterial({
          color: 0xff0000
          });
          </code></pre>

          <p>最终显示的颜色是红色：</p>

          <p><img src="/download/01YdFrek23vm" alt=""></p>

          <h1>位置、缩放、旋转</h1>

          <hr>

          <p>位置、缩放、旋转是物体三个常用属性。由于<code>THREE.Mesh</code>基础自<code>THREE.Object3D</code>，因此包含<code>scale</code>、<code>rotation</code>、<code>position</code>三个属性。它们都是<code>THREE.Vector3</code>实例，因此修改其值的方法是相同的，这里以位置为例。</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter5/5.2.2.html"><strong>例5.2.2</strong></a></p>

          <p><code>THREE.Vector3</code>有<code>x</code>、<code>y</code>、<code>z</code>三个属性，如果只设置其中一个属性，则可以用以下方法：</p>

          <pre><code>mesh.position.z = 1;
          </code></pre>

          <p>如果需要同时设置多个属性，可以使用以下两种方法：</p>

          <pre><code>mesh.position.set(1.5, -0.5, 0);
          </code></pre>

          <p>或</p>

          <pre><code>mesh.position = new THREE.Vector3(1.5, -0.5, 0);
          </code></pre>

          <p>缩放对应的属性是<code>scale</code>，旋转对应的属性是<code>rotation</code>，具体方法与上例相同，分别表示沿x、y、z三轴缩放或旋转。</p>

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
