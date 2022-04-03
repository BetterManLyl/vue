<template>
  <div id="app">
    <div>
      <!--如果这里有值，则子组件内的插槽内容不显示，如果没有值，则显示子组件内的插槽内容-->
      <slotchild>
        这是一个默认插槽x
        <h1>这是一个标题</h1>
      </slotchild>
      <slotchild01>
        <template v-slot:first>nihao</template>
        <template v-slot:last>hi</template>
      </slotchild01>
      <!-- 这是具名插槽缩写方案 v-slot:缩写为 # -->
      <slotchild01>
        <template #first>nihao</template>
        <template #last>hi</template>
      </slotchild01>
    </div>
  </div>
</template>

<script>
import slotchild from "../components/slotchild";
import slotchild01 from "../components/slotchild01";
export default {
  data() {
    return {};
  },
  components: {
    slotchild,
    slotchild01,
  },
};
</script>
