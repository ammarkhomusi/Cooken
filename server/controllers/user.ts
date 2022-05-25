import bcrypt from 'bcrypt';
import User from './../models/user';
import { Request, Response } from 'express';

// const bcrypt = require('bcrypt');
// const User = require('./../models/user');
// const { Request, Response } = require ('express')


export const createUser = async (req: Request, res: Response) => {
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
 
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    console.log('user in controllers', user)
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send({ error: '401', message: 'Username or password is incorrect'});
  }
};

export const profileInfo = async (req: any, res: Response) => {
  try {
    const { _id, userName, email, favCuisines } = req.user;
    const user = { _id, userName, email, favCuisines };
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'User not found'})
  }
};