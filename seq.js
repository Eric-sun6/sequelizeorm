const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect:'mysql'
}
const seq = new Sequelize('weibo','root','Omg?110!ah,',conf)

//测试数据库链接
// seq.authenticate().then(()=>{
//     console.log('ok')
// })

module.exports = seq

