const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    idPlaceNo: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    idCar: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: false,
    },
    startDateTime:{
        type: Date,
        required: true
    },
    endDateTime:{
        type: Date,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

//middlewares
reservationSchema.statics.createReservation = async function () {
  return reservation;
};

module.exports = mongoose.model("Car", carSchema);
