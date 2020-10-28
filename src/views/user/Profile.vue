<template>
<!--所以的元素，必须不能直接在根节点下 用div套起来-->
  <div>
    <h1>个人信息页</h1>
<!-- 1、   {{$route.params.id}}-->
<!-- 2、  用props绑定了就可以使用了-->
    {{id}}
  </div>


</template>

<script>
    export default {
        props:['id'],//id可以是任意类型的参数
        name: "UserProfile",
      //过滤器 拦截器 chain
      beforeRouteEnter:(to,from,next)=>{
        console.log("进入路由之前");//加载数据
        next(vm=>{
          vm.getData();//进入路由之前执行getData;
        });
      },
      beforeRouteLeave:(to,from,next)=>{
        console.log("离开路由之前");
        next();
    },
      methods:{
          getDta:function () {
            this.axios({
              method:'get',
              url:'http://localhost:8080/static/mock/data.json'

            }).then(function (response) {
                console.log(response)
            })
          }
      }

    }
</script>

<style scoped>

</style>
