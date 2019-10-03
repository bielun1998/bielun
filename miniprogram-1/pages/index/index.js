Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    banner: [],
    carWin_img_hidden: true, //展示照片的view是否隐藏
    carWin_img: '' //存放照片路径的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      rlemel: "1171935327@qq.com",
      zheye: "web前端"
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
    this.setData({
      banner: [
        { img: "wode1.png" },
        { img: "wode2.png" },
        { img: "wode3.png" }
      ]
    })
  },
  bohao: function () {//拨号
    wx.makePhoneCall({
      phoneNumber: '17601053059',
      success: function (res) { console.log(res) }
    })

  },
  /**
    * 一键复制
    */
  copyBtn: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.rlemel,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  baochun: function () {
    wx.addPhoneContact({
      nickName: "Lun",
      firstName: "伦",
      lastName: "别",
      middleName: "",
      remark: "",
      mobilePhoneNumber: "17601053059"
    })
  },
  clickCarWin() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        //将刚才选的照片/拍的 放到下面view视图中
        that.setData({
          carWin_img: filePath, //把照片路径存到变量中，
          carWin_img_hidden: false //让展示照片的view显示
        });
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    });
  }
  ,
  copyBtn2: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.zheye,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
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