<template>
  <div>
    <div>拍照</div>

    <div class="takephoto">
      <div v-for="(item, index) in photoList" :key="index">
        <div>
          <div>
            <p>{{ item.name }}</p>
          </div>
          <div v-if="item.todo == 'takePhoto'">
            <div>
              <div
                class="section2"
                v-for="(item1, index1) in item.fileList"
                :key="index1"
              >
                <p>{{ item1.name }}{{ index1 }}</p>
              </div>
              <div class="bottom2">
                <button class="butto2" @click="takePhoto(index)">拍照</button>
              </div>
            </div>
          </div>
          <div v-else-if="item.todo == 'netcheck'">
            <button @click="netcheck">联网核查</button>
          </div>
          <div v-else><button @click="other">其他</button></div>
        </div>
      </div>
    </div>
    <div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: [
        {
          name: "申请书1",
          required: true,
          todo: "takePhoto",
          fileList: [],
        },
        {
          name: "申请书2",
          required: true,
          todo: "takePhoto",
          fileList: [],
        },
        {
          name: "申请书3",
          required: false,
          todo: "netcheck",
          fileList: [],
        },
        {
          name: "申请书4",
          required: false,
          todo: "netcheck",
          fileList: [],
        },
        {
          name: "申请书5",
          required: false,
          todo: "other",
          fileList: [],
        },
      ],
    };
  },
  filters:{

  },
  props: {},
  methods: {
    testListIsNull() {
      if (this.photoList == false) {
        alert("集合为空");
      } else {
        alert("集合不为空");
      }
    },
    takePhoto(index) {
      let photoItem = {
        name: "拍照申请书" + (index + 1),
      };
      this.photoList[index].fileList.push(photoItem);
    },
    netcheck() {},
    other() {},
    submit() {
      for (let item of this.photoList) {
        if (item.required) {
          if (item.fileList.length == 0) {
            alert(item.name + "请上传照片");
            return;
          }
        }
      }
      this.$emit("callback", this.photoList);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.section2 {
  width: 100px;
  background: brown;
  left: 0;
  display: block;
  position: relative;
  float: left;
}
.bottom2 {
  width: 100%;
  display: block;
  top: 50px;
}
.butto2 {
  top: 50px;
}
</style>
