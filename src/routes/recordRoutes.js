const router = require("express").Router();
const controller = require("../controllers/recordController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("admin"), controller.createRecord);
router.get("/", auth, controller.getRecords);
router.put("/:id", auth, role("admin"), controller.updateRecord);
router.delete("/:id", auth, role("admin"), controller.deleteRecord);

module.exports = router;