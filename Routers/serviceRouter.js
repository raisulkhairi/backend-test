const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const errorHandler = require("../errorHandler/errorHandler");

router.get('/all-service',serviceController.getAll)
router.get('/service/:_id',serviceController.getById)
router.get('/by-status',serviceController.findByStatus)
router.post("/add-service", serviceController.createNewService);
router.delete('/delete',serviceController.deleteAll)
router.put('/update-status/:_id',serviceController.updateStatus)

// router.use(errorHandler);

module.exports = router;
