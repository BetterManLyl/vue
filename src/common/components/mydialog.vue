<template>
  <div v-show="isVisable" class="dialog-tips dialog-center">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {
      isVisable: false,
      message: "",
    };
  },
};
</script>

<style scoped>
/* .dialog-tips {
  position: fixed;
  z-index: 100;
  min-width: 220px;
  padding: 40px 22px;
  white-space: nowrap;
  background-color: #fff;
  box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
.dialog-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>