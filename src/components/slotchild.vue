<template>
  <div>
    <!--//当引入组件的地方没有写插槽内容，将显示子组件插槽中默认的值，如果没有默认值也没用写插槽内容，则插槽内容为空。-->
    <slot>这里是slot的默认值</slot>
  </div>
</template>

<script>
export default {
  name: "slotchild",
};
</script>