<template>
  <div class="example">
    <h2>13 Three.js照相机的正交投影和透视投影</h2>
    <div class="htmledit_views">

      <p>这一篇文章会的人也不看，不会的人也不需要专业术语，我直接大白话介绍一下webgl里面的照相机。</p>
      <p>照相机就相当于在模型世界中，设置一个位置，将前方的内容拍摄下来，然后再给canvas，在窗口里面显示出来在当前位置的图像。</p>
      <p>再说的简单一些，就相当于我们拿着手机拍了一张照片，放到了窗口里面显示出来。而动画则是一直拍，一直显示而已。</p>
      <p>因为绘制出来的图形是3d的，而我们的显示屏只能显示2d的图片。所以，在成像的时候我们需要设置投影的方式，来获取形成的图像。</p>
      <p><strong><span style="font-size:24px;">正交投影：</span></strong></p>
      <p>形成的图像都是标准的尺寸大小，不会产生偏差。</p>
      <p>一般使用在建模，工业上面。</p>
      <p>使用：</p>
      <p>正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：<br></p>
      <p/>
      <pre ><code class="language-javascript hljs">THREE.OrthographicCamera(left, right, top, bottom, near, far)</code><div class="hljs-button" data-title="复制"/></pre>这六个参数分别代表正交投影照相机拍摄到的空间的六个面的位置，这两个面围成一个长方体，我们称其为视景体（Frustum）。只有在视景体内部（下图中的灰色部分）的物体才可能显示在屏幕上，而视景体外的物体会在显示之前被裁减掉。
      <p/>
      <p><img src="https://img-blog.csdn.net/20170721103211204?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="" width="100%"><br>
        为了保持照相机的横竖比例，需要保证 (right - left) 与 (top - bottom) 的比例与 Canvas宽度与高度的比例一致。<br></p>
      <p>near 与 far 都是指到照相机位置在深度平面的位置，而照相机不应该拍摄到其后方的物体，因此这两个值应该均为正值。为了保证场景中的物体不会因为太近或太远而被照相机忽略，一般 near 的值设置得较小， far 的值设置得较大，具体值视场景中物体的位置等决定。<br></p>
      <p>设置相机的拍摄方向：</p>
      <p/>
      <pre ><code class="language-javascript hljs">camera.position.set(x, y, z);</code><div class="hljs-button" data-title="复制"/></pre>上面是设置相机的位置
      <p/>
      <p/>
      <pre ><code class="language-javascript hljs">camera.lookAt(<span class="hljs-keyword">new</span> THREE.Vector3(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));</code><div class="hljs-button" data-title="复制"/></pre>上面是设置相机观察的方向，上面是默认原点
      <p/>
      <p>不过一定要注意， lookAt 函数接受的是一个 THREE.Vector3 的实例，因此<span style="color:#ff0000;">千万别写成camera.lookAt(0, 0, 0)</span> ，否则非但不能得到理想的效果，而且不会报错，使你很难找到问题所在。<br><br><br></p>
      <p><strong><span style="font-size:24px;">透视投影：</span></strong></p>
      <p>更接近人眼的观看效果，有“近大远小”的效果。</p>
      <p>应用比较广泛，只要不是正交的应用，基本上使用透视投影就好了。</p>
      <p>使用：</p>
      <p>透视投影照相机（Perspective Camera）的构造函数是：<br></p>
      <p/>
      <pre ><code class="language-javascript hljs">THREE.PerspectiveCamera(fov, aspect, near, far)</code><div class="hljs-button" data-title="复制"/></pre>
      <p><img src="https://img-blog.csdn.net/20170721105126707?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p>透视图中，灰色的部分是视景体，是可能被渲染的物体所在的区域。 fov 是视景体竖直方向上的张角（是角度制而非弧度制），如侧视图所示。</p>
      <p>aspect 等于 width / height ，是照相机水平方向和竖直方向长度的比值，通常设为Canvas 的横纵比例。</p>
      <p>near 和 far 分别是照相机到视景体最近、最远的距离，均为正值，且 far 应大于near 。</p>
      <p>fov的值越大，里面的图形会显得越小。这是为什么？我们从下面的的侧视图来看，虽然正方体的实际大小并未改变，但是将照相机的竖直张角设置更大是，视景体变大了，因而正方体相对于整个视景体的大小就变小了，看起来正方形就显得变小了。</p>
      <p><img src="https://img-blog.csdn.net/20170721104850861?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""><br></p>
      <p>fov不会改变画面的横竖比例，aspect能够改变。</p>
      <p><br></p>
      <p>本节参考了three.js入门指南</p>
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
