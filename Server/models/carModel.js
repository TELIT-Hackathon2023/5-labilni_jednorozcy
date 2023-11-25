const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    carBrand: {
      type: String,
      required: true,
    },
    carColor: {
      type: String,
      required: false,
    },
    licensePlateNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//middlewares
carSchema.statics.createCar = async function (
  title,
  carBrand,
  licensePlateNo,
  carColor
) {
  if ((!title || !carBrand || !licensePlateNo)) {
    throw Error("Required fields must be filled!");
  }

  const plateExist = await this.find({licensePlateNo} );
 
  if (plateExist.length > 0) {
    throw Error("License plate number already in use");
  }

  const car = await this.create({
    title,
    carBrand,
    licensePlateNo,
    carColor,
  });

  return car;
};

module.exports = mongoose.model("Car", carSchema);
