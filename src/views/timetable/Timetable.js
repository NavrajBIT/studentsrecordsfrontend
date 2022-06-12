
import React from 'react'
import {CFormLabel, CFormInput, CButton,CCol,CForm, CInputGroup} from '@coreui/react'
import { useContext, useState, useEffect } from 'react';
import userContext from 'src/context/User/userContext';
import { viewClassTimeTable, viewExamTimeTable, addTimeTable, fileHash, getStudentSchoolDetails } from 'src/api/contractCall';
const Timetable = () => {
  const user = useContext(userContext)
  const [status, setStatus] = useState("")

  if (user.userState.type === "Admin") {
    const [fileAdded, setFileAdded] = useState(false)
    const [filehash, setfilehash] = useState("")
    return (
      <>
        <CForm className="row g-3">
          <CCol md={6}>
            <CInputGroup className="d-flex flex-column">
              <CFormLabel htmlFor="admintimetable">Select Time Table type</CFormLabel>
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ width: "100%" }}
                id="admintimetable"
              >
                <option value="Class">Class Time Table</option>
                <option value="Exam">Exam Time Table</option>
              </select>
            </CInputGroup>
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="admingrade">Class</CFormLabel>
            <CFormInput type="number" id="admingrade" placeholder="Enter class" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="adminfile">Upload Time Table here</CFormLabel>
            <CFormInput type="file" id="adminfile" onChange={async (e) => {              
              setStatus("adding time table file...")
              setFileAdded(false)
              await fileHash(e.target.files[0]).then((res) => {
                setfilehash(res)
                setFileAdded(true)
                setStatus("")
              })
            }} />
          </CCol>
        </CForm>
        <CCol md={1} className='mt-4'>
          <CButton color="primary" onClick={async () => {
            setStatus("Uploading time table...")
            let grade = document.getElementById('admingrade').value
            let exam = document.getElementById('admintimetable').value
            if (exam === "Class") {
              console.log(exam);
              exam = ""
            }
           
            await addTimeTable(grade, exam, filehash).then((res) => {
              if (res.status === "Success") {
                setStatus("Time Table uploaded successfully.")
              } else { setStatus("Something went wrong. Please try again.") }
            }).catch((err) => { setStatus("Something went wrong. Please try again.") })

          }}>Upload</CButton>
        </CCol>
          <h3>{status}</h3>
      </>
    );
  }

  const [mygrade, setmygrade] = useState(0)
  
  useEffect(() => {
    setStatus("Fetching student data...")
    getStudentSchoolDetails(user.userState.id).then((res) => {
      if (res.status === "Success") {
        setmygrade(res.data.grade)
        setStatus("")
      } else { setStatus('Something went wrong. Please refresh.') }
    }).catch((err) => { setStatus('Something went wrong. Please refresh.') })
  }, [])
  return (
      <>
        
          <h2>Download your class time table here</h2>  
        <CCol md={1} className='mt-4'>
        <CButton color="primary" onClick={async () => {
          setStatus("Downloading time table...")          
          let grade = parseInt(mygrade)
          await viewClassTimeTable(grade).then((res) => {
            if (res.status === "Success") {
              if (res.file === "Time table not found") { setStatus("Time table not found.") }
              else {
                let url = "https://ipfs.io/ipfs/" + res.file                
                setStatus('')
                window.open(url)
              }
            } else {
              setStatus('Something went wrong. Please try again.')
            }
          }).catch((err) => {
            setStatus('Something went wrong. Please try again.')
          })
        }}>Download</CButton>
        </CCol>
      <h3>{status}</h3>
        <div style={{height: '20rem'}}>

        </div>
          <h2>Download latest exam time table here</h2>  
        <CCol md={1} className='mt-4'>
        <CButton color="primary" onClick={async () => {
          setStatus("Downloading time table...")
          let grade = parseInt(mygrade)
          await viewExamTimeTable(grade).then((res) => {
            if (res.status === "Success") {
              if (res.file === "Time table not found") { setStatus("Time table not found.") }
              else {
                let url = "https://ipfs.io/ipfs/" + res.file
                setStatus('')
                window.open(url)
              }
            } else {
              setStatus('Something went wrong. Please try again.')
            }
          }).catch((err) => {
            setStatus('Something went wrong. Please try again.')
          })
        }}>Download</CButton>
        </CCol>
        
      </>
    );
}
export default Timetable;
