var posts=["2024/11/04/Cpp-unit06/","2024/11/02/hello-world/","2024/11/05/planA/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };