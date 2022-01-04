// pages/mine/mine.js
Page({
  // "{"nickName":"小⃝兜⃝兜⃝","gender":0,"language":"zh_CN","city":"","province":"","country":"","avatarUrl":"https://thirdwx.qlogo.cn/mmopen/vi_32/5kFxFvIHTdkU28mLzqewiaoXDS7lZCeY1Uob7OEv3TokiawbhzUiaxgtZ6Wjj2LMXhicKicy18w7OhgBr5fSCCv98pw/132"}"
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName:"微信用户",
      avatarUrl:"https://636c-cloud1-8gmbcep09679e297-1309071965.tcb.qcloud.la/default_user.png?sign=0bd626d2160d2912fd69ba2e37c73121&t=1641281655",
      hasstorage:false
    }
  },
  // 获取用户头像和名字
  getUserProfile(e) {
    if(!this.data.userInfo.hasstorage)
      wx.getUserProfile({
        desc: '用于完善用户资料', 
        success: (res) => {
          const {nickName,avatarUrl} = JSON.parse(res.rawData);
          const userInfo = {
            nickName,
            avatarUrl,
            hasstorage:true
          }
          const str = JSON.stringify(userInfo);
          wx.setStorageSync('userInfo', str)
          this.setData({userInfo})
        }
      })
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
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        const userInfo = JSON.parse(res.data)
        console.log(userInfo.nickName)
        this.setData({userInfo})
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