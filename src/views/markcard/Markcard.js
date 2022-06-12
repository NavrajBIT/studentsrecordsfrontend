
import React from 'react'
import {CFormLabel, CFormInput, CButton, CCol, CForm} from '@coreui/react'
import { useContext, useState, useEffect } from 'react';
import userContext from 'src/context/User/userContext';
import { addMarksCard, fileHash, viewMarksCard, getStudentSchoolDetails } from 'src/api/contractCall';
const Markcard = () => {
  const user = useContext(userContext)
  const [status, setStatus] = useState("")
  const [fileAdded, setFileAdded] = useState(false)
  const [filehash, setfilehash] = useState("")

  if (user.userState.type === "Admin") {
    return (
      <>
        <CForm className="row g-3">
          <h2>Upload Student Marks card here</h2>
          <CCol md={6}>
            <CFormLabel htmlFor="studentid">Student ID</CFormLabel>
            <CFormInput type="number" id="studentid" placeholder="Enter Student ID" />
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="studentClass">Enter Class</CFormLabel>
            <CFormInput type="number" id="studentClass" placeholder="Enter Class" />
          </CCol>

          <CCol xs={12}>
            <CFormLabel htmlFor="formFile">Upload Mark Card</CFormLabel>
            <CFormInput type="file" id="formFile" onChange={async (e) => {
              
              setStatus("adding marks card file...")
              setFileAdded(false)
              await fileHash(e.target.files[0]).then((res) => {
                setfilehash(res)
                setFileAdded(true)
                setStatus("")
              })
            }}/>
          </CCol>
        </CForm>
        <CButton className='mt-4' color="primary" onClick={async () => {
          setStatus("Uploading marks card...")
          let studentId = document.getElementById('studentid').value
          let grade = document.getElementById('studentClass').value          
          await addMarksCard(studentId, grade, filehash).then((res) => {
            if (res.status === "Success") {
              setStatus("Marks card uploaded successfully.")
            } else { setStatus("Something went wrong. Please try again.") }
          }).catch((err) => { setStatus("Something went wrong. Please try again.") })

        }}>Upload</CButton>
        <h3>{status}</h3>
      </>
    );
  } 

  const [mygrade, setmygrade] = useState(0)
  const [markscardURL, setMarkscardURL] = useState('')
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
        <div>
          <h2>Download your Marks card here</h2>
        </div>
      <CButton className='mt-4' color="primary" onClick={async () => {
        setStatus("Downloading marks card...")
        let studentId = parseInt(user.userState.id)
        let grade = parseInt(mygrade)
        await viewMarksCard(studentId, grade).then((res) => {
          if (res.status === "Success") {
            if (res.file === "Marks card not found") { setStatus("Marks card not found.") }
            else { 
            let url = "https://ipfs.io/ipfs/" + res.file
            setMarkscardURL(url)
            setStatus('')
            window.open(url)}
          } else {
            setStatus('Something went wrong. Please try again.')
          }
        }).catch((err) => {
          setStatus('Something went wrong. Please try again.')
        })
      }}>Download</CButton>
      <h2>{status}</h2>
      {markscardURL != "" && <>
        <div style={{ border: '2px solid black', borderRadius: '10px', height: '50rem' }}>
          <img src={markscardURL} alt="" style={{ height: '100%', width: '100%' }} />
        </div>
      </>}
      </>
    );
}
export default Markcard;