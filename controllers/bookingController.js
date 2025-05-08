// const Booking = require('../models/Booking');

// exports.bookActivity = async (req, res) => {
//   try {
//     const booking = new Booking({
//       user: req.user,
//       activity: req.params.id,
//     });
//     await booking.save();
//     res.json({ msg: 'Activity booked successfully' });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// };


// exports.getMyBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find({ user: req.user })
//       .populate('activity') // show full activity details
//       .populate('user', 'name email'); // (optional) show user name & email

//     res.json(bookings);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// };


const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

// Book an activity and return full booking details
exports.bookActivity = async (req, res) => {
  try {
    // Check if activity exists
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ msg: 'Activity not found' });
    }

    // Create booking
    const booking = new Booking({
      user: req.user,
      activity: req.params.id,
    });

    const savedBooking = await booking.save();

    // Populate activity and user fields in the response
    const populatedBooking = await Booking.findById(savedBooking._id)
      .populate('activity')
      .populate('user', 'name email');

    res.status(201).json({
      msg: 'Activity booked successfully',
      booking: populatedBooking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all bookings for the logged-in user
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user })
      .populate('activity')
      .populate('user', 'name email');

    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
