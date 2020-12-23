//查找数据
const {Blog, User} = require('./model')

!(async function (){
  //查询一条记录
  const zhangsan = await User.findOne({
    where:{
      userName: 'zhangsan'
    }
  })
  console.log('zhangsan', zhangsan.dataValues)
})()