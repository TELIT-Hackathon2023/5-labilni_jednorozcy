const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingAreaSchema = new Schema({
  area: {
    type: String,
    required: true,
    unique: true,
  },
  placeNumbers: [
    {
      type: Number,
    },
  ],
});

parkingAreaSchema.statics.createParkingArea = async function (area) {
  if (!area) {
    throw Error("Area must be provided!");
  }

  const existingArea = await this.find({ area });

  if (existingArea) {
    throw Error("Area with the same name already exists!");
  }


  const newArea = await this.create({ area });

  return newArea;
};

module.exports = mongoose.model("ParkingArea", parkingAreaSchema);
