const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
  async getUsers(req, res) { /* ... */ },
  async getSingleUser(req, res) { /* ... */ },
  async createUser(req, res) { /* ... */ },
  async updateUser(req, res) { /* ... */ },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) return res.status(404).json({ message: 'User not found' });

      // Bonus: delete user's thoughts
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      res.json({ message: 'User and thoughts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) { /* ... */ },
  async removeFriend(req, res) { /* ... */ },
};
