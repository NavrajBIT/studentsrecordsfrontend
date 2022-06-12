
import React,{useState, useEffect, useContext} from 'react'
import TableRow from "./StudentAtandence/TableRow";
import { stdDataOfclass5th, stdDataOfclass6th } from "./StudentAtandence/student";
import './StudentAtandence/studentAtandence.css'
import { CButton } from '@coreui/react';
import { getStudentPrimaryData } from 'src/api/contractCall';
// import { userSetter } from 'core-js/fn/symbol';
import userContext from 'src/context/User/userContext';
const Attendance = () => {
  const user = useContext(userContext)
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1; // months are 0-based
  const [currentDNM, setCurrentDNM] = useState([currentYear, currentMonth]);
  const [currentClass, setCurrentClass] = useState(stdDataOfclass5th);
  const [studentName, setStudentname] = useState('Student')
  const [studentRollNumber, setstudentRollNumber] = useState(1)
  // will calculate total no. of days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }
  const [totalDays, setTotalDays] = useState(getDaysInMonth(currentDNM[0], currentDNM[1]));
  // to set total no. of days
  const updateDays = async(e) => {
    setCurrentDNM(e.target.value.split("-"));
  }

  const updateClass = async(e) => {
    if(e.target.value === "5th"){
      setCurrentClass(stdDataOfclass5th);
    } else if( e.target.value === "6th") {
      setCurrentClass(stdDataOfclass6th);
    }
  }
  
  useEffect(()=>{
    if (user.userState.type === "Student") {
      getStudentPrimaryData(user.userState.id).then((res) => {
        setStudentname(res.data.name)
        setstudentRollNumber(res.data.rollNumber)
      })
    }
    setTotalDays(getDaysInMonth(currentDNM[0], currentDNM[1]));
  },[currentDNM]);
if (user.userState.type === "Admin") {
  return (
    <div className='overflow-hidden'> 
      <div className='d-flex justify-content-between align-items-center w-100 my-3'>
        <h3 className="">Attendance Input</h3>
        <span className="text-end">
          <label htmlFor="Class">Select the class</label>
          <select name="class" onChange={(e) => updateClass(e)}>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
          </select>
        </span>
        <span className="text-end">
          <label htmlFor="Month">Month &amp; Year</label>
          <input type="month" onChange={(e) => updateDays(e)} />
        </span>
      </div>
      <div className="overflow-auto">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col" style={{ whiteSpace: "nowrap" }}>Roll Number</th>
              <th scope="col">Name</th>
              {[...Array(totalDays)].map((date, index) => {
                return (
                  <th key={index} scope="col">{index + 1}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {currentClass.map((std, index) => {
              return (
                <TableRow
                  key={index}
                  sno={index}
                  stdroll={std.roll}
                  name={std.name}
                  days={totalDays}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <CButton className='mt-4' color="primary">Submit</CButton>
    </div>
  )
}
  return (
    <div className='overflow-hidden'>      
      
      <div className='d-flex justify-content-between align-items-center w-100 my-3'>
        <h3 className="">Your Attendance</h3>
       
        <span className="text-end">
          <label htmlFor="Month">Month &amp; Year</label>
          <input type="month" onChange={(e) => updateDays(e)}/>
        </span>
      </div>
      <div className="overflow-auto">
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th scope="col" style={{whiteSpace: "nowrap"}}>Attendance</th>
            <th scope="col" style={{whiteSpace: "nowrap"}}>Roll Number</th>
            <th scope="col">Name</th>
            {[...Array(totalDays)].map((date, index) => {
              return(
                <th key={index} scope="col">{index + 1}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          
            
              <TableRow
                key={1}
                sno={0}
                stdroll={studentRollNumber}
                name={studentName}
                days={totalDays}
              />
            
          
        </tbody>
      </table>
      </div>
      
    </div>
  );
}
export default Attendance;
