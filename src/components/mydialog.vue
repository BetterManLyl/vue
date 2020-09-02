<template>
  <div class="sub-contain">这是一个公共的弹框</div>
</template>
<script>
export default {
  name: "mydialog",
};
</script>
<style scoped>
/* 加入css代码仅是为了使界面更加直观 */
.sub-contain {
  height: 150px;
  width: 100%;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  background-color: #1f6fb5;
  color: #fff;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal-center {
  display: flex;
  justify-content: center;
}

.vertical-center {
  display: flex;
  align-items: center;
}


</style>