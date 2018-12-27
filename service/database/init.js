const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"

exports.connect = ()=>{

  mongoose.connect(db)

    return  new Promise((resolve,reject)=>{

      mongoose.connection.on('disconnected',()=>{
        console.log('***********数据库断开***********')
        if(maxConnectTimes<3){
          maxConnectTimes++
          mongoose.connect(db)
          }else{
              reject()
              throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
          }

      })

      mongoose.connection.on('error',()=>{
        if(maxConnectTimes<3){
          maxConnectTimes++
          mongoose.connect(db)
            }else{
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
            }
      })

      mongoose.connection.once('open',()=>{
        console.log('MongoDB Connected successfully!')
      })

    })

}
