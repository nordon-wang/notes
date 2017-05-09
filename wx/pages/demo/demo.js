const app  = getApp();

console.log(app.globalData.msg);


Page({
  data:{
    msg:'demo pages data',
    globalDatas:"globalDatas",
    arr1:['anda','lisa','nordon'],
    condition:'nordons',
    staffA:{
      firstName:'wang',
      lastName:'yao'
    },
    staffB:{
      firstName:"Wang",
      lastName:'Bing'
    },
    staffC:{
      firstName:'Nordon',
      lastName:'Wang'
    },
    templateDatas:{
      items:"items data"
    },
    num:0,
    conditions: true,
		obj1: {
			item1: 1,
			item2: 2
		},
		obj2: {
			item2: 3,
			item1: 4
		},
		objs:[{
			msg:'obj1'
		},{
			msg:'obj2'
		}],
		color1:"#f0f",
		color2:"#0ff"
  },
  demoTap (){
    this.setData({
      msg:"click btn change msg  --" + this.data.msg,
      globalDatas: app.globalData.msg
    })
  },
	onShareAppMessage (){
		return {
			title: '自定义分享标题',
			path: '/page/user?id=123'
		}
	}
})