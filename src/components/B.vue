<template>
  <div>
    <p>这是B页面</p>
    <router-link to="/">返回</router-link>
    <div v-for="(item,index) in List" :key="index" >
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      List:[{
        name:'lyl'
      }]
    }
  },
  created(){
    var num='10';
    console.log('num:'+num);
    //判断是否是非数字，如果是数字 返回false
    console.log(isNaN('12'));
    //属于什么类型
    console.log((typeof '12' ));
    console.log((typeof 12 ));
    
    // console.log('list:'+this.List.length);
  }
}
</script>
<style  >
</style>