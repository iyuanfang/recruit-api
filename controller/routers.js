module.exports = function(app){
    console.log("routers");
    app.use(require('./userController'));
    app.use(require('./signinController'));
    app.use(require('./resumeController'));
    app.use(require('./positionController.js'));
    app.use(require('./companyController.js')); // 记得引用companyController
    app.use(require('./workExpController.js')); 
    app.use(require('./eduExpController.js')); 
}
