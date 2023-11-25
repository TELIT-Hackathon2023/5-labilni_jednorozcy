const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");
const User = require("../models/userModel");
const requireAuth = require("../middleware/requireAuth");

//middleware
router.use(requireAuth);

//createCar
router.post("/createCar", async (req, res) => {
  const { title, carBrand, licensePlateNo, carColor } = req.body;
  const userId = req.user._id;

  try {
    const newCar = await Car.createCar(
      title,
      carBrand,
      licensePlateNo,
      carColor
    );

    if(newCar){
      await User.findByIdAndUpdate(userId, {
        $push: { cars: newCar._id }
      });
    }

    res.status(200).json(newCar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//getAllUserCars
router.get("/getAllUserCars", async (req, res) => {
  const { userId } = req.query.userId;

  try {
    const cars = await Car.find({ idUser: userId });

    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//getAllCars
router.get("/getAllCars", async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
