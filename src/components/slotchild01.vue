<template>
  <div>
    <h4>这是第一个具名插槽</h4>
    <slot name="first"></slot>
    <h4>这是第二个具名插槽</h4>
    <slot name="last"></slot>
  </div>
</template>

<script>
export default {
  name: "slotchild01",
  data() {
    return {};
  },
};
</script>