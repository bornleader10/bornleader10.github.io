var posts=["2024/11/12/会议记录/","2024/11/06/数组、容器、指针/","2024/11/08/计算机基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };