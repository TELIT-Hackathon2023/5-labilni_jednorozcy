const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");
const requireAuth = require('../middleware/requireAuth')

//middleware
router.use(requireAuth)

//createCar
router.post("/createCar", async (req, res) => {
  const { title, carBrand, licensePlateNo, carColor } = req.body;

  try {
    const newCar = await Car.createCar(
      title,
      carBrand,
      licensePlateNo,
      carColor
    );

    res.status(200).json(newCar)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

//getAllCars
router.get("/getAllCars", async (req, res) => {});

module.exports = router;
