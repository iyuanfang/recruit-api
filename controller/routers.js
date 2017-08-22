module.exports = function(app){
    console.log("routers");
    app.use(require('./user'));
    app.use(require('./signin'));
    app.use(require('./resume'));
	app.use(require('./company'));
}
