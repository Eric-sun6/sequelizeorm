const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect:'mysql'
}
conf.pool = {
    max: 5, //连接池中最大的链接数量
    min: 0, //最小
    idle: 10000 // 如果一个链接池 10s 之内没有被使用，就释放
}
const seq = new Sequelize('weibo','root','Omg?110!ah,',conf)

//测试数据库链接
// seq.authenticate().then(()=>{
//     console.log('ok')
// })

module.exports = seq

