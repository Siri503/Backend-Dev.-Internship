const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/book/:id', auth, bookActivity);
router.get('/my-bookings', auth, getMyBookings);

module.exports = router;
