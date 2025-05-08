const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).send('Server error');
  }
};


// Add to activityController.js
exports.createActivity = async (req, res) => {
  const { title, description, location, date } = req.body;
  try {
    const activity = new Activity({ title, description, location, date });
    await activity.save();
    res.status(201).json(activity);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create activity' });
  }
};
