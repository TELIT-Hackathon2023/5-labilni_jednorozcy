const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeNoSchema = new Schema(
  {
    idArea:{
        type: Schema.Types.ObjectId,
        required: true
    },
    availability:{
        type: Boolean,
        required: true
    },
    reservations:[
        {
            type: Schema.Types.ObjectId
        }
    ],
    _id:{
        type: Number,
        required: true,
        unique: true
    }
  }
);

module.exports = mongoose.model("PlaceNo", placeNoSchema);
