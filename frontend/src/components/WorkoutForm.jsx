import { useState } from "react";
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// import { useWorkoutsContext } from './hooks/useWorkoutsContext.jsx'
import { useWorkoutsContext } from "./hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [nameofuser, setnameofuser] = useState("");
  const [orderdescription, setorderdescription] = useState("");
  const [orderquantity, setorderquantity] = useState(0);
  const [timeexpected, settimeexpected] = useState(0);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      nameofuser,
      orderdescription,
      orderquantity,
      timeexpected,
    };

    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      },
    });
    console.log(response);
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setnameofuser("");
      setorderquantity("");
      settimeexpected("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New order</h3>

      <label>UserNmae</label>
      <input
        type="text"
        onChange={(e) => setnameofuser(e.target.value)}
        value={nameofuser}
        className={emptyFields.includes("nameofuser") ? "error" : ""}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setorderdescription(e.target.value)}
        value={orderdescription}
        className={emptyFields.includes("orderdescription") ? "error" : ""}
      />

      <label>Order Quantity</label>
      <input
        type="number"
        onChange={(e) => setorderquantity(e.target.value)}
        value={orderquantity}
        className={emptyFields.includes("orderquantity") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
