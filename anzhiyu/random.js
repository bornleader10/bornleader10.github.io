var posts=["2024/11/04/Cpp-unit06/","2024/11/05/planA/","2024/11/02/hello-world/","2024/11/03/生活/","2024/11/03/科研/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };