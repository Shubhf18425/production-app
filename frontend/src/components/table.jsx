import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Link,Route,RouterProvider} from "react-router-dom";
const Table = () => {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>UserName</th>
        <th>Order Description</th>
        <th>Order Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
              </div>
            </div>
            <div>
              <div className="font-bold">Amritanshu </div>
              <div className="text-sm opacity-50">India</div>
            </div>
          </div>
        </td>
        <td>
          Blue , Black , Green threads
          <br/>
          <span className="badge badge-ghost badge-sm">threads should be of medium thickness</span>
        </td>
        <td>50</td>
        <th>
        <button className="btn btn-ghost btn-xs"><Link to='/timeline' className="label-text-alt link link-hover">Details</Link></button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Manish</div>
              <div className="text-sm opacity-50">India</div>
            </div>
          </div>
        </td>
        <td>
          Blue , Black cotton shirts
          <br/>
          <span className="badge badge-ghost badge-sm">I want shirts to be of cotton fibre</span>
        </td>
        <td>100</td>
        <th>
        <button className="btn btn-ghost btn-xs"><Link to='/timeline' className="label-text-alt link link-hover">Details</Link></button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Siddhaart </div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          White and black color socks
          <br/>
          <span className="badge badge-ghost badge-sm">I want socks to be of good material </span>
        </td>
        <td>500</td>
        <th>
        <button className="btn btn-ghost btn-xs"><Link to='/timeline' className="label-text-alt link link-hover">Details</Link></button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Piyush</div>
              <div className="text-sm opacity-50">Pakistan</div>
            </div>
          </div>
        </td>
        <td>
          Black && grey socks
          <br/>
          <span className="badge badge-ghost badge-sm">socks should be made with thick fibre thread</span>
        </td>
        <td>1000</td>
        <th>
        <button className="btn btn-ghost btn-xs"><Link to='/timeline' className="label-text-alt link link-hover">Details</Link></button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
    </div>
  )
}

export default Table
