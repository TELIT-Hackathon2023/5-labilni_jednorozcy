const express = require("express");
const router = express.Router();
const PlaceNo = require("../models/placeNo");
const requireAuth = require("../middleware/requireAuth");

//middleware
router.use(requireAuth);

router.post("/createPlaceNo", async (req, res) => {
  const { area } = req.body;

  try {
    const newPlaceNo = await PlaceNo.createPlaceNo(area)
    res.status(200).json(newPlaceNo)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
