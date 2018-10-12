<template>
  <div class="index">
    <p>本章将介绍关于渲染的一些高级话题，使用着色器可以更灵活地控制渲染效果，结合纹理，可以进行多次渲染，达到更强大的效果。 </p>
    <div class="article-detail">
      <h2 class="article-tit">
        9.1 渲染与着色器
      </h2>
      <div class="typo typo-selection">
        <div id="article" class="markdown-body" deep="6">
          <p>“渲染”（Rendering）是即使非计算机专业的都不会觉得陌生的词，虽然在很多人说这个词的时候，并不清楚“渲染”究竟意味着什么。相反，“着色器”（Shader）很可能是大家比较陌生的词，从名字看上去似乎是用来上色的，但它具体能做什么呢？</p>

          <p>在解释着色器之前，我们先来聊聊渲染。</p>

          <h1>渲染</h1>

          <hr>

          <p>用通俗的话来说，渲染就是将模型数据在屏幕上显示出来的过程。</p>

          <p>这听起来好像很简单呢！但正如你打开一个Word写文档一样，之所以这个过程看起来毫不费力是因为那些繁杂而枯燥的活都让计算机完成了。同样，要渲染出一幅画面GPU也需要做很多工作，如果你有兴趣了解的话，可以查阅渲染流水线（Rendering Pineline）的相关知识。</p>

          <p>Three.js最重要的一个好处就是让你在无需知道图形学知识的前提下完成从建模到渲染的一整套工作。因而，在本书中我们不会对图形学知识做展开，否则就是违背了这一本意了。在这里，我们只要理解渲染做的将你的模型数据呈现在屏幕上的过程即可。</p>

          <h1>着色器</h1>

          <hr>

          <p>在定义了场景中的物体、照相机、光源等等之后，渲染的结果就确定了吗？</p>

          <p>在可编程GPU时代到来前，答案是肯定的，但现在我们已经可以通过着色器程序对GPU编程来控制渲染的结果。着色器是屏幕上呈现画面之前的最后一步，用它可以对先前渲染的结果做修改，包括对颜色、位置等等信息的修改，甚至可以对先前渲染的结果做后处理，实现高级的渲染效果。</p>

          <p>如果这听上去很抽象，那让我们来看一些具体的例子吧！</p>

          <p>比如，我们要渲染一个宇航员，使用同样的模型、同样的光源、同样的照相机，但是不同的着色器，我们就能得到不同的渲染效果：</p>

          <p><img src="static/threejs/guide/download/01YiIFktu04p" alt=""></p>

          <p><a href="http://en.wikipedia.org/wiki/Cel_shading">图片来源</a></p>

          <p>左图的是塑料效果，右图的是卡通效果，这都是由不同的着色器实现的。</p>

          <p>我们知道WebGL是基于OpenGL的，而OpenGL用GLSL（OpenGL Shading Language）这一着色器语言完成着色器工作，因此，WebGL的着色器程序大致与GLSL相同，是一种接近C语言的代码。着色器通常分为几何着色器（Geometry Shader）、顶点着色器（Vertex Shader）、片元着色器（Fragment Shader）等等。由于WebGL基于OpenGL ES 2.0，因此WebGL支持的着色器只有顶点着色器与片元着色器。</p>

          <h2>顶点着色器</h2>

          <p>顶点着色器中的“顶点”指的正是Mesh中的顶点，对于每个顶点调用一次。因此，如果场景中有一个正方体，那么对八个顶点将各自调用一次顶点着色器，可以修改顶点的位置或者颜色等信息，然后传入片元着色器。</p>

          <h2>片元着色器</h2>

          <p>片元是栅格化之后，在形成像素之前的数据。片元着色器是每个片元会调用一次的程序，因此，片元着色器特别适合用来做图像后处理。</p>

          <h1>Three.js与着色器</h1>

          <hr>

          <p>由此，我们看到，着色器可以用来渲染高级的效果。但是对于很多应用而言，并不需要着色器。</p>

          <p>WebGL强制需要程序员定义着色器，即使你只是希望采用默认的渲染方法。这似乎有些不近人情，尤其对于对图形学理解不多的开发者而言。</p>

          <p>幸运的是，Three.js允许你不定义着色器（就像前面所有章节的例子）采用默认的方法渲染，而仅在你有需要时，才使用自定义的着色器，这大大减少了程序员的工作量，而且对于初学者而言，无疑是减少入门难度的福音。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        9.2 初窥着色器
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>在这节中，我们将通过具体的着色器代码，初步理解着色器编程。至于具体如何将着色器应用于程序，将在下一节做介绍。</p>

          <p>我们回顾一下上节内容，着色器是一段在GPU中执行的接近C语言的代码，顶点着色器对于每个顶点调用一次，片元着色器对于每个片元调用一次。</p>

          <p>着色器语言的调试有时候十分困难，很可能报的错让你不明所以。建议使用Chrome和Firefox调试，此外，<a href="https://chrome.google.com/webstore/detail/webgl-inspector/ogkcjmbhnfmlnielkjhedpcjomeaghda">Chrome的一个插件</a>也可能给你提供一定帮助。另外，从我写着色器的经验来看，最常发生错误的原因就是忘记<code>float</code>类型和<code>int</code>类型不会自动转换的，因此，当你想表达浮点数零的时候，一定要写成<code>0.0</code>而非<code>0</code>。当然，即使我在这里提醒大家了，你仍然会惊讶这一错误发生的频率之高！</p>

          <h1>顶点着色器</h1>

          <hr>

          <p>着色器是类似C语言的代码，即便如此，下面代码仍然可能让你感到困惑：</p>

          <pre>
              <code>
                varying vec2 vUv;
                void main()
                {
                    // passing texture to fragment shader
                    vUv = uv;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            </code>
          </pre>

          <p>我们可以猜测到，和C语言一样，着色器程序也从<code>main</code>函数开始调用。但除此之外……就有点看不懂了吧？</p>

          <p>让我们一起来认识一下<code>varing</code>。它是WebGL定义的<strong>限定符</strong>（Qualifier），限定符用于数据类型（Type）之前，表明该变量的性质。</p>

          <p>限定符共有四个：</p>

          <ul>
            <li><code>const</code>：这是我们熟悉的常量的意思</li>
            <li><code>attribute</code>：从JavaScript代码传递到顶点着色器中，每个顶点对应不同的值</li>
            <li><code>uniform</code>：每个顶点/片元对应相同的值</li>
            <li><code>varying</code>：从顶点着色器传递到片元着色器中</li>
          </ul>

          <p>如果不写限定符，那么默认是只有在当前文件中能访问。</p>

          <p>所以，<code>varying vec2 vUv;</code>的意思是，声明了一个叫<code>vUv</code>的变量，它的类型为<code>vec2</code>，该变量是为了将顶点着色器中的信息传递到片元着色器中。那么它传递了什么信息呢？我们看到与之相关的只有<code>vUv = uv;</code>，可是<code>uv</code>都没声明过啊！这是哪里来的？</p>

          <p>其实，<code>uv</code>是Three.js帮你传进来的一个很有用的属性，它代表了该顶点在<strong><a href="http://en.wikipedia.org/wiki/UV_mapping">UV映射</a></strong>时的横纵坐标。简单地说，一个物体的模型可能很复杂，对其贴图的一个简单有效的方法就是UV映射，将每个面片贴的图统一映射到一张纹理上，记录每个面片贴图在纹理上对应的位置。得到这样的效果：</p>

          <p><img src="static/threejs/guide/download/01YiLAzI36cT.small" alt=""></p>

          <p><a href="http://goanna.cs.rmit.edu.au/~gl/teaching/Interactive3D/2012/lecture9.html">图片来源</a></p>

          <p>而之所以称为<code>u</code>和<code>v</code>，指的就是在纹理映射后的新坐标系。我们也发现，<code>uv</code>变量的类型是<code>vec2</code>，顾名思义就是一个二维的向量，可以使用<code>uv.x</code>和<code>uv.y</code>分别访问到<code>uv</code>两个维度的值。</p>

          <p>使用<code>varying vec2 vUv;</code>将<code>uv</code>信息传递到片元着色器是因为片元着色器本身不能访问到<code>uv</code>信息，如果需要得到这一值的话，就需要从顶点着色器中传递过去，我们将其命名为<code>vUv</code>。</p>

          <p>那么，<code>gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);</code>又是在干什么呢？学过图形学的读者一定对投影矩阵、模型矩阵并不陌生，这里做的事情就是计算三维模型在二维显示屏上的坐标。这里，我们看到<code>position</code>也没有预先定义过，不过通过上面的<code>uv</code>应该也能猜测到<code>position</code>也是Three.js为我们提供的一个方便。<code>position</code>是顶点在物体坐标系（而不是世界坐标系）中的位置。这就意味着，一个正方体位于世界坐标系的<code>(2, 0, 0)</code>与位于<code>(0, 0, 0)</code>将不会改变任何顶点的<code>position</code>，这个<code>position</code>是相对于正方体的锚点而言的。</p>

          <p>因此，这段顶点着色器的作用就是将<code>uv</code>信息传递到片元着色器中，并按默认的方式计算顶点位置。</p>

          <h1>片元着色器</h1>

          <hr>

          <p>有了前面顶点着色器传过来的<code>vUv</code>信息，我们能做些有意思的事了吧？比如来看看使用颜色表示<code>uv</code>信息如何？</p>

          <pre><code>varying vec2 vUv;
          void main() {
          gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
          }
          </code></pre>

          <p>太好了，它看起来很简单！</p>

          <p>你能告诉我上面代码是什么意思吗？</p>

          <p>来看看你回答得对不对。<code>varying vec2 vUv;</code>同样声明了从顶点着色器传递到片元着色器中的<code>vUv</code>属性，记得要在片元着色器中再写一遍。主程序只有<code>gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);</code>，<code>gl_FragColor</code>用来设置片元的颜色，<code>vec4</code>的四个维度分别表示红、绿、蓝以及alpha通道。因此，这里我们是将<code>vUv</code>的两个维度分别对应到红绿通道，得到的效果是：</p>

          <p><img src="static/threejs/guide/download/01YiLDfcdWmi" alt=""></p>

          <p>现在，你是不是对UV映射有更深的理解了呢？对于正方体而言，每个面都映射到了整个UV纹理，所以呈现了如上结果。而对于正四面体而言，每个面都映射到了UV纹理的一部分，因此呈现的效果是这样的：</p>

          <p><img src="static/threejs/guide/download/01YiLDl2Y0bJ" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        9.3 着色器完整实例
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body" deep="6">
          <h1>着色器程序的位置</h1>

          <hr>

          <p>着色器代码可以写在单独的文件中（顶点着色器的文件名后缀为<code>.vs</code>，片元着色器的文件名后缀为<code>.fs</code>），也可以在HTML文件中定义<code>script</code>标签实现。通常对于较长的着色器代码，建议使用单独的文件；对于较短的着色器代码，在HTML文件中定义也是一个不错的选择。当然，从代码可维护性的角度看，本书更建议使用单独的着色器文件。</p>

          <h2>单独的着色器文件</h2>

          <p>使用单独的着色器文件，需要在javascript代码中导入着色器文件。我们假设顶点着色器定义在<code>shader/my.vs</code>文件中，片元着色器定义在<code>shader/my.fs</code>中。</p>

          <p>可以使用Ajax完成导入文件的工作，而如果使用<strong>jQuery</strong>的<code>get</code>函数就可以更方便地实现。</p>

          <pre><code>// load shader
          $.get('shader/my.vs', function(vShader){
          $.get('shader/my.fs', function(fShader){
          // TODO
          });
          });
          </code></pre>

          <p>jQuery的<code>get</code>函数第一个参数为文件路径，第二个参数为导入文件后的回调函数，这里我们在加载完顶点着色器后加载片元着色器。<code>vShader</code>与<code>fShader</code>分别为导入的着色器程序，用来构造着色器材质。</p>

          <p>接下来，我们需要在加载完两个着色器后，新建一个<code>THREE.ShaderMaterial</code>，需要传入属性<code>vertexShader</code>与<code>fragmentShader</code>：</p>

          <pre><code>$.get('shader/my.vs', function(vShader){
          $.get('shader/my.fs', function(fShader){
          material = new THREE.ShaderMaterial({
          vertexShader: vShader,
          fragementShader: fShader
          });
          });
          });
          </code></pre>

          <p>之后可以将<code>material</code>应用于需要该着色器效果的物体上。    </p>

          <h2>HTML中的着色器代码</h2>

          <p>在HTML中，可以使用</p>

          <pre><code>&lt;script id="vs" type="x-shader/x-vertex"&gt;
          这里的内容相当于.vs文件中的内容
          &lt;/script&gt;
          </code></pre>

          <p>定义顶点着色器；使用</p>

          <pre><code>&lt;script id="fs" type="x-shader/x-fragment"&gt;
          这里的内容相当于.fs文件中的内容
          &lt;/script&gt;
          </code></pre>

          <p>定义片元着色器。</p>

          <p>定义材质时的方法：</p>

          <pre><code>material = new THREE.ShaderMaterial({
          vertexShader: document.getElementById('vs').textContent,
          fragmentShader: document.getElementById('fs').textContent
          });
          </code></pre>

          <h1>完整实例</h1>

          <hr>

          <p>下面，我们通过完整的例子了解着色器的应用。</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter9/9.3.1.html"><strong>例9.3.1</strong></a>，<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter9/9.3.2.html"><strong>例9.3.2</strong></a></p>

          <p>首先，我们创建一个绿色的正方体在场景中旋转，这些都是在前几章中讲解过的：</p>

          <pre><code>var scene = null;
          var camera = null;
          var renderer = null;
          var cube = null;

          function init() {
          renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('mainCanvas')
          });
          scene = new THREE.Scene();

          camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
          camera.position.set(5, 15, 25);
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          scene.add(camera);

          var light = new THREE.DirectionalLight();
          light.position.set(3, 2, 5);
          scene.add(light);

          cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
          new THREE.MeshLambertMaterial({color: 0x00ff00}));
          scene.add(cube);

          draw();
          }

          function draw() {
          cube.rotation.y += 0.01;
          if (cube.rotation.y &gt; Math.PI * 2) {
          cube.rotation.y -= Math.PI * 2;
          }

          renderer.render(scene, camera);

          requestAnimationFrame(draw);
          }
          </code></pre>

          <p>然后，我们需要定义着色器代码，并导入到应用中。着色器程序参见上节，导入着色器的两种方法在本节也做了介绍。因此，最终得到的结果是：</p>

          <p><img src="static/threejs/guide/download/01YiLDsZE2UE" alt=""></p>

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
