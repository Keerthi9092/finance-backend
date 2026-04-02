const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const auth = require("../middleware/auth");

// Only logged-in users
router.get("/", auth, dashboardController.getSummary);

module.exports = router;