
import React from 'react'
import {CFormLabel, CFormInput, CButton,CForm,CCol} from '@coreui/react'
import userContext from 'src/context/User/userContext';
import { useContext, useEffect, useState } from 'react';
import { fileHash, addAssignment } from 'src/api/contractCall';
import { getStudentSchoolDetails, viewAssignment, getAssignments } from 'src/api/contractCall';
const Assignment = () => {
  const user = useContext(userContext)
  const [status, setStatus] = useState("")
  const [fileAdded, setFileAdded] = useState(false)
  const [filehash, setfilehash] = useState("")

  
  if (user.userState.type === "Student") {
    const [mygrade, setmygrade] = useState(0)
    const [assignmentURL, setAssignmentURL] = useState('')
    const [myAssignments, setMyAssignments] = useState([])
    useEffect(() => {
      setStatus("Fetching student data...")
      getStudentSchoolDetails(user.userState.id).then(async (res) => {
        if (res.status === "Success") {
          setmygrade(res.data.grade)
          setStatus("Fetching assignments...")
          await getAssignments(parseInt(res.data.grade)).then((res2) => {
            setTimeout(() => {              
              setMyAssignments(res2.data)
              setStatus("")
            }, 1000)
          }).catch((err) => { setStatus('Something went wrong. Please refresh.') })
        } else {setStatus('Something went wrong. Please refresh.')}
      }).catch((err) => { setStatus('Something went wrong. Please refresh.') })
    }, [])

    const AssignmentView = () => {
      if (myAssignments.length > 0) {
        return (<>
          <div>
       
            
            {myAssignments.map((assignment) => {
              return <>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '1px solid black', borderRadius: '5px', margin: '20px', padding: '10px'}}>
                <div>
                  <div>Subject :</div>
                  <div>Topic :</div>
                </div>
                <div>
                    <div>{assignment.subject}</div>
                  <div>{assignment.topic}</div>
                </div>
                <button onClick={() => {
                  setStatus('Downloading assignment...')
                    let url = "https://ipfs.io/ipfs/" + assignment.file                    
                    window.open(url)
                    setStatus('')
                }}>Download</button>
              </div>

              </>
            })}
          </div>
        </>)
      } else {
        return <></>
      }
     
    }
    return (
      <>      
        <CForm className="row g-3">
          <h2>Download your assignments here.</h2>
          {/* <CCol md={4}>
            <CFormLabel htmlFor="studentsubject">Enter Subject</CFormLabel>
            <CFormInput type="text" id="studentsubject" placeholder="Enter Subject here" />
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="studenttopic">Topic</CFormLabel>
            <CFormInput type="text" id="studenttopic" placeholder="Enter Topic" />
          </CCol> */}

          <CCol md={4}>
            
            <div style={{height: '2rem'}}></div>
            {/* <CButton color="primary" onClick={async () => {
              setStatus("Downloading assignment...")
              let subject = document.getElementById('studentsubject').value
              let topic = document.getElementById('studenttopic').value
              let grade = parseInt(mygrade)
              await viewAssignment(grade, subject, topic).then((res) => {
                if (res.status === "Success") {
                  if (res.file === "Assignment not found") {setStatus("Assignment not found.")}
                  else {
                    let url = "https://ipfs.io/ipfs/" + res.file
                    setAssignmentURL(url)
                    setStatus('')
                  window.open(url)}
                } else {
                  setStatus('Something went wrong. Please try again.')
                }
              }).catch((err) => {
                setStatus('Something went wrong. Please try again.')
              })
            }}>Download</CButton> */}
          </CCol>
          <AssignmentView/>
          <h3>{status}</h3>
          {assignmentURL != "" && <>          
          <div style={{border: '2px solid black', borderRadius: '10px', height: '50rem'}}>
          <img src={assignmentURL} alt="" style={{height: '100%', width: '100%'}} />
          </div>
          </>}
          <div style={{ height: '20rem' }}></div>
          
          <h2>Upload finished assignments here.</h2>
          <CCol md={4}>
            <CFormLabel htmlFor="grade">Enter Subject</CFormLabel>
            <CFormInput type="text" id="grade" placeholder="Enter Subject here" />
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="subject">Topic</CFormLabel>
            <CFormInput type="text" id="subject" placeholder="Enter Topic" />
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="formFile">Upload Assignment here</CFormLabel>
            <CFormInput type="file" id="formFile" />
          </CCol>

          <CCol xs={12} className="text-center mt-5">
            <CButton color="primary">Upload</CButton>
          </CCol>
        </CForm>
      </>
    );
  }
  else {
    return (
      <>
        <CForm className="row g-3">
          <h2>Upload assignments here</h2>
          <CCol md={4}>
            <CFormLabel htmlFor="admingrade">Enter Grade</CFormLabel>
            <CFormInput type="number" id="admingrade" placeholder="Enter Grade here" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="adminsubject">For Subject</CFormLabel>
            <CFormInput type="text" id="adminsubject" placeholder="Enter Subject" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="admintopic">Assignment Topic</CFormLabel>
            <CFormInput type="text" id="admintopic" placeholder="Enter Topic" />
          </CCol>

          <CCol md={4}>
            <CFormLabel htmlFor="adminfile">Upload Assignment here</CFormLabel>
            <CFormInput type="file" id="adminfile" onChange={async (e) => {
              
              setStatus("adding assignment file...")
              setFileAdded(false)
              await fileHash(e.target.files[0]).then((res) => {
                setfilehash(res)
                setFileAdded(true)
                setStatus("")
              })
            }}/>
          </CCol>

          <CCol xs={12} className="text-center mt-5">
            <CButton color="primary" onClick={async () => {
              setStatus("Uploading assignment...")
              let grade = document.getElementById('admingrade').value
              let subject = document.getElementById('adminsubject').value
              let topic = document.getElementById('admintopic').value
              await addAssignment(grade, subject, filehash, topic).then((res) => {
                if (res.status === "Success") {
                  setStatus("Assignment uploaded successfully.")
                } else {setStatus("Something went wrong. Please try again.")}
              }).catch((err) => { setStatus("Something went wrong. Please try again.") })

            }}>Upload</CButton>
          </CCol>
        </CForm>
        <h3>{status}</h3>
      </>
    );
  }
  
}
export default Assignment;