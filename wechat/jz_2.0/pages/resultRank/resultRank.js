// pages/resultRank/resultRank.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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
        const ctx = wx.createCanvasContext('myCanvas')
        ctx.setLineCap("round");
        ctx.beginPath();
        ctx.setLineWidth(10);
        ctx.arc(150 , 85 , 80 , (Math.PI * 3 / 4) , Math.PI / 4 , 0 );
        ctx.setStrokeStyle("rgba(0,0,0,0.1)");
        ctx.stroke();

        // const query = wx.createSelectorQuery()
        // query.select('#myCanvas')
        //     .fields({ node: true, size: true })
        //     .exec((res) => {
        //         const canvas = res[0].node
        //         const ctx = canvas.getContext('2d');
                // ctx.lineCap = "round";
                // ctx.beginPath();
                // ctx.lineWidth = 10;
                // ctx.arc(150 , 85 , 80 , (Math.PI * 3 / 4) , Math.PI / 4 , 0 );
                // ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // ctx.stroke();

                // ctx.beginPath();
                // ctx.lineWidth = 6;
                // ctx.arc(150 , 85 , 80 , (Math.PI * 3 / 4) , Math.PI , 0 );
                // ctx.strokeStyle = "#fff";
                // ctx.stroke();
            // })
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