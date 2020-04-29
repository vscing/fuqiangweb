import {getSignsTypeList} from "../../api/index.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signsTypeList: []
  },
  // 请求交通标志各分类的数据
  requestSignsTypeList(){
    getSignsTypeList().then(res => {
      this.setData({
        signsTypeList: res.data.data
      })
    })
  },
  // 跳转到标志列表页
  goTSLPage(e){
    const {signs} = e.currentTarget.dataset;
    app.globalData.signsType = signs;
    wx.navigateTo({
      url: '/pages/trafficSignsList/trafficSignsList'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestSignsTypeList();
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