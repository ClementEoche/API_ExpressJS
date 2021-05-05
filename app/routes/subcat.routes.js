module.exports = app => {
    const subcat = require("../controllers/subcat.controller.js");
    const { authJwt } = require("../middlewares");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/",[authJwt.verifyToken] ,subcat.create);

    // Retrieve all Tutorials
    router.get("/",[authJwt.verifyToken], subcat.findAll);

    // Retrieve all published Tutorials
    router.get("/done",[authJwt.verifyToken], subcat.findAllDone);

    // Retrieve a single Tutorial with id
    router.get("/:id",[authJwt.verifyToken], subcat.findOne);

    // Update a Tutorial with id
    router.put("/:id",[authJwt.verifyToken], subcat.update);

    // Delete a Tutorial with id
    router.delete("/:id",[authJwt.verifyToken], subcat.delete);

    // Create a new Tutorial
    router.delete("/",[authJwt.verifyToken], subcat.deleteAll);

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/api/subcat", router);
};
