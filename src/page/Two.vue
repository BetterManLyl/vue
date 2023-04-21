<template>
    <div>
        页面二
        <button @click="skip()">测试</button>
        <button @click="goback()">返回</button>
    </div>
</template>
  
<script>

export default {
    data() {
        return {}
    },
    methods: {
        skip() {
            this.$router.push({
                path: 'three'
            })
        },
        goback() {
            this.$router.go(-1)
        }
    }


}

</script>
  
  