var posts=["2024/05/02/hello-world/","2024/05/03/Hbase命令/","2024/05/03/hive/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };