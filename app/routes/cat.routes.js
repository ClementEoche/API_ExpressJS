module.exports = app => {
    const cat = require("../controllers/cat.controller.js");
    const { authJwt } = require("../middlewares");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/",[authJwt.verifyToken] ,cat.create);

    // Retrieve all Tutorials
    router.get("/",[authJwt.verifyToken], cat.findAll);

    // Retrieve all published Tutorials
    router.get("/done",[authJwt.verifyToken], cat.findAllDone);

    // Retrieve a single Tutorial with id
    router.get("/:id",[authJwt.verifyToken], cat.findOne);

    // Update a Tutorial with id
    router.put("/:id",[authJwt.verifyToken], cat.update);

    // Delete a Tutorial with id
    router.delete("/:id",[authJwt.verifyToken], cat.delete);

    // Create a new Tutorial
    router.delete("/",[authJwt.verifyToken], cat.deleteAll);

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/api/cat", router);
};
