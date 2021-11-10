const controller = require ('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router
    .route("/")
        .get((req, res) => {
            res.send({message: `you are in the default route`});
        });
router
    .route("/addMeterDetails")
        .post(controller.addMeterDetails);
  
router
    .route("/searchMeterDetails")
        .get(controller.searchMeterDetails); 
router
    .route("/searchMeterDetailsScanner")
        .get(controller.searchMeterDetailsScanner); 
router
    .route("/updateMeters")
        .put(controller.updateMeterModel);
router
    .route("/returnMeterDetails")
        .get(controller.returnMeterDetails);
router
    .route("/returnMeterDetailsScanner")
        .get(controller.returnMeterDetailsScanner);


module.exports = router;


