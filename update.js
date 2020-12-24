const {Blog, User} = require('./model')

!(async function(){
  //更新数据
  const updateRes = await User.update({
    nickName: '张三11111',
  }, {
    where: {
      userName: 'zhangsan'
    }
  })

  console.log('updateRes', updateRes)
})()
})()