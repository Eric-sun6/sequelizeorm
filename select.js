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

  //查找一个列表
  // const zhangsanBlogList = await Blog.findAll({
  //   where:{
  //     userId: 1
  //   },
  //   order: [
  //     ['id', 'desc']
  //   ]

  // })
  // console.log(
  //   'zhangsanBlogList',
  //   zhangsanBlogList.map(blog => blog.dataValues)
  // )

  //分页查询
  // const blogPageList = await Blog.findAll({
  //   limit: 2, //强制本次查询 2条
  //   offset: 2, //跳过多少条
  //   order: [
  //     ['id', 'desc']
  //   ]
  // }) 
  // console.log(
  //   'blogPageList',
  //   blogPageList.map(blog => blog.dataValues)
  // )

  //查询数据的总数
  // const blogSumCount = await Blog.findAndCountAll({
  //   limit: 2, //限制本次查询2条
  //   offset: 0, //跳过多少条
  //   order: [
  //     ['id', 'desc']
  //   ]
  // })
  // console.log(
  //   'blogSumCount',
  //   blogSumCount.count,
  //   blogSumCount.rows.map(blog => blog.dataValues)
  // )

  //链表查询1
  const blogListWithUser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['userName', 'nickName'],
        where: {
          userName: 'zhangsan'
        }
      }
    ]
  })
  console.log(
    'blogListWithUser',
    blogListWithUser.count,
    blogListWithUser.rows.map(blog =>
      // blog.dataValues
      {
        const blogVal = blog.dataValues
        const user = blogVal.user.dataValues
        return user
      }
    )
  )

})()