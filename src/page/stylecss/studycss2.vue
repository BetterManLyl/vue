<template>
  <div class="content">
    <a class="bg1" href="#">1</a>
    <a class="bg1" href="#">2</a>
    <a class="bg1" href="#">3</a>
    <a class="bg1" href="#">4</a>
    <a class="bg1" href="#">5</a>
  </div>
</template>

<style lang="scss" scoped>
.content {
  .bg1:hover {
    background: url("../../static/img/background.jpg") no-repeat;
  }
}
a {
  display: inline-block;
  width: 200px;
  height: 100px;
  background-color: pink;

  text-align: center;
  line-height: 100px;
  text-decoration: none;
}
</style>
