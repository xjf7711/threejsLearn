<template>
  <div class="example">
    <h2>17 Three.js针对浏览器变动进行自适应</h2>
    <div class="htmledit_views">
      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-02-12/19.html" rel="nofollow" target="_blank">http://www.wjceo.com/blog/threejs/2018-02-12/19.html</a>
      </p>
      <p>可以改变页面大小测试效果。</p>
      <p>有的时候，我们打开了浏览器的页面，显示了当前的渲染的模型。但是，如果你没有设置场景模型跟随着浏览器的宽高度变化进行自适应，就gg了。所以，今天额外补上一篇相关的怎么跟随浏览器变动进行自适应。</p>
      <p>要是场景随着浏览器的大小变动进行自适应，就需要监听window的resize事件，就是浏览器变动事件。</p>
      <p/>
      <pre><code class="language-javascript hljs"><span class="hljs-built_in">window</span>.onresize = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"/>)</span>{}</code><div class="hljs-button" data-title="复制"/></pre>或者使用addEventListener事件
      <p/>
      <p/>
      <pre><code class="language-javascript hljs"><span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">"resize"</span>,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"/>)</span>{})</code><div class="hljs-button" data-title="复制"/></pre>
      <p/>
      <p><br></p>事件监听成功了以后，就需要写变动后需要触发的表达式了：
      <p/>
      <pre><code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-comment">//窗口变动触发的函数</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onWindowResize</span>(<span class="hljs-params"/>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        camera.aspect = <span class="hljs-built_in">window</span>.innerWidth / <span class="hljs-built_in">window</span>.innerHeight;</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        camera.updateProjectionMatrix();</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">        renderer.setSize( <span class="hljs-built_in">window</span>.innerWidth, <span class="hljs-built_in">window</span>.innerHeight );</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"/></div><div class="hljs-ln-code"><div class="hljs-ln-line"/></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"/></div><div class="hljs-ln-code"><div class="hljs-ln-line">    }</div></div></li></ol></code><div class="hljs-button" data-title="复制"/></pre><br>上面主要就是更新了照相机的比例和渲染器的比例，就达到了当前的效果。
      <p/>
      <p>代码使用的上一节的，就不上传代码了，上传两张示例效果。</p>
      <p><img src="https://img-blog.csdn.net/20170731234702948?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" width="100%" alt=""><br><br>上面就是全屏状态下显示的效果，下面是直接将浏览器改成了一半的效果：</p>
      <p><img src="https://img-blog.csdn.net/20170731234841020?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDAwNDM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" width="100%" alt=""><br></p>
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
