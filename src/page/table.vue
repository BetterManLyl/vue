<template>
  <div>
    表格
    <div>
      <table cellpadding="1px" border="1px">
        <!--这是表中的“行”。每一行是一个tr（table row）。-->
        <tr>
          <!--这是表头，也就是每一列的标题（table head）。-->
          <th style="width:100px">你好</th>
          <th style="width:100px">你好</th>
          <!--这是表的每一个单元格-->
          <!--th与td的区别是：th内部的文本样式为居中+粗体，td 内的文本样式为左对齐+普通文本。-->
          <td style="width:100px">你好</td>
        </tr>
        <tbody>
          <tr v-for="item in list">
            <td>{{item.key}}</td>
            <td>{{item.key}}</td>
            <td>{{item.key}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p @click="goBack()">返回</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          key: "语文",
        },
        {
          key: "数学",
        },
        {
          key: "英语",
        },
        {
          key: "物理",
        },
      ],
    };
  },
  methods: {
    goBack() {
      console.log(this.data.list);
      console.log("返回");
      this.$router.go(-1);
    },
  },
};
</script>