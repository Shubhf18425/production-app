import express from "express"
// import  workout  from "../models/workoutModel.js"
const router = express.Router()
// import createWorkout from "../controllers/workoutControllers.js"
// import {getWorkout , getWorkouts , deleteWorkout , updateWorkout}from "../controllers/workoutControllers.js"
import {getallUserOrder , createUserOrder , getaUserOrder  , deleteUserOrder , updateUserorder} from "../controllers/usercontroller.js"
// import {} from "../controllers/usercontroller.js" 
// import { getallUserOrder } from "../controllers/usercontroller"
// get all workouts

// router.get('/' , (req, res) => {
//     res.json({mssg : 'Het all workouts '})
// })
router.get('/' ,  getallUserOrder)

// post a new workout
router.post('/' , createUserOrder
    // res.json({mssg : 'get a single workouts '})
)
// get a single workout
// router.get('/:id' , (req, res) => {
//     res.json({mssg : 'get a single workouts '})
// })
router.get('/:id' , getaUserOrder)
 
// delete a workout 
// router.delete('/:id' , (req, res) => {
//     res.json({mssg : 'delete a new   workouts '})
// })
router.delete('/:id' , deleteUserOrder)

// update a workout 
// router.patch('/:id' , (req, res) => {
//     res.json({mssg : 'Update a  workouts '})
// })
router.patch('/:id' , updateUserorder)

export default router