const article = require('./article');
const tag = require('./tag');
const project = require('./project');
const special = require('./special');
const user = require('./user');
const statistics = require('./statistics');

const Koa =  require('koa');
const app = new Koa();


const waitTime = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

app.use(async(ctx,next)=>{
	ctx.set('Access-Control-Allow-Origin','*')
	ctx.set('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
	ctx.set('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
	if(ctx.method==='OPTIONS'){
		ctx.body = 200;
	}else{
		await next()
	}
})

app.use(async ctx => {
  const services = {
    '/getArticles': article.getArticles,
    '/getArticle': article.getArticle,
    '/getTags': tag.getTags,
    '/getProjects': project.getProjects,
    '/getSpecials': special.getSpecials,
    '/getTimes': statistics.getTimes,
    '/login': user.login,
    '/getVerifyCode': user.getVerifyCode, 
    '/loginToPhone': user.loginToPhone,
    '/getUserInfo': user.getUserInfo,
  }
   
  if (services[ctx.path]) {
    await waitTime();
    ctx.body = services[ctx.path]();
    return;
  }
  ctx.body = {};
});

app.listen(3001);