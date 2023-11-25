const mongoose = require("mongoose");

const Car = require("./carModel")
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    idPlaceNo: {
      type: Schema.Types.ObjectId,
      ref: "PlaceNo",
      required: false,
    },
    idCar: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: false,
    },
    startDateTime: {
      type: Date,
      required: false,
    },
    endDateTime: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

//middlewares
reservationSchema.statics.createReservation = async function (
  idPlaceNo,
  idCar,
  startDateTime,
  endDateTime
) {
  if (!idPlaceNo || !idCar) {
    throw Error("All fields must be filled!");
  }

  const car = await Car.findById(idCar);

  if (!car) {
    throw Error("Car not found");
  }

  const plateInUse = await this.findOne({
    idCar,
    startDateTime: { $lt: endDateTime },
    endDateTime: { $gt: startDateTime },
  });

  if (plateInUse) {
    throw Error("Car is already reserved during this time");
  }

  const reservation = this.create(idPlaceNo, idCar, startDateTime, endDateTime);

  return reservation;
};

module.exports = mongoose.model("Reservation", reservationSchema);
