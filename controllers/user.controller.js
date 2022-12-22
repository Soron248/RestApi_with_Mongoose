const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getSingleUser = async (req, res) => {
  try {
    const oneUser = await User.findOne({ id: req.params.id });
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const oneUser = await User.findOne({ id: req.params.id });
    oneUser.name = req.body.name;
    oneUser.age = Number(req.body.age);
    await oneUser.save();
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "delete successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUser, getSingleUser, createUser, updateUser, deleteUser };
