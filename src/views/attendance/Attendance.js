/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from 'react'
import TableRow from "./StudentAtandence/TableRow";
import { stdData } from "./StudentAtandence/student";
import './StudentAtandence/studentAtandence.css'
const Attendance = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // months are 0-based
  const [currentDNM, setCurrentDNM] = useState([currentYear, currentMonth]);
  // will calculate total no. of days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  const [totalDays, setTotalDays] = useState(getDaysInMonth(currentDNM[0], currentDNM[1]));
  // to set total no. of days
  const updateDays = async(e) => {
    setCurrentDNM(e.target.value.split("-"));
  }

  useEffect(()=>{
    setTotalDays(getDaysInMonth(currentDNM[0], currentDNM[1]));
  },[currentDNM]);

  return (
    <div className='overflow-hidden'>
      <div className='d-flex justify-content-between align-items-center w-100 my-3'>
        <h3 className="">Attendance Input</h3>
        <span className="text-end">
          <label htmlFor="Month">Month & Year</label>
          <input type="month" onChange={(e) => updateDays(e)}/>
        </span>
      </div>
      <div className="overflow-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Unit</th>
            <th scope="col">Site</th>
            <th scope="col">Emp Code</th>
            <th scope="col">Name</th>
            {[...Array(totalDays)].map((date, index) => {
              return(
                <th key={index} scope="col">{index + 1}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {stdData.map((emp, index) => {
            return (
              <TableRow
                key={index}
                sno={index}
                unit={emp.unit}
                site={emp.site}
                empcode={emp.empcode}
                name={emp.name}
                days={totalDays}
              />
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default Attendance;
