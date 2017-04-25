// const Foo = {template:'<b>foo</b>'};
// const Bar = {template:'<b>bar</b>'};
// const Baz = {template:'<b>baz</b>'};

// const router = new VueRouter({
//     mode:'history',
//     routes:[
//         {
//             path:'/',
//             components:{
//                 default:Foo,
//                 a:Bar,
//                 b:Baz
//             }
//         },
//         {
//             path:'/other',
//             components:{
//                 default:Bar,
//                 a:Foo,
//                 b:Baz
//             }
//         }
//     ]
// });

// new Vue({
//     router,
//     el:"#app"
// });

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: Foo,
                a: Bar,
                b: Baz
            }
        },
        {
            path: '/other',
            components: {
                default: Baz,
                a: Bar,
                b: Foo
            }
        }
    ]
})

new Vue({
    router,
    el: '#app'
})