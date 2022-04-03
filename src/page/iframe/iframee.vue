<template>
  <div id="container">
    <div v-if="true" id="container2">
      <iframe
        id="iframeContent"
        src="../../../static/1test1.html"
        frameborder="0"
      ></iframe>
      <button @click="post">点击</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: "",
      isShow: false,
      url: "",
    };
  },
  mounted() {
    let _this = this;
  },
  methods: {
    post() {
      document
        .getElementById("iframeContent")
        .contentWindow.postMessage({ test: "Test" });
    },
    menu() {
      this.scrollTop = document.getElementById("container2").scrollTop;
      this.scrollHeight = document.getElementById("container2").scrollHeight;
      if (this.offsetHeight + this.scrollTop - this.scrollHeight >= -1) {
        alert("滑动到底部");
        console.log("lyl：" + this.scrollTop + " lyl:" + this.scrollHeight);
      }
    },
  },
  created() {},
};
</script>

<style scoped>
#container {
  width: 100%;
  background: #f00;
}
#container2 {
  height: 500px;
  background: #f0f;
  overflow-y: scroll;
}
</style>
