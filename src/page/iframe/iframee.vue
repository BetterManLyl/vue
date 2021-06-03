<template>
  <div>
    <iframe ref="iframe" src="../../html/1test1.html"> </iframe>
    <loading></loading>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeWin: {},
      value: false,
    };
  },
  mounted() {
    //iframe的window对象
    this.iframeWin = this.$refs.iframe.contentWindow;
  },
  methods: {
    loadfrom(val) {},
  },
};
</script>

<style>
.iframe {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: hidden;
}
</style>
