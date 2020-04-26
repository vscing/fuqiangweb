// components/numbox/cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isCollection: Boolean,
        sumObj: Object,
        showTimer: Boolean,
        timerStart: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onOver() {
            this.triggerEvent('onover')
        },
        onCollectionClick(e) {
            this.triggerEvent('oncollectionclick')
        }
    }
})
