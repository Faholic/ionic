module.exports = app => {
    const parking = require("../controllers/parking.controller");
    var router = require("express").Router();

    router.get("/", parking.findAll);
    router.post("/", parking.create);
    router.get("/:id", parking.findOne);
    router.get("/search/:query", parking.search);
    // router.get("/parking/search", parking.search);
    app.use('/parking', router);
}