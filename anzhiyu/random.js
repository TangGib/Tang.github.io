var posts=["2024/05/04/Hbase命令/","2024/05/09/python爬虫初体验/","2024/05/02/hello-world/","2024/05/04/hive/","2024/05/04/你好世界/","2024/05/06/配置nginx/","2024/05/07/考试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };