/**
 * 编程式导航
 *  --除了 router-link 创建 a标签 来定义导航链接 ，还可以借助router的实例方法，通过编码实现
 */

/**
 * router.push(location)
 *  --导航到不同的URL。使用router.push() -- 向history栈添加一个新的记录
 *  -- 声明式 <router-link to="..." > </router-link>
 *  --编程式 router.push(...)
 */

// string

// router.push('home');

// Obj

// router.push({
//     path:'home'
// })

// 命名的路由

// router.push({
//     name:'user',
//     params:{
//         userId:123
//     }
// });

/**
 * router.replace(location)
 *  --与router.push() 唯一不同是其不会向history添加新记录，而是替换掉当前的history记录
 *  --声明式 <router-link to="..." replace></router-link>
 *  --编程式 router.replace(...)
 */


/**
 * router.go(num)
 *  --参数是一个整数--代表在history记录中向前前进或者向后退多少步
 *  --类似window.history.go(num)
 */



/**
 * 命名路由
 */



Vue.use(VueRouter)

const Home = { template: '<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/foo', name: 'foo', component: Foo },
        { path: '/bar/:id', name: 'bar', component: Bar }
    ]
})

new Vue({
    router,
    template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')