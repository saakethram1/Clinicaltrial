const mongoose = require("mongoose");

const adverseEventSchema = new mongoose.Schema({
  participantId: { type: mongoose.Schema.Types.ObjectId, ref: "Participant", required: true },
  eventDate: { type: Date, required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ["Low", "Medium", "High"], required: true },
});

module.exports = mongoose.model("AdverseEvent", adverseEventSchema);