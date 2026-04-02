const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

// CREATE → Admin only
router.post("/", auth, role(["admin"]), recordController.createRecord);

// READ → Analyst + Admin
router.get("/", auth, role(["admin", "analyst"]), recordController.getRecords);

// UPDATE → Admin only
router.put("/:id", auth, role(["admin"]), recordController.updateRecord);

// DELETE → Admin only
router.delete("/:id", auth, role(["admin"]), recordController.deleteRecord);

module.exports = router;