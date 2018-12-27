const Koa = require('koa')
const app = new Koa()
const {connect} = require('./database/init.js')

app.use(async(ctx)=>{
  ctx.body = "Hello Koa2"
})
;(async ()=>{
  await connect()
})()
app.listen(3000,()=>{
  console.log('service staring at port 3000')
})
