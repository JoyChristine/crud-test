module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //  feature 1
    router.post("/", tutorials.create);

    // // Retrieve all Tutorials feature 2 
    // router.get("/", tutorials.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);

    // // Retrieve a single Tutorial with id feature 3
    // router.get("/:id", tutorials.findOne);

    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);

    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);

    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
};