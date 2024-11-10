var posts=["2024/11/04/Cpp-unit06/","2024/11/02/hello-world/","2024/11/05/planA/","2024/11/05/《TCP-IP网络编程》第一章/","2024/11/06/指针/","2024/11/08/计算机基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };