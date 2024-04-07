import React from 'react'
import Header from "./header"
import Footer from "./footer"
import Table from './table'
import {createBrowserRouter,createRoutesFromElements,Link,Route,RouterProvider} from "react-router-dom";

const Adminpage = () => {
  return (
    <div>
      <Header/>
        <Table/>
      <Footer/>
    </div>
  )
}

export default Adminpage
