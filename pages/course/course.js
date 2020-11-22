const { default: api } = require("../../utils/api")

// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_id:0,
    course:null,
    activeNames: "1",
  },
  //有赞折叠面板事件
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      course_id:options.course_id
    })
    api.course(options.course_id,{
      success:(res)=>{
        this.setData({
          activeNames: res.data.chapter[0]?res.data.chapter[0].id : '1',
          course:res.data
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