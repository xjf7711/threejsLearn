<template>
  <div class="index">
    {{ title }}
    <h1>1.1 WebGL与Three.js</h1>
    <div class="article-detail">
      <h2 class="article-tit">
        1.1.1 什么是WebGL
      </h2>
      <div class="typo typo-selection">
        <div id="article111" class="markdown-body" deep="6">
          <p><a href="http://www.khronos.org/webgl/">WebGL</a>是基于OpenGL ES 2.0的Web标准，可以通过HTML5 Canvas元素作为DOM接口访问。</p>

          <p>听起来挺像回事儿的，但是这是什么意思呢？</p>

          <p>如果你了解OpenGL，那么我解释起来就比较轻松了。WebGL可以看做是将OpenGL ES（OpenGL for Embedded Systems，OpenGL嵌入式版本，针对手机、游戏机等设备相对较轻量级的版本）移植到了网页平台，像Chrome、Firefox这些现代浏览器都实现了WebGL标准，使用JavaScript就可以用你熟悉的、类似OpenGL的代码编写了。</p>

          <p>如果你不了解OpenGL，那也没关系，因为正如Three.js不需要你了解OpenGL或WebGL一样，本书也不需要你预先知道这些知识。你可以把WebGL简单地认为是一种网络标准，定义了一些较底层的图形接口，至于究竟多底层，稍后我们和Three.js代码对比来看。本书不会过多涉及WebGL的相关知识，如果读者想学习的话，市场上有不少相关书籍可供参考。</p>

          <p>现在，我们知道了WebGL是一个底层的标准，在这些标准被定义之后，Chrome、Firefox之类的浏览器实现了这些标准。然后，程序员就能通过JavaScript代码，在网页上实现三维图形的渲染了。如果这对你来说还是太抽象，别着急，稍后我们会用具体的例子来说明。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        1.1.2 什么是Three.js
      </h2>
      <div class="typo typo-selection">
        <div id="article112" class="markdown-body" deep="6">
          <blockquote>
            <p><a href="http://threejs.org/">Three.js</a>是一个3D JavaScript库。</p>
          </blockquote>

          <p>如此简介的描述背后，是作者对其强大功能的自信。</p>

          <p>那么，Three.js究竟能用来干什么呢？</p>

          <p>Three.js封装了底层的图形接口，使得程序员能够在无需掌握繁冗的图形学知识的情况下，也能用简单的代码实现三维场景的渲染。我们都知道，更高的封装程度往往意味着灵活性的牺牲，但是Three.js在这方面做得很好。几乎不会有WebGL支持而Three.js实现不了的情况，而且就算真的遇到这种情况，你还是能同时使用WebGL去实现，而不会有冲突。当然，除了WebGL之外，Three.js还提供了基于Canvas、SVG标签的渲染器，但由于通常WebGL能够实现更灵活的渲染效果，所以本书主要针对基于WebGL渲染器进行说明。</p>

          <h2>应用实例</h2>

          <p>使用Three.js可以实现很多酷炫的效果，比如这个minecraft风格的网页游戏工具库<a href="http://voxeljs.com/">voxel.js</a>：</p>

          <p><img src="static/threejs/guide/download/01YiZFTLCObE.small" alt=""></p>

          <p><a href="http://hexgl.bkcore.com/">精美绝伦的游戏效果</a>：</p>

          <p><img src="static/threejs/guide/download/01YiZFdy0y9b.small" alt=""></p>

          <p>或是<a href="http://data-arts.appspot.com/globe">绚丽的数据可视化效果</a>：</p>

          <p><img src="static/threejs/guide/download/01YiZFXEdmp4.small" alt=""></p>

          <p>更多应用可以在<a href="http://threejs.org/">Three.js官网</a>查看。</p>

          <h2>Three.js作者</h2>

          <p><a href="https://github.com/mrdoob">Mr. doob</a>是Three.js项目发起人和主要贡献者之一，但由于Three.js是<a href="http://github.com/mrdoob/three.js/">Github</a>上一个开源项目，因此有非常多的<a href="http://github.com/mrdoob/three.js/">贡献者</a>，甚至有一天，你也可以在贡献者列表中看到自己的名字。</p>

          <h2>使用协议</h2>

          <p>Three.js是基于<a href="https://github.com/mrdoob/three.js/blob/master/LICENSE">MIT协议</a>进行发布的，因此使用和发布都非常自由。</p>

        </div>
      </div>
      <div class="article-detail">
        <h2 class="article-tit">
          1.1.3 WebGL vs. Three.js
        </h2>
        <div class="typo typo-selection">
          <div id="article" class="markdown-body">
            <p>为了比较说明Three.js能大大简化WebGL的开发，我们使用最简单的例子进行比较：渲染黑色背景下的白色正方形和三角形。效果如图：</p>

            <p><img src="static/threejs/guide/download/01YYJJzWyvmZ" alt="效果图"></p>

            <p>Three.js需要30行左右的代码：</p>

            <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter1/1.1.1.html">例1.1.1</a></strong></p>

            <pre><code deep="8">var renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('mainCanvas')
            });
            renderer.setClearColor(0x000000); // black

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
            camera.position.set(0, 0, 5);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            scene.add(camera);

            var material = new THREE.MeshBasicMaterial({
            color: 0xffffff // white
            });
            // plane
            var planeGeo = new THREE.PlaneGeometry(1.5, 1.5);
            var plane = new THREE.Mesh(planeGeo, material);
            plane.position.x = 1;
            scene.add(plane);

            // triangle
            var triGeo = new THREE.Geometry();
            triGeo.vertices = [new THREE.Vector3(0, -0.8, 0),
            new THREE.Vector3(-2, -0.8, 0), new THREE.Vector3(-1, 0.8, 0)];
            triGeo.faces.push(new THREE.Face3(0, 2, 1));
            var triangle = new THREE.Mesh(triGeo, material);
            scene.add(triangle);

            renderer.render(scene, camera);
            </code></pre>

            <p>如果接触过图形学知识，这里的代码应该很容易理解，如果不懂也没关系，接下来几章会进行详细说明。所以在此就不花费篇章解释这几行代码了。</p>

            <p>以下摘录实现相同功能的WebGL代码，来自博客<a href="http://learningwebgl.com/blog/?p=28">http://learningwebgl.com/blog/?p=28</a>。</p>

            <pre><code>var gl;
            function initGL(canvas) {
            try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
            } catch (e) {
            }
            if (!gl) {
            alert("Could not initialise WebGL, sorry :-(");
            }
            }

            function getShader(gl, id) {
            var shaderScript = document.getElementById(id);
            if (!shaderScript) {
            return null;
            }

            var str = "";
            var k = shaderScript.firstChild;
            while (k) {
            if (k.nodeType == 3) {
            str += k.textContent;
            }
            k = k.nextSibling;
            }

            var shader;
            if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
            } else {
            return null;
            }

            gl.shaderSource(shader, str);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
            }

            return shader;
            }

            var shaderProgram;

            function initShaders() {
            var fragmentShader = getShader(gl, "shader-fs");
            var vertexShader = getShader(gl, "shader-vs");

            shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
            }

            gl.useProgram(shaderProgram);

            shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
            gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

            shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
            shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
            }

            var mvMatrix = mat4.create();
            var pMatrix = mat4.create();

            function setMatrixUniforms() {
            gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
            gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
            }

            var triangleVertexPositionBuffer;
            var squareVertexPositionBuffer;

            function initBuffers() {
            triangleVertexPositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
            var vertices = [
            0.0,  1.0,  0.0,
            -1.0, -1.0,  0.0,
            1.0, -1.0,  0.0
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            triangleVertexPositionBuffer.itemSize = 3;
            triangleVertexPositionBuffer.numItems = 3;

            squareVertexPositionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
            vertices = [
            1.0,  1.0,  0.0,
            -1.0,  1.0,  0.0,
            1.0, -1.0,  0.0,
            -1.0, -1.0,  0.0
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            squareVertexPositionBuffer.itemSize = 3;
            squareVertexPositionBuffer.numItems = 4;
            }

            function drawScene() {
            gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

            mat4.identity(mvMatrix);

            mat4.translate(mvMatrix, [-1.5, 0.0, -7.0]);
            gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
            setMatrixUniforms();
            gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);

            mat4.translate(mvMatrix, [3.0, 0.0, 0.0]);
            gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
            setMatrixUniforms();
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);
            }

            function webGLStart() {
            var canvas = document.getElementById("lesson01-canvas");
            initGL(canvas);
            initShaders();
            initBuffers();

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);

            drawScene();
            }
            </code></pre>

            <p>从上面的代码我们不难发现，使用原生WebGL接口实现同样功能需要5倍多的代码量，而且很多代码对于没有图形学基础的程序员是很难看懂的。由这个例子我们可以看出，使用Three.js开发要比WebGL更快更高效。尤其对图形学知识不熟悉的程序员而言，使用Three.js能够降低学习成本，提高三维图形程序开发的效率。</p>

          </div>
        </div>
      </div>
    </div>
    <h1>1.2 开始使用Three.js</h1>
    <p>本节介绍如何下载使用Three.js创建你的第一个程序。</p>
    <div class="article-detail">
      <h2 class="article-tit">
        1.2.1 准备工作
      </h2>
      <div class="typo typo-selection">
        <div id="article21" class="markdown-body">
          <h2>开发环境</h2>

          <p>Three.js是一个JavaScript库，所以，你可以使用平时开发JavaScript应用的环境开发Three.js应用。如果你没什么偏好的话，我会推荐<a href="http://www.activestate.com/komodo-ide">Komodo IDE</a>。</p>

          <p>调试建议使用Chrome或者Firefox浏览器。如果你使用的是Firefox，那么<a href="http://getfirebug.com/">Firebug</a>会是你必不可少的插件；如果你使用的是Chrome，那么直接使用控制台调试即可。这些和JavaScript的调试是相同的，因此本书不作进一步展开。</p>

          <h2>下载</h2>

          <p>首先，我们需要在Github下载Three.js的代码。</p>

          <p>在<a href="https://github.com/mrdoob/three.js/tree/master/build">https://github.com/mrdoob/three.js/tree/master/build</a>可以看到<code>three.js</code>和<code>three.min.js</code>两个文件，前者是没有经过代码压缩的，因此适用于调试阶段；后者是经过代码压缩的，调试起来会不太方便，但文件较小，适用于最终的发布版。保存一个文件到本地，这里我们可以选择three.js。</p>

          <h2>引用</h2>

          <p>在使用Three.js之前，我们需要在HTML文件中引用该文件：</p>

          <pre><code>&lt;script type="text/javascript" src="three.js"&gt;&lt;/script&gt;
          </code></pre>

          <p>然后就能通过全局变量<code>THREE</code>访问到所有属性和方法了。</p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        1.2.2 Hello, world!
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>接下来，我们终于要真正使用Three.js了！</p>

          <p>首先，在HTML的<code>&lt;head&gt;</code>部分，需要声明外部文件<code>three.js</code>。</p>

          <pre><code>&lt;head&gt;
          &lt;script type="text/javascript" src="js/three.js"&gt;&lt;/script&gt;
          &lt;/head&gt;
          </code></pre>

          <p>WebGL的渲染是需要HTML5 Canvas元素的，你可以手动在HTML的<code>&lt;body&gt;</code>部分中定义Canvas元素，或者让Three.js帮你生成。这两种选择一般没有多大差别，我们在此手动在HTML中定义：</p>

          <pre><code>&lt;body onload="init()"&gt;
          &lt;canvas id="mainCanvas" width="400px" height="300px" &gt;&lt;/canvas&gt;
          &lt;/body&gt;
          </code></pre>

          <p>在JavaScript代码中定义一个<code>init</code>函数，在HTML加载完后执行：</p>

          <pre><code>function init() {
          // ...
          }
          </code></pre>

          <p><strong>一个典型的Three.js程序至少要包括渲染器（Renderer）、场景（Scene）、照相机（Camera），以及你在场景中创建的物体。</strong>这些话题将在后面几章中进一步展开，这里我们将介绍如何快速地使用这些东西。</p>

          <h2>渲染器（Renderer）</h2>

          <p>渲染器将和Canvas元素进行绑定，如果之前在HTML中手动定义了<code>id</code>为<code>mainCanvas</code>的Canvas元素，那么Renderer可以这样写：</p>

          <pre><code>var renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('mainCanvas')
          });
          </code></pre>

          <p>而如果想要Three.js生成Canvas元素，在HTML中就不需要定义Canvas元素，在JavaScript代码中可以这样写：</p>

          <pre><code>var renderer = new THREE.WebGLRenderer();
          renderer.setSize(400, 300);
          document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
          </code></pre>

          <p>上面代码的第二行表示设置Canvas的宽<code>400</code>像素，高<code>300</code>像素。第三行将渲染器对应的Canvas元素添加到<code>&lt;body&gt;</code>中。</p>

          <p>我们可以使用下面的代码将背景色（用于清除画面的颜色）设置为黑色：</p>

          <pre><code>renderer.setClearColor(0x000000);
          </code></pre>

          <h2>场景（Scene）</h2>

          <p>在Three.js中添加的物体都是添加到场景中的，因此它相当于一个大容器。一般说，场景里没有很复杂的操作，在程序最开始的时候进行实例化，然后将物体添加到场景中即可。</p>

          <pre><code>var scene = new THREE.Scene();
          </code></pre>

          <h2>照相机（Camera）</h2>

          <p>在介绍照相机设置前，我们先来简单了解下坐标系。WebGL和Three.js使用的坐标系是右手坐标系，看起来就是这样的：</p>

          <p><img src="static/threejs/guide/download/01YmPz57VN7b" alt=""></p>

          <p>这里，我们定义了一个透视投影的照相机，具体原理将在下一章中展开。</p>

          <pre><code>var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
          camera.position.set(0, 0, 5);
          scene.add(camera);
          </code></pre>

          <p>值得注意的是，照相机也需要被添加到场景中。</p>

          <h2>长方体</h2>

          <p>我们要创建一个x、y、z方向长度分别为<code>1</code>、<code>2</code>、<code>3</code>的长方体，并将其设置为红色。</p>

          <pre><code>var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
          new THREE.MeshBasicMaterial({
          color: 0xff0000
          })
          );
          scene.add(cube);
          </code></pre>

          <p>这段代码也是比较容易理解的，虽然你现在可能还不知道MeshBasicMaterial是什么，但是大致可以猜测出这是一种材质，可以用来设置物体的颜色。还是要提醒下，一定要记得把创建好的长方体添加到场景中。</p>

          <p>那么这里长度为<code>1</code>的单位是什么呢？这里的长度是在物体坐标系中的，其单位与屏幕分辨率等无关，简单地说，它就是一个虚拟空间的坐标系，<code>1</code>代表多少并没有实际的意义，而重要的是相对长度。</p>

          <h2>渲染</h2>

          <p>在定义了场景中的物体，设置好的照相机之后，渲染器就知道如何渲染出二维的结果了。这时候，我们只需要调用渲染器的渲染函数，就能使其渲染一次了。</p>

          <pre><code>renderer.render(scene, camera);
          </code></pre>

          <h2>完整代码</h2>

          <p>最终，这是我们得到的完整的<code>init</code>函数：</p>

          <p><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter1/1.2.1.html"><strong>例1.2.1</strong></a> <code>&lt;= 点此查看完整源代码，下略</code></p>

          <pre><code>function init() {
          // renderer
          var renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('mainCanvas')
          });
          renderer.setClearColor(0x000000); // black

          // scene
          var scene = new THREE.Scene();

          // camera
          var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
          camera.position.set(0, 0, 5);
          scene.add(camera);

          // a cube in the scene
          var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
          new THREE.MeshBasicMaterial({
          color: 0xff0000
          })
          );
          scene.add(cube);

          // render
          renderer.render(scene, camera);
          }
          </code></pre>

          <p>渲染的效果是：
          <img src="static/threejs/guide/download/01YYOqGW8QIV.small" alt="黑色背景下的红色长方体"></p>

          <h2>出问题了？</h2>

          <p>第一件事就是打开浏览器的控制台，查看报错信息。如果错误信息是<code>ReferenceError: THREE is not defined</code>，那么就是页面没有成功加载Three.js库，很有可能的原因是文件的路径写错了，一定要小心检查。</p>

          <p>如果存在其他问题，请参见前言中“寻求帮助”部分。</p>

        </div>
      </div>
    </div>
    <h1>1.3 Three.js功能概览</h1>
    <div class="article-detail">
      <div class="typo typo-selection">
        <div id="article13" class="markdown-body">
          <p>上一节，我们了解了如何建立一个简单的Three.js应用，可能有读者会对各种概念表示困惑，那么下面就让我们看下Three.js官网文档中的一些重要的对象，在你需要寻求帮助时，就能够知道关键词是什么。</p>

          <pre><code deep="8">Cameras（照相机，控制投影方式）

          Camera
          OrthographicCamera
          PerspectiveCamera

          Core（核心对象）

          BufferGeometry
          Clock（用来记录时间）
          EventDispatcher
          Face3
          Face4
          Geometry
          Object3D
          Projector
          Raycaster（计算鼠标拾取物体时很有用的对象）

          Lights（光照）
          Light
          AmbientLight
          AreaLight
          DirectionalLight
          HemisphereLight
          PointLight
          SpotLight

          Loaders（加载器，用来加载特定文件）
          Loader
          BinaryLoader
          GeometryLoader
          ImageLoader
          JSONLoader
          LoadingMonitor
          SceneLoader
          TextureLoader

          Materials（材质，控制物体的颜色、纹理等）
          Material
          LineBasicMaterial
          LineDashedMaterial
          MeshBasicMaterial
          MeshDepthMaterial
          MeshFaceMaterial
          MeshLambertMaterial
          MeshNormalMaterial
          MeshPhongMaterial
          ParticleBasicMaterial
          ParticleCanvasMaterial
          ParticleDOMMaterial
          ShaderMaterial
          SpriteMaterial

          Math（和数学相关的对象）

          Box2
          Box3
          Color
          Frustum
          Math
          Matrix3
          Matrix4
          Plane
          Quaternion
          Ray
          Sphere
          Spline
          Triangle
          Vector2
          Vector3
          Vector4

          Objects（物体）

          Bone
          Line
          LOD
          Mesh（网格，最常用的物体）
          MorphAnimMesh
          Particle
          ParticleSystem
          Ribbon
          SkinnedMesh
          Sprite

          Renderers（渲染器，可以渲染到不同对象上）

          CanvasRenderer
          WebGLRenderer（使用WebGL渲染，这是本书中最常用的方式）
          WebGLRenderTarget
          WebGLRenderTargetCube
          WebGLShaders（着色器，在最后一章作介绍）

          Renderers / Renderables

          RenderableFace3
          RenderableFace4
          RenderableLine
          RenderableObject
          RenderableParticle
          RenderableVertex

          Scenes（场景）

          Fog
          FogExp2
          Scene

          Textures（纹理）

          CompressedTexture
          DataTexture
          Texture

          Extras

          FontUtils
          GeometryUtils
          ImageUtils
          SceneUtils

          Extras / Animation

          Animation
          AnimationHandler
          AnimationMorphTarget
          KeyFrameAnimation

          Extras / Cameras

          CombinedCamera
          CubeCamera

          Extras / Core

          Curve
          CurvePath
          Gyroscope
          Path
          Shape

          Extras / Geometries（几何形状）

          CircleGeometry
          ConvexGeometry
          CubeGeometry
          CylinderGeometry
          ExtrudeGeometry
          IcosahedronGeometry
          LatheGeometry
          OctahedronGeometry
          ParametricGeometry
          PlaneGeometry
          PolyhedronGeometry
          ShapeGeometry
          SphereGeometry
          TetrahedronGeometry
          TextGeometry
          TorusGeometry
          TorusKnotGeometry
          TubeGeometry

          Extras / Helpers

          ArrowHelper
          AxisHelper
          CameraHelper
          DirectionalLightHelper
          HemisphereLightHelper
          PointLightHelper
          SpotLightHelper

          Extras / Objects

          ImmediateRenderObject
          LensFlare
          MorphBlendMesh

          Extras / Renderers / Plugins

          DepthPassPlugin
          LensFlarePlugin
          ShadowMapPlugin
          SpritePlugin

          Extras / Shaders

          ShaderFlares
          ShaderSprite
          </code></pre>

          <p>我们看到，Three.js功能是十分丰富的，一时间想全部掌握有些困难。本书将从Three.js程序常用的功能着手，带领大家入门Three.js。</p>

          <p>在接下来的章节中，我们将会先详细介绍照相机、几何形状、材质、物体等入门级知识；然后介绍使用动画、模型导入、加入光照等功能；最后，对于学有余力的读者，我们将介绍着色器，用于更高级的图形渲染。</p>

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
      title:
        '本章将介绍WebGL与Three.js的背景知识，如何下载、使用Three.js。阅读完本章后，你将学会使用Three.js实现一个最简单的功能。'
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
