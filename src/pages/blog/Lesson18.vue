<template>
  <div class="example">
    <h2>18 Three.js的场景对象</h2>
    <div class="htmledit_views">
      <p>通过这一段时间的学习，发现还没有介绍过场景的基本组件。这一节就简单的介绍一下相关的内容：</p>
      <p>如果我们想让物体显示出来，首先，我们需要有一个渲染器（new THREE.WebGLRenderer()）来渲染模型和相机。</p>
      <p>渲染的模型需要放到场景（THREE.Scene()）对象中，场景对象就是专门放置模型等一系列组件的地方，必须有一个模型和一个光源才可以显示出来模型。</p>
      <p>最后需要使用调用实例化的渲染器的渲染方法将需要渲染的场景和相机传入，才可以显示出来。</p>
      <p>如果需要查看在场景中放置的组件，可以打印一下</p>
      <p/>
      <pre><code class="language-javascript hljs"><span class="hljs-built_in">console</span>.log(scene.children);</code><div class="hljs-button" data-title="复制"/></pre>将返回一个由所有组件组成的组件数组。
      <p/>
      <p><br></p>
      <p>向场景里面添加一个模型组件的方法将使用</p>
      <p/>
      <pre><code class="language-javascript hljs">scene.add(THREE.Object3D);</code><div class="hljs-button" data-title="复制"/></pre>
      <p/>
      <p><br></p>
      如果需要删除一个添加到场景内的组件，需要使用
      <p/>
      <pre><code class="language-javascript hljs">scene.remove(THREE.Object3D);</code><div class="hljs-button" data-title="复制"/></pre>
      <p><br></p>
      <p>遍历scene场景内的所有的子元素的方法：</p>
      <p/>
      <pre><code class="language-javascript hljs">scene.traverse(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">obj</span>)</span>{<span class="hljs-built_in">console</span>.log(obj)});</code><div class="hljs-button" data-title="复制"/></pre>打印出来的将是场景的每个子元素。<br><br>
      <p><br></p>
      如果组件设置了添加了id属性或者name属性，则我们可以通过以下方法从场景中获取到目标组件
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">scene.getObjectByName(name);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">scene.getObjectById(id);</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre><br> 有了上面的这些方法，我们就可以很方便的对场景内的模型组件进行操作。
      <br><br><br>
      <p/>
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
