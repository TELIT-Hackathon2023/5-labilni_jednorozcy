const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservationModel");
const requireAuth = require("../middleware/requireAuth");

//middleware
router.use(requireAuth);

router.post("/createReservation", async (req, res) => {
  const { idPlaceNo, idCar, startDateTime, endDateTime } = req.body;
  const userId = req.user;

  console.log(userId)

  try {
    const newReservation = await Reservation.createReservation(
      idPlaceNo,
      idCar,
      startDateTime,
      endDateTime
    );

    if (newReservation) {
      await User.findByIdAndUpdate(userId, {
        $push: { reservations: newReservation._id },
      });
    }

    res.status(200).json(newReservation)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
