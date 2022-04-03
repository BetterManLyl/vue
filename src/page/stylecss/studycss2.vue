<template>
  <div class="content">
    <a class="bg1" href="#">1</a>
    <a class="bg1" href="#">2</a>
    <a class="bg1" href="#">3</a>
    <a class="bg1" href="#">4</a>
    <a class="bg1" href="#">5</a>
    <div class="content2"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  // margin: auto;
  .bg1:hover {
    background: url("~@/static/img/background.jpg") no-repeat;
  }
  .content2 {
    width: 200px;
    height: 200px;
    background: lightcoral;
    margin: auto;
    border: 5px solid red;
    border-radius: 10px;
    border-style: dotted;
    // position: absolute;
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
  // background: lawngreen;
}
</style>
