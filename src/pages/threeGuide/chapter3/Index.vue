<template>
  <div class="index">
    <p>在创建物体时，需要传入两个参数，一个是几何形状（Geometry），另一个是材质（Material）。本章将介绍几何形状的创建，第4章介绍材质，第5章介绍如何使用这两者创建网格。 几何形状（Geometry）最主要的功能是储存了一个物体的顶点信息。WebGL需要程序员指定每个顶点的位置，而在Three.js中，可以通过指定一些特征来创建几何形状，例如使用半径创建一个球体，从而省去程序员一个个指定顶点的工作量。 本节将分别介绍立方体、平面、球体、圆柱体、四面体、八面体等几何形状，以及以三维文字作为几何形状的方法。本节还会介绍通过手动定义顶点位置和面片信息组成几何形状。</p>
    <div class="article-detail">
      <h2 class="article-tit">
        3.1 基本几何形状
      </h2>
      <div class="typo typo-selection">
        <div id="article" class="markdown-body" deep="6">
          <h1>立方体</h1>

          <hr>

          <p>虽然这一形状的名字叫立方体（CubeGeometry），但它其实是长方体，也就是长宽高可以设置为不同的值。其构造函数是：</p>

          <pre><code>THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
          </code></pre>

          <p>这里，<code>width</code>是x方向上的长度；<code>height</code>是y方向上的长度；<code>depth</code>是z方向上的长度；后三个参数分别是在三个方向上的分段数，如<code>widthSegments</code>为<code>3</code>的话，代表x方向上水平分为三份。一般情况下不需要分段的话，可以不设置后三个参数，后三个参数的缺省值为<code>1</code>。其他几何形状中的分段也是类似的，下面不做说明。</p>

          <h2>长宽高</h2>

          <p>创建立方体直观简单，如：<code>new THREE.CubeGeometry(1, 2, 3);</code>可以创建一个x方向长度为<code>1</code>，y方向长度为<code>2</code>，z方向长度为<code>3</code>的立方体。</p>

          <p>为了更好地表现参数效果，我们在场景中用长度为<code>1</code>的红、绿、蓝线段分别表示x、y、z三个轴。在设置材质，并添加到场景之后（具体方法参见第4章及第5章）的效果是：</p>

          <p><img src="static/threejs/guide/download/01ujJxmNFpZV.small" alt=""></p>

          <p>物体的默认位置是原点，对于立方体而言，是其几何中心在原点的位置。</p>

          <h2>分段</h2>

          <p>而在设置了分段<code>new THREE.CubeGeometry(1, 2, 3, 2, 2, 3)</code>后，效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJxl54sHN.small" alt=""></p>

          <p>注意这个分段是对六个面进行分段，而不是对立方体的体素分段，因此在立方体的中间是不分段的，只有六个侧面被分段。</p>

          <h1>平面</h1>

          <hr>

          <p>这里的平面（PlaneGeometry）其实是一个长方形，而不是数学意义上无限大小的平面。其构造函数为：</p>

          <pre><code>THREE.PlaneGeometry(width, height, widthSegments, heightSegments)
          </code></pre>

          <p>其中，<code>width</code>是x方向上的长度；<code>height</code>是y方向上的长度；后两个参数同样表示分段。</p>

          <p><code>new THREE.PlaneGeometry(2, 4);</code>创建的平面在x轴和y轴所在平面内，效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJxnRr484.small" alt=""></p>

          <p>如果需要创建的平面在x轴和z轴所在的平面内，可以通过物体的旋转来实现，具体的做法将在5.2节作介绍。</p>

          <h1>球体</h1>

          <hr>

          <p>球体（SphereGeometry）的构造函数是：</p>

          <pre><code>THREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength)
          </code></pre>

          <p>其中，<code>radius</code>是半径；<code>segmentsWidth</code>表示经度上的切片数；<code>segmentsHeight</code>表示纬度上的切片数；<code>phiStart</code>表示经度开始的弧度；<code>phiLength</code>表示经度跨过的弧度；<code>thetaStart</code>表示纬度开始的弧度；<code>thetaLength</code>表示纬度跨过的弧度。</p>

          <h2>分段</h2>

          <p>首先，我们来理解下<code>segmentsWidth</code>和<code>segmentsHeight</code>。使用<code>var sphere = new THREE.SphereGeometry(3, 8, 6)</code>可以创建一个半径为3，经度划分成8份，纬度划分成6份的球体，如下图所示。</p>

          <p><img src="static/threejs/guide/download/01ujJxw3SDwR.small" alt=""></p>

          <p><code>segmentsWidth</code>相当于经度被切成了几瓣，而<code>segmentsHeight</code>相当于纬度被切成了几层。因为在图形底层的实现中，并没有曲线的概念，曲线都是由多个折线近似构成的。对于球体而言，当这两个值较大的时候，形成的多面体就可以近似看做是球体了。</p>

          <p><code>new THREE.SphereGeometry(3, 8, 6)</code>的效果：</p>

          <p><img src="static/threejs/guide/download/01ujJxpcyTas.small" alt=""></p>

          <p><code>new THREE.SphereGeometry(3, 18, 12)</code>的效果：</p>

          <p><img src="static/threejs/guide/download/01ujJxqZvOrc.small" alt=""></p>

          <h2>经度弧度</h2>

          <p><code>new THREE.SphereGeometry(3, 8, 6, Math.PI / 6, Math.PI / 3)</code>表示起始经度为<code>Math.PI / 6</code>，经度跨度为<code>Math.PI / 3</code>。效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJxoXO5go.small" alt=""></p>

          <p>需要注意的是，这里<code>segmentsWidth</code>为<code>8</code>意味着对于经度从<code>Math.PI / 6</code>跨过<code>Math.PI / 3</code>的区域内划分为<code>8</code>块，而不是整个球体的经度划分成<code>8</code>块后再判断在此经度范围内的部分。</p>

          <h2>纬度弧度</h2>

          <p>理解了经度之后，纬度可以同理理解。<code>new THREE.SphereGeometry(3, 8, 6, 0, Math.PI * 2, Math.PI / 6, Math.PI / 3)</code>意味着纬度从<code>Math.PI / 6</code>跨过<code>Math.PI / 3</code>。效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJy0GQjNY.small" alt=""></p>

          <p>我们再来看一个经度纬度都改变了起始位置和跨度的例子：<code>new THREE.SphereGeometry(3, 8, 6, Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2)</code>的效果为：</p>

          <p><img src="static/threejs/guide/download/01ujJy1VUqQt.small" alt=""></p>

          <h1>圆形</h1>

          <hr>

          <p>圆形（CircleGeometry）可以创建圆形或者扇形，其构造函数是：</p>

          <pre><code>THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
          </code></pre>

          <p>这四个参数都是球体中介绍过的，这里不再赘述，直接来看个例子。<code>new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4)</code>可以创建一个在x轴和y轴所在平面的三分之二圆的扇形：</p>

          <p><img src="static/threejs/guide/download/01ujJy3x8nSR.small" alt=""></p>

          <h1>圆柱体</h1>

          <hr>

          <p>圆柱体（CylinderGeometry）的构造函数是：</p>

          <pre><code>THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
          </code></pre>

          <p>其中，<code>radiusTop</code>与<code>radiusBottom</code>分别是顶面和底面的半径，由此可知，当这两个参数设置为不同的值时，实际上创建的是一个圆台；<code>height</code>是圆柱体的高度；<code>radiusSegments</code>与<code>heightSegments</code>可类比球体中的分段；<code>openEnded</code>是一个布尔值，表示是否没有顶面和底面，缺省值为<code>false</code>，表示有顶面和底面。</p>

          <h2>标准圆柱体</h2>

          <p><code>new THREE.CylinderGeometry(2, 2, 4, 18, 3)</code>创建一个顶面与底面半径都为<code>2</code>，高度为<code>4</code>的圆柱体，效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJy4tpTIp.small" alt=""></p>

          <h2>圆台</h2>

          <p>将底面半径设为<code>3</code>创建一个圆台：<code>new THREE.CylinderGeometry(2, 3, 4, 18, 3)</code>，效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJy5w6WZp.small" alt=""></p>

          <h2>无顶面底面</h2>

          <p><code>new THREE.CylinderGeometry(2, 3, 4, 18, 3, true)</code>将创建一个没有顶面与底面的圆台，效果如下：</p>

          <p><img src="static/threejs/guide/download/01ujJy6gjmZc.small" alt=""></p>

          <h1>正四面体、正八面体、正二十面体</h1>

          <hr>

          <p>正四面体（TetrahedronGeometry）、正八面体（OctahedronGeometry）、正二十面体（IcosahedronGeometry）的构造函数较为类似，分别为：</p>

          <pre><code>THREE.TetrahedronGeometry(radius, detail)
          THREE.OctahedronGeometry(radius, detail)
          THREE.IcosahedronGeometry(radius, detail)
          </code></pre>

          <p>其中，<code>radius</code>是半径；<code>detail</code>是细节层次（Level of Detail）的层数，对于大面片数模型，可以控制在视角靠近物体时，显示面片数多的精细模型，而在离物体较远时，显示面片数较少的粗略模型。这里我们不对<code>detail</code>多作展开，一般可以对这个值缺省。</p>

          <p><code>new THREE.TetrahedronGeometry(3)</code>创建一个半径为<code>3</code>的正四面体：</p>

          <p><img src="static/threejs/guide/download/01ujJy7r7ajz.small" alt=""></p>

          <p><code>new THREE.OctahedronGeometry(3)</code>创建一个半径为<code>3</code>的正八面体：</p>

          <p><img src="static/threejs/guide/download/01ujJy8F9ztl.small" alt=""></p>

          <p><code>new THREE.IcosahedronGeometry(3)</code>创建一个半径为<code>3</code>的正二十面体：</p>

          <p><img src="static/threejs/guide/download/01ujJy91laNA.small" alt=""></p>

          <h1>圆环面</h1>

          <hr>

          <p>圆环面（TorusGeometry）就是甜甜圈的形状，其构造函数是：</p>

          <pre><code>THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
          </code></pre>

          <p><img src="static/threejs/guide/download/01YZGqQBQI0k" alt=""></p>

          <p>其中，<code>radius</code>是圆环半径；<code>tube</code>是管道半径；<code>radialSegments</code>与<code>tubularSegments</code>分别是两个分段数，详见上图；<code>arc</code>是圆环面的弧度，缺省值为<code>Math.PI * 2</code>。</p>

          <p><code>new THREE.TorusGeometry(3, 1, 4, 8)</code>创建一个粗糙的圆环面：</p>

          <p><img src="static/threejs/guide/download/01ujJyALg1Pv.small" alt=""></p>

          <p><code>new THREE.TorusGeometry(3, 1, 12, 18)</code>创建一个较为精细的圆环面：</p>

          <p><img src="static/threejs/guide/download/01ujJyBJ9SM0.small" alt=""></p>

          <p><code>new THREE.TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2)</code>创建部分圆环面：</p>

          <p><img src="static/threejs/guide/download/01ujJyCAmri0.small" alt=""></p>

          <h1>圆环结</h1>

          <hr>

          <p>如果说圆环面是甜甜圈，那么圆环结（TorusKnotGeometry）就是打了结的甜甜圈，其构造参数为：</p>

          <pre><code>THREE.TorusKnotGeometry(radius, tube, radialSegments, tubularSegments, p, q, heightScale)
          </code></pre>

          <p>前四个参数在圆环面中已经有所介绍，<code>p</code>和<code>q</code>是控制其样式的参数，一般可以缺省，如果需要详细了解，请学习<a href="http://en.wikipedia.org/wiki/Torus_knot">圆环结的相关知识</a>；<code>heightScale</code>是在z轴方向上的缩放。</p>

          <p><code>new THREE.TorusKnotGeometry(2, 0.5, 32, 8)</code>的效果：</p>

          <p><img src="static/threejs/guide/download/01ujJyCfiBT9.small" alt=""></p>

          <p>本小节完整代码请参见<a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter3/3.1.1.html"><strong>例3.1.1</strong></a></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        3.2 文字形状
      </h2>
      <div class="typo typo-selection">
        <div id="article2" class="markdown-body" deep="6">
          <p>文字形状（TextGeometry）可以用来创建三维的文字形状。</p>

          <h1>下载使用</h1>

          <hr>

          <p>使用文字形状需要下载和引用额外的字体库，具体参见<a href="https://github.com/mrdoob/three.js/tree/master/examples/fonts">Three.js GitHub说明</a>。</p>

          <p>这里，我们以
          <code>helvetiker</code>字体为例。我们在<a href="https://github.com/mrdoob/three.js/tree/master/examples/fonts">Three.js GitHub master/examples/fonts</a>目录下，下载<code>helvetiker_regular.typeface.json</code>文件放在你的目录下，然后用以下方法加载：</p>

          <pre><code>var loader = new THREE.FontLoader();
          loader.load('../lib/helvetiker_regular.typeface.json', function(font) {
          var mesh = new THREE.Mesh(new THREE.TextGeometry('Hello', {
          font: font,
          size: 1,
          height: 1
          }), material);
          scene.add(mesh);

          // render
          renderer.render(scene, camera);
          });
          </code></pre>

          <h1>参数介绍</h1>

          <hr>

          <p>创建文字形状的流程和之前介绍的基本几何形状是类似的，其构造函数是：</p>

          <pre><code>THREE.TextGeometry(text, parameters)
          </code></pre>

          <p>其中，<code>text</code>是文字字符串，<code>parameters</code>是以下参数组成的对象：</p>

          <ul>
            <li><code>size</code>：字号大小，一般为大写字母的高度</li>
            <li><code>height</code>：文字的厚度</li>
            <li><code>curveSegments</code>：弧线分段数，使得文字的曲线更加光滑</li>
            <li><code>font</code>：字体，默认是<code>'helvetiker'</code>，需对应引用的字体文件</li>
            <li><code>weight</code>：值为<code>'normal'</code>或<code>'bold'</code>，表示是否加粗</li>
            <li><code>style</code>：值为<code>'normal'</code>或<code>'italics'</code>，表示是否斜体</li>
            <li><code>bevelEnabled</code>：布尔值，是否使用倒角，意为在边缘处斜切</li>
            <li><code>bevelThickness</code>：倒角厚度</li>
            <li><code>bevelSize</code>：倒角宽度</li>
          </ul>

          <h1>实例说明</h1>

          <hr>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter3/3.2.1.html">例3.2.1</a></strong></p>

          <p>创建一个三维文字：<code>new THREE.TextGeometry('Hello', {size: 1, height: 1})</code>，其效果为：</p>

          <p><img src="static/threejs/guide/download/01YZJf504EQD" alt=""></p>

          <p>改变材质和光照之后就能达到这样的效果：</p>

          <p><img src="static/threejs/guide/download/01YZMTHfN0L1" alt=""></p>

        </div>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        3.3 自定义形状
      </h2>
      <div class="typo typo-selection">
        <div id="article3" class="markdown-body">
          <p>对于Three.js没有提供的形状，可以提供自定义形状来创建。</p>

          <p>由于自定义形状需要手动指定每个顶点位置，以及顶点连接情况，如果该形状非常复杂，程序员的计算量就会比较大。在这种情况下，建议在<em>3ds Max</em>之类的建模软件中创建模型，然后使用Three.js导入到场景中，这样会更高效方便。</p>

          <p>自定义形状使用的是Geometry类，它是其他如CubeGeometry、SphereGeometry等几何形状的父类，其构造函数是：</p>

          <pre><code>THREE.Geometry()
          </code></pre>

          <p><strong><a href="https://github.com/Ovilia/ThreeExample.js/blob/master/Chapter3/3.3.1.html">例3.3.1</a></strong></p>

          <p>我们以创建一个梯台为例，首先，初始化一个几何形状，然后设置顶点位置以及顶点连接情况。</p>

          <pre><code deep="8">// 初始化几何形状
          var geometry = new THREE.Geometry();

          // 设置顶点位置
          // 顶部4顶点
          geometry.vertices.push(new THREE.Vector3(-1, 2, -1));
          geometry.vertices.push(new THREE.Vector3(1, 2, -1));
          geometry.vertices.push(new THREE.Vector3(1, 2, 1));
          geometry.vertices.push(new THREE.Vector3(-1, 2, 1));
          // 底部4顶点
          geometry.vertices.push(new THREE.Vector3(-2, 0, -2));
          geometry.vertices.push(new THREE.Vector3(2, 0, -2));
          geometry.vertices.push(new THREE.Vector3(2, 0, 2));
          geometry.vertices.push(new THREE.Vector3(-2, 0, 2));

          // 设置顶点连接情况
          // 顶面
          geometry.faces.push(new THREE.Face3(0, 1, 3));
          geometry.faces.push(new THREE.Face3(1, 2, 3));
          // 底面
          geometry.faces.push(new THREE.Face3(4, 5, 6));
          geometry.faces.push(new THREE.Face3(5, 6, 7));
          // 四个侧面
          geometry.faces.push(new THREE.Face3(1, 5, 6));
          geometry.faces.push(new THREE.Face3(6, 2, 1));
          geometry.faces.push(new THREE.Face3(2, 6, 7));
          geometry.faces.push(new THREE.Face3(7, 3, 2));
          geometry.faces.push(new THREE.Face3(3, 7, 0));
          geometry.faces.push(new THREE.Face3(7, 4, 0));
          geometry.faces.push(new THREE.Face3(0, 4, 5));
          geometry.faces.push(new THREE.Face3(0, 5, 1));
          </code></pre>

          <p>效果是：</p>

          <p><img src="static/threejs/guide/download/01ujJzR1t5BC" alt=""></p>

          <p>需要注意的是，<code>new THREE.Vector3(-1, 2, -1)</code>创建一个矢量，作为顶点位置追加到<code>geometry.vertices</code>数组中。</p>

          <p>而由<code>new THREE.Face3(0, 1, 3)</code>创建一个三个顶点组成的面片，追加到<code>geometry.faces</code>数组中。三个参数分别是四个顶点在<code>geometry.vertices</code>中的序号。</p>

          <p>在之前版本的Three.js中，可以使用Face4创建四边形，如今已经弃用。由于四个点未必共面，所以使用三角形永远是最安全的方法。</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
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
