编译、运行
=======

主要参照： React+Webpack快速上手指南 http://www.jianshu.com/p/418e48e0cef1

代码原作：http://www.cnblogs.com/luozhihao/p/5579786.html

#ES6的坑

     类名(组件名)一定要用大写开头，否则自定义的组件无法编译，识别不出来。
     <<但是奇怪main.js都是小写的却可以>>
     类中定义render函数要注意两点，见代码注释。

 render() {//开头花括号一定要和小括号隔一个空格，否则识别不出来
    return <ol>//标签前一半一定要和return一行
      {
         React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
         })
       }
    </ol>;
 }

# 安装

## 下载安装：node.js
    有两个版本，重命名了下npm
    
## 下载安装：python27，exe复制一个改名python2.exe，有个gyp要用

## npm安装
   npm install react --save-dev
   npm install webpack --save-dev
   npm i
   
   
   拼网速和人品了。  npm4 i。最后有500多M的node_modules。 
   npm --registry http://registry.cnpmjs.org info underscore 换成国内镜像好像会好些。
   别问为什么不换 https://registry.npm.taobao.org。问网管。
   
## 编译运行
npm4 run build

npm4 run dev
   
http://localhost:8080/

##热生效
  本来JS是解释的，然后jsx弄成了编译，然后再弄个东西热生效··
  
  参考：https://github.com/gaearon/react-hot-boilerplate
  
  npm start

##测试LESS
  基本参照 http://www.cnblogs.com/samwu/p/5003809.html

##测试Material-UI
参考：http://blog.csdn.net/zccz14/article/details/51421324
https://github.com/zccz14/xjtu-index
http://www.cnblogs.com/Mrs-cc/p/4969755.html

