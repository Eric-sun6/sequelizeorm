const Sequelize = require('sequelize')
const seq = require('./seq.js')

//创建 User 模型，数据表的名字是users
const User = seq.define('user', {
  // id 会自动创建，并设置为主键. 自增
  userName: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称'
  }
})

// 创建 blog 模型
const Blog = seq.define('blog', {
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
// 外建关联
Blog.belongsTo(User, {
  //创建外建 Blog.userId -> User.id
  foreignKey: 'userId'
})
User.hasMany(Blog, {
  //创建外建 Blog.userId -> User.id
  foreignKey: 'userId'
})
module.exports ={
  User,
  Blog
}