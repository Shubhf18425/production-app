// const Workout = require('../models/workoutModel')
import  Userorder from "../models/userorderModel.js"
// const mongoose = require('mongoose')
import  mongoose  from "mongoose"

// get all workouts
export const getallUserOrder = async (req, res) => {
  const myorder = await Userorder.find({}).sort({createdAt: -1})

  res.status(200).json(myorder )
}

// get a single workout
export  const getaUserOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such getUserOrder'})
  }

  const getUserOrder = await Userorder.findById(id)

  if (!getUserOrder) {
    return res.status(404).json({error: 'No such getUserOrder'})
  }

  res.status(200).json(getUserOrder)
}

// create a new getUserOrder

export  const createUserOrder = async (req, res) => {
  const {nameofuser, orderdescription, orderquantity ,timeexpected } = req.body
  console.log("object")

  console.log(req.body)

  let emptyFields = []

  if (!nameofuser) {
    emptyFields.push('nameofuser')
  }
  if (!orderdescription) {
    emptyFields.push('orderdescription')
  }
  if (!orderquantity==null) {
    emptyFields.push('orderquantity')
  }
  // if (timeexpected==null) {
  //   emptyFields.push('timeexpected')
  // }

  console.log(emptyFields)

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }


  // add to the database
  try {
    const getUserOrder = await Userorder.create({ nameofuser, orderdescription, orderquantity ,timeexpected  })
    res.status(200).json(getUserOrder)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a getUserOrder
export  const deleteUserOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such getUserOrder'})
  }

  const getUserOrder = await Userorder.findOneAndDelete({_id: id})

  if(!getUserOrder) {
    return res.status(400).json({error: 'No such getUserOrder'})
  }

  res.status(200).json(getUserOrder)
}

// update a getUserOrder
export  const updateUserorder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such getUserOrder'})
  }

  const getUserOrder = await Userorder.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!getUserOrder) {
    return res.status(400).json({error: 'No such getUserOrder'})
  }

  res.status(200).json(getUserOrder)
}

// module.exports = {
//   getallUserOrder,
//   getaUserOrder,
//   createUserOrder,
//   deleteUserOrder,
//   updateUserorder
// }