const bcrypt = require('bcrypt');
const User = require('./../models/user');

const createUser = async (req, res) => {
  console.log('I am here', req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if(user) {
    return res.status(409).send({ error: '409', message: 'User already exists' });
  }
  try {
    if(password === '') {
      throw new Error();
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await User.create(newUser);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user'})
  }
};

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    console.log('user in controllers', user)
    res.status(200).send(user);
  } catch (error) {
   res.status(401).send({ error: '401', message: 'Username or password is incorrect'});
  }
};

const profileInfo = async (req, res) => {
  try {
    const { _id, userName, email, favCuisines } = req.user;
    const user = { _id, userName, email, favCuisines };
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'User not found'})
  }
};

const logoutUser = (req, res) => {
  req.session.destroy((error) => {
    if(error) {
      res
        .status(500)
        .send({ error, message: 'Could not logout, please try again' });
    } else {
      res.clearCookie()
    }
  });
};

module.exports = { createUser, loginUser, profileInfo, logoutUser }