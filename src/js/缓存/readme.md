localStorage，sessionStorage，cookie的区别
共同点
1、存放客户端数据
区别
1、数据存放的时间
sessionStorage:关闭浏览器，存储数据就会删除
localStorage：始终有效，即使浏览器关闭了也一直保存，持久化存储 
cookie:可以设置过期时间
2、存储数据大小
cookie：不能超过4k
localStorage，sessionStorage：不能超过5m

根据不同的浏览器，存储的数据大小不同