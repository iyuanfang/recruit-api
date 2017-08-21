const koa= require('koa');
const app= new koa();
const cors=require('koa-cors');
app.use(cors());

const bodyParser=require('koa-bodyparser');
app.use(bodyParser());

var routers=require('./controller/routers');
routers(app);

app.listen(3000);
console.log('start 3000');