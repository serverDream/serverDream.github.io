var posts=["/post/C-七大经典排序算法详解.html","/post/BedRock_For_Windows10.html","/post/C-游戏开发基础课1.html","/post/C-游戏开发基础课2.html","/post/C-游戏开发基础课3.html","/post/C-游戏开发基础课4.html","/post/C-游戏开发基础课5.html","/post/C-语言基础：函数.html","/post/C-语言基础：字符串.html","/post/C-语言基础：数组.html","/post/C-语言基础：条件控制语句if、循环控制语句for和while.html","/post/C-语言基础：输入输出流与变量.html","/post/C-递推算法教程.html","/post/Python教程-基本操作-变量.html","/post/python递归.html","/post/广度优先搜索bfs.html","/post/数据排序 第1课时.html","/post/数据排序 第2课时.html","/post/数据排序练习1.html","/post/栈.html","/post/贪心.html","/post/递归算法.html","/post/队列.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };