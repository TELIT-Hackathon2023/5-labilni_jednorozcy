const express = require("express");
const router = express.Router();
const ParkingArea = require("../models/parkingArea");
const requireAuth = require("../middleware/requireAuth");

//middleware
router.use(requireAuth);

router.post("/createArea", async (req, res) => {
  const { area } = req.body;

  try {
    const newArea = await ParkingArea.createParkingArea( area );
    res.status(200).json(newArea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getAllAreas", async (req, res) => {
  try {
    const areas = await ParkingArea.find();
    res.status(200).json(areas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
