const mongoose = require("mongoose");
const ParkingArea = require("./parkingArea");

const Schema = mongoose.Schema;

const placeNoSchema = new Schema({
  area: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: false,
  },
  reservations: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  placeNo: {
    type: Number,
    unique: true,
  },
});

//middlewares
placeNoSchema.statics.createPlaceNo = async function (area) {
    if (!area) {
      throw Error("All fields must be filled!");
    }
  
    // Find the area
    const foundedArea = await ParkingArea.findOne({ area });
  
    if (!foundedArea) {
      throw Error("Area does not exist!");
    }
  
    const placeNo = await this.countDocuments() + 1;
  
    const foundedPlaceNO = await this.findOne({ placeNo });
  
    if (foundedPlaceNO) {
      throw Error("Parking place number is already in use!");
    }
  
    const newPlaceNo = await this.create({
      area: foundedArea._id, 
      placeNo,
    });
  
    return newPlaceNo;
  };
  

module.exports = mongoose.model("PlaceNo", placeNoSchema);
