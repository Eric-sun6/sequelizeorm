//查找数据
const {Blog, User} = require('./model')

!(async function (){
  //查询一条记录
  // const zhangsan = await User.findOne({
  //   where:{
  //     userName: 'zhangsan'
  //   }
  // })
  // console.log('zhangsan', zhangsan.dataValues)

  //查找数据记录中的特定属性字段
  //查找特定的列
  // const zhangsanName = await User.findOne({
  //   attributes: ['userName', 'nickName'],
  //   where:{
  //     userName: 'zhangsan'
  //   }
  // })
  // console.log('zhangsanName', zhangsanName.dataValues)
})()