// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    name:'',
    voluem:'',
    charge:0,
    count:0
  },
//支付完成
  finish: function () {
    wx.navigateTo({
      url: '/pages/pay/success',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
//减少数量
  reduce: function (){
    const that = this;
    let count = this.data.count;
    if( count > 0){
      that.setData({
        count: count-1
      })
    }else{
      wx.showToast({
        title: "购买数量必须大于1",
        icon: 'none',
        duration: 2000
      });
    }
  },
//增加数量
  add: function (){
    const that = this;
    let count = this.data.count;
    that.setData({
      count: count+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d7204e7c4321b0682150364/demo/',
      data:{
        id:options.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log("res",res)
          that.setData({
            name:res.data.data.name,
            url:res.data.data.img
          })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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