const {Blog, User} = require('./model')

!(async function(){
  //创建用户
  const lisi = await User.create({
    userName: 'lisi',
    password: '123',
    nickName: '四四'
  })
  console.log('lisi', lisi.dataValues)
})()