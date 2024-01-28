const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
    createInventoryController, getInventoryController,
    getDonarsController,
    getHospitalController,
    getInventoryHospitalController,
    getOrgnaisationController, getOrgnaisationForHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET Hospital RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET Organisation RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

//GET Organisation RECORDS
router.get("/get-orgnaisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);


module.exports = router;