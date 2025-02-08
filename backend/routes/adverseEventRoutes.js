const express = require("express");
const adverseEventController = require("../controllers/adverseEventController");

const router = express.Router();

router.post("/report", adverseEventController.reportAdverseEvent);
router.get("/participant/:participantId", adverseEventController.getAdverseEventsByParticipant);

module.exports = router;