<template>
  <div class="example">
    <h2>82 Three.js 使用第一视角控制器FirstPersonControls控制相机</h2>
    <div class="markdown_views">
      <h2 id="简介"><a name="t0"/>简介</h2>

      <p>顾名思义，通过第一视角控制器你可以像第一视角射击游戏那样控制摄像机。鼠标用于控制视角，键盘用于控制移动角色。本人感觉最类似的效果就是 cs 游戏死亡后，能够随意漂浮的感觉。</p>

      <h2 id="案例实现"><a name="t1"/>案例实现</h2>

      <p>案例查看地址：
        <a href="http://www.wjceo.com/blog/threejs/2018-03-29/142.html" rel="nofollow" target="_blank">
          http://www.wjceo.com/blog/threejs/2018-03-29/142.html
        </a> <br>
        <img :src="imageUrl" width="90%" alt="案例图片" title="城市图片">
      </p>

      <ul>
        <li>首先，引入相关库文件，其中，我们额外引入了一个处理颜色的库叫 chroma.js 库。在这里，就不详细介绍这个库了，如果需要相关内容，请查看其官方文档：
          <a href="http://gka.github.io/chroma.js/#color-rgba" rel="nofollow" target="_blank">http://gka.github.io/chroma.js/#color-rgba</a>
        </li>
      </ul>

      <pre class="prettyprint" name="code">
        <code class="hljs xml has-numbering">
          <span class="hljs-tag">&lt;script src="/lib/libs/chroma.js"&gt; &lt;/script&gt;</span>
          <span class="hljs-comment">&lt;!--处理颜色的库--&gt;</span>
          <span class="hljs-tag">&lt;script src="/lib/js/controls/FirstPersonControls.js" &gt; &lt;script&gt;</span>
        </code>
      </pre>

      <ul>
        <li>其次，就是在实例化相机以后，通过 camera 实例化相关对象，然后进行相关配置：</li>
      </ul>

      <pre>
        <code>
          controls = new THREE.FirstPersonControls(camera);
          controls.lookSpeed = 0.2; //鼠标移动查看的速度
          controls.movementSpeed = 20; //相机移动速度
          controls.noFly = true;
          controls.constrainVertical = true; //约束垂直
          controls.verticalMin = 1.0;
          controls.verticalMax = 2.0;
          controls.lon = -100; //进入初始视角x轴的角度
          controls.lat = 0; //初始视角进入后y轴的角度
        </code>
      </pre>

      <ul>
        <li>最后，需要在每次渲染里面更新控制器：</li>
      </ul>

      <pre>
        <code>
          var clock = new THREE.Clock();
          function animate() {
              render(); // 更新性能插件
              stats.update();//更新控制器
              controls.update(clock.getDelta());

              requestAnimationFrame(animate);
          }
        </code>
      </pre>

      <ul>
        <li>该控件的相关控制方法：</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>操控</th>
            <th>效果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>移动鼠标</td>
            <td>向四周看</td>
          </tr>
          <tr>
            <td>上、下、左、右方向键</td>
            <td>向上、下、左、右移动</td>
          </tr>
          <tr>
            <td>W</td>
            <td>向前移动</td>
          </tr>
          <tr>
            <td>A</td>
            <td>向左移动</td>
          </tr>
          <tr>
            <td>S</td>
            <td>向后移动</td>
          </tr>
          <tr>
            <td>D</td>
            <td>向右移动</td>
          </tr>
          <tr>
            <td>R</td>
            <td>向上移动</td>
          </tr>
          <tr>
            <td>F</td>
            <td>向下移动</td>
          </tr>
          <tr>
            <td>Q</td>
            <td>停止移动</td>
          </tr>
        </tbody>
      </table>

      <h2 id="案例代码"><a name="t2"/>案例代码见 example07</h2>
      <p>开发指南中的objmtlloader已经弃用了。</p>

    </div>
    <!--<canvas id="mainCanvas" :width="width" :height="height"></canvas>-->
  </div>
</template>
<script>
import imageUrl from '@/assets/threejs/images/20180329203734105.png'
// const imageUrl = require('@/assets/threejs/images/20180329203734105.png')
export default {
  data() {
    return {
      imageUrl
    }
  }
}
</script>
<style scoped>
.example {
  padding: 20px;
  /*background-color: #ddd;*/
  width: 100%;
  height: 800px;
}
</style>
