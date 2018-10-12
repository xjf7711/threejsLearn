<template>
  <div class="index">
    <div class="block">
      <div class="online-book-title">
        <h3><span class="fa fa-book"/> <a href="/book/1272">Three.js入门指南</a></h3>
      </div>
    </div>
    <div class="article-detail">
      <h2 class="article-tit">
        前言
      </h2>
      <div class="typo typo-selection">
        <div id="article" class="markdown-body">
          <h4 style="text-align:left;background-color:#ddd;padding:15px;border-radius:10px;">作者简介：张雯莉，上海交通大学软件学院数字艺术方向的在读研究生，擅长图形图像处理、网页前端设计。个人网站：<a href="http://zhangwenli.com">http://zhangwenli.com</a>，电子邮箱：OviliaZhang@gmail.com，Github：<a href="http://github.com/Ovilia">http://github.com/Ovilia</a>。<div style="margin-top:5px;">欢迎读者给本书提出宝贵意见，也欢迎交流网页前端设计的其他话题。<div/></div></h4>

          <h1 style="text-align:center;margin:50px 0;"><b>献给所有将创造令人心动的应用的程序员</b></h1>

          <p>在Intel公司实习阶段，我制作了一个基于Web Audio的库<a href="http://01org.github.com/jWebAudio/">jWebAudio</a>，为了演示这个库的三维音效效果，我决定自学Three.js。由于之前有计算机图形学等课程的基础，而且Three.js中的很多概念是十分容易理解的，最终我在三天内快速地完成了三维打砖块游戏Arcalands。用Three.js创建三维图形应用的高效性让我有些吃惊。后来，我又在多个项目中使用了Three.js，慢慢加深了对它的了解。</p>

          <p>回顾学习Three.js的过程，我发现虽然目前网上使用Three.js的实例很多，但真正系统介绍该库的教程很少，官方文档又不齐全。对于入门者而言，仅仅看着别人的例子和API有时候还不足以“入门”。而我自己是通过很多个项目的实践，才慢慢对Three.js有了比较全面的了解。因此，我希望通过这本书给想学习Three.js的读者提供一个比较系统的入门介绍。</p>

          <h2>本书特色</h2>

          <p>本书是目前市场上唯一一本介绍Three.js技术的书，旨在通过系统化的介绍，让初学者能够着手使用Three.js，在网页上创建炫酷的三维图形应用，并学会持续学习进阶知识方法。</p>

          <p>本书每个章节都通过具体的例子阐释相关知识点，所有代码都可以在<a href="https://github.com/Ovilia/ThreeExample.js">Github</a>上找到。</p>

          <h2>本书读者</h2>

          <p>我们常说，这是一个信息爆炸的时代。这就意味着，虽然信息的获取变得越来越廉价，但学习新技术的成本却在不断增加。就作者个人而言，每次在学习一个新技术之前都要斟酌再三，因为可学习的内容越来越多，学习的机会成本也就变大了。所以，在阅读本书前，请你回答以下问题，如果您有一个回答“是”，那么本书就是为您打造的：</p>

          <ul>
            <li>我学过JavaScript，想要快速开发一款三维网页游戏，但我没有什么网页游戏开发经验。</li>
            <li>我想要使用WebGL，但是我没学过OpenGL，对图形渲染也没什么概念。</li>
            <li>我听说过Three.js，正好想要学学，苦于没有一个完整的教程。</li>
            <li>我对Three.js比较熟悉，想要更全面地了解它，并学习一些高阶的知识。</li>
            <li>我是来打酱油的，说不定会看到什么感兴趣的内容。</li>
          </ul>

          <p>如果您有一个回答“是”，那么本书现在并不太适合您，或许您可以稍后再来看看：</p>

          <ul>
            <li>我完全不懂JavaScript</li>
            <li>我想要学习OpenGL、WebGL这些比较底层的图形接口</li>
            <li>我赶着加班……哎，需求又改了！ </li>
          </ul>

          <h2>本书结构</h2>

          <p>本书针对Three.js的几个重要话题分章节介绍。</p>

          <ul>
            <li>第1章介绍Three.js和WebGL的背景资料，并通过简单的例子帮助读者实现第一个Three.js应用。</li>
            <li>第2章介绍照相机的设定。</li>
            <li>第3、4、5章分别介绍几何形状、材质和网格，即如何在场景中添加物体。</li>
            <li>第6章介绍如何实现动画效果。</li>
            <li>第7章介绍如何导入外部模型。</li>
            <li>第8章介绍添加光源和阴影效果。</li>
            <li>第9章介绍高阶话题——着色器。</li>
          </ul>

          <p>对于了解如何使用Three.js创建简单应用的读者可以跳过第1章，否则建议首先阅读第1章。对于初学者，建议按本书顺序阅读；对于比较有经验的读者，可以选择感兴趣的话题直接阅读。</p>

          <h2>寻求帮助</h2>

          <h4>1. 代码</h4>

          <p>在每一章，本书都会用具体的例子来说明，代码可以在<a href="https://github.com/Ovilia/ThreeExample.js">https://github.com/Ovilia/ThreeExample.js</a>找到。书中在介绍到相关代码时，也会给出链接。</p>

          <h4>2. 文档</h4>

          <p>当你知道应该查什么关键字的时候，查阅文档是最高效的。</p>

          <p>Three.js的官方文档可以在<a href="http://threejs.org/docs">http://threejs.org/docs</a>找到，但是由于Three.js版本更新很快（在本书的写作过程中，就经历了版本从58到61的变化，目前本书代码使用的版本是59），使用的时候一定要注意代码的版本和文档的版本是否一致。有些文档是过时的，和代码是不对应的，而且这份文档也不完整，这时最好参考源代码进一步了解。但即便如此，文档对于我们了解Three.js还是能有不少帮助。</p>

          <h4>3. Google</h4>

          <p>你碰到的问题很可能别人也碰到过，因此，在提问之前记得Google！</p>

          <h4>4. StackOverflow</h4>

          <p>如果你搜不到类似问题，那么在<a href="http://stackoverflow.com/">StackOverflow</a>上提问吧！</p>

          <h4>5. 阅读源码</h4>

          <p>Three.js的源码可以在<a href="https://github.com/mrdoob/three.js/tree/master/build">https://github.com/mrdoob/three.js/tree/master/build</a>找到。当怀疑文档和代码不一致时，一个很有效的办法是查阅源码。当然，读源码也不是让你逐行阅读，搜索关键字即可。</p>

          <p><strong>当这一切都不奏效时……</strong></p>

          <p>前几天，听学长说起在微软面试时的一道题：当你遇到一个没人知道的问题时怎么办？</p>

          <p>面试官给出了一个不错的解答：问你周围的人，碰到这样的情况他怎么办。</p>

          <p>有时候，你得不到直接的答案，但可以间接地询问如何获取答案。我想，作为程序员，我们或多或少都会遇到似乎没人能解决的问题，你可能没有意识到，但当你“不去管它，睡一觉醒来突然来了灵感”时，其实这同样是种解决方法。我们会像八仙过海一样解决各种各样看似不可能的问题，那么，下次你觉得山重水复疑无路时，记得问问你的朋友是如何寻求帮助的。</p>

          <h2>致谢</h2>

          <p>本书的顺利完成离不开很多人的帮助和关心，首先要感谢的就是我的导师肖双九博士。除了教会我对本书有直接影响的计算机图形学课程，肖老师还教会我很多受益终身的学术知识和人生哲学，而且在平时生活中也对我非常关心照顾。</p>

          <p>Three.js技术是我在Intel实习阶段学习的，因此不得不提Intel大学合作经理颜历女士一路以来对我的关心。她有些像我的精神导师，在我困惑迷茫的时候，给了我很多中肯的建议。即使在我离开Intel后，我们也保持着联系，她也一直给予我关心和肯定，让我对自己选择的未来更有信心。</p>

          <p>我还要特别感谢5位为本书作审核的同学，其中三位同学有丰富的Three.js开发经验，另外两名从初学者的角度为本书提出了建议。他们分别是：徐雪桥、单震宇、叶家彬；史鑫、王佳骏。其中，<a href="https://github.com/qiao">徐雪桥</a>现就读于美国 Carnegie Mellon University，具有丰富的网页开发经验，擅长使用 JavaScript 制作动画以及数据可视化，曾参与包括 Three.js 在内的多项开源项目。其他几位是我在交大的同学，都是各自擅长领域内的牛人，非常感谢他们能够抽出很多时间参与本书的审核工作。</p>

          <p>在此，也要感谢图灵社区提供了这样一个平台，使得本书得以面世。非常感谢图灵编辑董苗苗老师对我的悉心指导，为本书的顺利发布提供了非常重要的帮助。</p>

          <p>此外，我最想感谢作为读者的你。这是我第一次写书，因此你对本书的支持将对我是一种莫大的鼓励！</p>

          <h2>最后，祝大家享受阅读本书的过程，创造出令人心动的应用！</h2>

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
      msg: '入门指南首页'
    }
  }
}
</script>

<style scoped>
p,
li {
  text-align: left;
}
.index {
  padding: 10px;
}
</style>
