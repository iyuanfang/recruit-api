module.exports = function(app){
    console.log("routers");

    app.use(require('./userController'));
    app.use(require('./signinController'));
    app.use(require('./resumeController'));
    app.use(require('./positionController.js'));
}
