const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  async getThoughts(req, res) { /* ... */ },
  async getSingleThought(req, res) { /* ... */ },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(req.body.userId, {
        $push: { thoughts: thought._id }
      });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) { /* ... */ },
  async deleteThought(req, res) { /* ... */ },
  async addReaction(req, res) { /* ... */ },
  async removeReaction(req, res) { /* ... */ },
};
