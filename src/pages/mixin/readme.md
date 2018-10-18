#混入的说明
## 一、关于顺序
###1、混入的引入是有顺序的。
###2、相同的生命周期中的代码会顺序加载。
###3、data和methods中的相同的变量和函数会替代。
###4、animate要在clearWebGLRenderer前
###5、stats要在animate前
##二、文件功能说明
###1、stats 
###2、animate
###3、clearWebGLRenderer
###4、windowResize