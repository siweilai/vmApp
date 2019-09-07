//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    deviceNo: "CM110",
    deviceAdd:"浙江省杭州市西子湖畔",
    products:[]  
  },
  //事件处理函数
  buy:function (e) {
    console.log("app",app)
    console.log("hello",e.currentTarget.dataset)
    if(app.globalData.userInfo == null){
      wx.switchTab({
        url: '/pages/person/person',
      })
    }else if(e.currentTarget.dataset.status == 1){
      wx.navigateTo({
        url: '/pages/pay/pay?id=' + e.currentTarget.dataset.id,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.showToast({
        title: '已售空！',
        icon: 'none',
        duration: 2000
      })
    }
    
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d7204e7c4321b0682150364/demo/',
      success:function(res){
        // console.log("res",res.data.products)
        that.setData({
          products:res.data.products
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
