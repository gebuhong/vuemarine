import Vue from 'vue';
import Router from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
Vue.use(Router);

export default new Router({
// mode:'history',
  mode:'hash',
  routes: [

    {
      path:'/main',
      component:Main,
      props:true,
      children:[
        {path:'/user/profile/:id',name:'UserProfile',component:UserProfile},
        {path:'/user/list', component:UserList}
      ]
    },
    {
      path:'*',
      component: Login,//嵌套路由
    },
    // {
    //   path:'/goHome',
    //   //redirect重定向
    //   redirect:'/main'
    // },
    {
      path:'/main',
      component: Main,
    },
    // {
    //   path:'*',
    //   component:NotFound
    // }
  ]
})


