// component/classified/classified.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    selecttype: [0, 0, 0, 0, 0, 0, 0, 0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      change_type:function(e){
          console.log(e);
      }
  }
})
