module.exports = function(app){
    console.log("routers");
<<<<<<< HEAD
    app.use(require('./user'));
    app.use(require('./signin'));
    app.use(require('./resume'));
	app.use(require('./company'));
=======
    app.use(require('./userController'));
    app.use(require('./signinController'));
    app.use(require('./resumeController'));
    app.use(require('./positionController.js'));
>>>>>>> 8f3be0c25fe8c491f3c503ff81cc6a36d5bfba06
}
