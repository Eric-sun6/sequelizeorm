const {Blog, User} = require('./model')

!(async function(){
  //更新数据
  const deleteBlog = await Blog.destroy({
    where: {
      id: 2
    }
  })

  console.log('deleteBlog', deleteBlog)
})()