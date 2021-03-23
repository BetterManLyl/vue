<template>
  <div>
    <div>404 无权访问</div>
    <takephoto @callback="callback"></takephoto>
  </div>
</template>
<script>
import Takephoto from "../page/takephoto.vue";
export default {
  components: {
    Takephoto,
  },
  data() {
    return {};
  },
  methods:{
    callback(data){
      let list=data;
      console.log('callback'+data[0].name);
    }
  }
};
</script>