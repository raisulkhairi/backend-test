const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
  // _id: getNextSequenceValue("serviceId"),
  merk: String,
  motorcycle_type: String,
  owner: String,
  service_type: {
    type: String,
    enum: ["PERIODIC_SERVICE", "OIL_CHANGE", "etc"],
  },
  complaint: String,
  phone_number: { type: String },
  status: {
    type: String,
    enum: ["WAITING", "PROCESSING", "DONE"],
  },
  cost: Number,
});

const service = mongoose.model("Service", serviceSchema);
module.exports = service;
