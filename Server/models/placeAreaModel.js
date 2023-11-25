const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeAreaSchema = new Schema(
  {
    idPlaceNo:[
        {
            type: Schema.Types.ObjectId,
        }
    ],
    _id:{
        type: String,
        required: true,
        unique: true
    }
  }
);

module.exports = mongoose.model("PlaceArea", placeAreaSchema);
