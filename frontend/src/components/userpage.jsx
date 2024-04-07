// import React from 'react'

// import { useEffect, useState } from "react"

// // components
// // import WorkoutDetails from "../components/WorkoutDetails"
// // import WorkoutForm from "../components/WorkoutForm"

// const Userpage = () => {
//   const [workouts, setWorkouts] = useState(null)

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('/api/workouts')
//       const json = await response.json()

//       if (response.ok) {
//         setWorkouts(json)
//       }
//     }

//     fetchWorkouts()
//   }, [])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }
// export default Userpage

import { useEffect } from "react";
import { useWorkoutsContext } from "../components/hooks/useWorkoutsContext";

// components
// import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutDetails from "./WorkoutDetails.jsx";
// import WorkoutForm from "../components/WorkoutForm"
import WorkoutForm from "./WorkoutForm.jsx";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3000/api");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
