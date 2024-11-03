var posts=["2024/11/02/hello-world/","2024/11/03/C-算法/","2024/11/03/生活/","2024/11/03/科研/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };