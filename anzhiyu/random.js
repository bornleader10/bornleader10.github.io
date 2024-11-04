var posts=["2024/11/02/hello-world/","2024/11/03/生活/","2024/11/03/科研/","2024/11/03/算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };