const AdverseEvent = require("../models/AdverseEvent");
const Participant = require("../models/Participant");

// Report an adverse event
exports.reportAdverseEvent = async (req, res) => {
  try {
    const { participantId, eventDate, description, severity } = req.body;

    // Check if participant exists
    const participant = await Participant.findById(participantId);
    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    const adverseEvent = new AdverseEvent({ participantId, eventDate, description, severity });
    await adverseEvent.save();
    res.status(201).json({ message: "Adverse event reported successfully", adverseEvent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all adverse events for a participant
exports.getAdverseEventsByParticipant = async (req, res) => {
  try {
    const { participantId } = req.params;
    const adverseEvents = await AdverseEvent.find({ participantId }).populate("participantId");
    res.status(200).json(adverseEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};