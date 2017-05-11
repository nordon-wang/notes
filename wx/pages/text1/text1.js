// text1.js

const app = getApp();

const demo = require('../../utils/demo.js');

console.log('demo',demo);



Page({

  /**
   * 页面的初始数据
   */
  data: {
		temDemo1:{
			msg:"temDemo1ss1111111"
		},
		temDemo2: {
			msg: "temDemo1ss222222"
		},
    datas:[]
  },
	dialog (){
		wx.showModal({
			title: '模态框',
			content: '点击显示',
		})
	},
	bindViewTap (e){
		console.log(e)
	},
	handler1() { console.log('handler1')},
	handler2() { console.log('handler2')},
	handler3() { console.log('handler3')},
  touchStart (){
    console.log('start')
  },
  touchMove (){
    console.log('move')
  },
  touchEnd (){
    console.log('end')
  },
  clicks (e){
    console.log(e)
  },
  tapBtn (){
    demo.sayHello('nordon');
    demo.sayGoodbye('wy');
    demo.obj.fun1()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const _this = this;
    wx.request({
      url: 'http://gank.io/api/data/福利/10/1',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // _this.globalData.datas = res.data.results;
        console.log(res.data.results)
        _this.setData({
          datas: res.data.results
        })
      },
      fail() {
        console.log('fail')
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})