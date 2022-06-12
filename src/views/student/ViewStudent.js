
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CButton, CTable,CTableBody,CTableHead,CTableHeaderCell,CTableRow,CTableDataCell, CFormInput,CForm,CFormLabel,CCol} from '@coreui/react'
import { searchStudent } from 'src/api/contractCall';
import { useState } from 'react';
import ProfilePage from '../profile';
const Addstudent = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([{name: '-', rollNumber: '-', grade: '-', batch: '-'}])
const [status, setStatus] = useState("")
const [viewStudentId, setViewStudentId] = useState(0)
const ResultTable = () => {  
  let sNo = 0  
    return (<>
      <CTableHead>
    {studentData.map((student) => {
      sNo ++
      return <CTableRow style={{ cursor: "pointer" }} onClick={() => {
        setViewStudentId(student.id);
      }} key={sNo
        + student.name + student.batch}>
        <CTableHeaderCell scope="col">{sNo}</CTableHeaderCell>
        <CTableHeaderCell scope="col">{student.name}</CTableHeaderCell>
        <CTableHeaderCell scope="col">{student.rollNumber}</CTableHeaderCell>
        <CTableHeaderCell scope="col">{student.grade}</CTableHeaderCell>
        <CTableHeaderCell scope="col">{student.batch}</CTableHeaderCell>
      </CTableRow>
    })}
      </CTableHead>
      
    </>)
  
}

  return (
      <>
       <CForm className="row g-3 mb-5">

       <CCol md={6}>
             <CFormLabel htmlFor="searchname">Student Name</CFormLabel>
          <CFormInput type="text" id="searchname" placeholder="Enter name"/>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="searchrollnumber">Roll Number</CFormLabel>
          <CFormInput type="number" id="searchrollnumber" placeholder="Enter Roll Number"/>
        </CCol>
       
        <CCol xs={12} className="text-center mt-5">
                  <CButton color='success' type="submit" onClick={async () => {
                    setStatus('Searching...')
                    setStudentData([])
            let studentName = document.getElementById('searchname').value
            let studentRollNumber = parseInt(document.getElementById('searchrollnumber').value)
            
            await searchStudent(studentName, studentRollNumber).then(async (res) => {  
              setTimeout(() => {     
                console.log(res) 
                if (res.data.length > 0) {
                  res.data.map((student) => {                  
                    studentData.push({id: student.id, name: student.name, rollNumber: student.rollNumber, grade: student.grade, batch: student.batch })
                    setStudentData([...studentData])
                    setStatus("")
                  })
                }  else {
                  setViewStudentId(0)
                  setStatus("No student found.")
                }                       

              }, 1000)
              
            }).catch((err) => {
              console.log(err)
              setStatus('Something went wrong. Please try again.')})
                  }}>View Record</CButton>
                </CCol>
       </CForm>
        
        
      
       <CTable striped>
        
          <CTableHead>          
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Roll Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Batch</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <ResultTable />
          
        </CTable>
        <h2>{status}</h2>
        
      {viewStudentId > 0 && <div style={{ border: '1px solid black', borderRadius: '20px', padding: '20px', margin: '10rem 0px' }}>
        <h2>Student Details</h2>
        <ProfilePage id={viewStudentId} />
      </div>}
        
      </>
    );
}
export default Addstudent;