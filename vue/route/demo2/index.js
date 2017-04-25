/**
 * 动态路由匹配
 *  需要把某种模式匹配到所有路由，全部映射到同个组件
 *  template:`<div> User {{ $route.params.id }}  </div>`
 */
const User = {
    template:`<div> 
        <h1> User {{$route.params.id}} </h1>
        <router-view></router-view>
      </div>`
};

const UserHome = {
    template:`<h3>Home</h3>`
}

const UserProfile = {
    template:`<b>profile bbb</b>`
}

const UserPosts = {
    template:`<b>UserPosts bbb</b>`
}

/**
 * 路径参数 使用冒号 :标记 -- :id 
 *  --当匹配到一个路由时，参数值会被设置到this.$route.params，可以在每个组件内使用
 */
const router = new VueRouter({
    routes:[
        {path:'/user/:id',
        component:User,
    children:[
        {
            path:'',
            component:UserHome
        },
        {
            path:'profiles',
            component:UserProfile
        },
        {
            path:'posts',
            component:UserPosts
        }
    ]}
    ]
});

const app = new Vue({
    router
}).$mount("#app");
