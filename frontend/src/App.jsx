// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/header";
import Login from "./components/login";
import Footer from "./components/footer";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Login />}>
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        {/* ... etc. */}
      </Route>
    )
  );

  return (
    <>
      
    </>
  );
}

export default App;

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);


*/
