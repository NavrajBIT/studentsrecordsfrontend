/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import { CButton, CFormInput,CFormLabel,CCol,CForm,CFormSelect} from '@coreui/react'
import { addStudent, getStudentData } from 'src/api/contractCall'
import { useState } from 'react'
const Addstudent = () => {
  const [status, setStatus] = useState("")
  const addStudentData = async () => {
    setStatus("Adding student...")
    let defaultDob = document.getElementById("dob").value;
    let DateDob = new Date(
      defaultDob
    );
    let dob = parseInt(DateDob.getTime() / 1000);
    let address = document.getElementById('address1').value + " " + document.getElementById('address2').value + " " + document.getElementById('address3').value + " " + document.getElementById('address4').value + " " + document.getElementById('address5').value
    let studentParams = {
      name: document.getElementById('studentName').value,
      rollNumber: parseInt(document.getElementById('rollnumber').value),
      dob: parseInt(dob),
      gender: document.getElementById('gender').value,
      grade: parseInt(document.getElementById('grade').value),
      email: document.getElementById('email').value,
      batch: parseInt(document.getElementById('batch').value),
      address: address,
      caste: document.getElementById('caste').value,
      nationality: document.getElementById('nationality').value,
      guardianName: document.getElementById('guardian').value,
      fatherName: document.getElementById('fatherName').value,
      motherName: document.getElementById('motherName').value,
      fatherEducation: document.getElementById('fatherEducation').value,
      motherEducation: document.getElementById('motherEducation').value,
    };
    await addStudent(studentParams).then((res) => {
      console.log(res)
      if (res.status === "Success") {
        setStatus("Student data added successfully.")
      } else {setStatus("Something went wrong. Please try again.")}
    }).catch((err) => {
      console.log(err)
      setStatus("Something went wrong. Please try again.")
    })
  }
  return (
      <>
        <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="studentName">Student Name</CFormLabel>
          <CFormInput type="text" id="studentName" placeholder="Enter name"/>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="grade">Class</CFormLabel>
                  <CFormInput type="number" id="grade" placeholder="Enter Class" />
                </CCol>
                <CCol xs={6}>
          <CFormLabel htmlFor="fatherName">Father's Name</CFormLabel>
          <CFormInput id="fatherName" placeholder="Enter name" />
                </CCol>
                <CCol xs={6}>
          <CFormLabel htmlFor="fatherEducation">Father's Education</CFormLabel>
          <CFormInput id="fatherEducation" placeholder="Enter education" />
                </CCol>
                <CCol xs={6}>
          <CFormLabel htmlFor="motherName">Mother's Name</CFormLabel>
          <CFormInput id="motherName" placeholder="Enter name" />
                </CCol>
                <CCol xs={6}>
          <CFormLabel htmlFor="motherEducation">Mother's Education</CFormLabel>
          <CFormInput id="motherEducation" placeholder="Enter education" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="email">Student Email ID</CFormLabel>
          <CFormInput type='text' id="email" placeholder="Enter email id" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="caste">Caste</CFormLabel>
          <CFormInput id="caste" placeholder="Enter caste" type='text'/>
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="address1">Address line 1</CFormLabel>
          <CFormInput id="address1" placeholder="Enter address" />
                </CCol>
                <CCol xs={6}>
          <CFormLabel htmlFor="address2">Address line 2</CFormLabel>
          <CFormInput id="address2" placeholder="Enter address" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="batch">Batch Year</CFormLabel>
          <CFormInput type='number' id="batch" placeholder="Enter Batch Year" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="rollnumber">Roll Number</CFormLabel>
          <CFormInput type = 'number' id="rollnumber" placeholder="Enter Student roll number" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="dob">Date of Birth</CFormLabel>
          <CFormInput type='date' id="dob" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="guardian">Guardian's name</CFormLabel>
          <CFormInput id="guardian" placeholder="Enter number" />
                </CCol>
                <CCol md={4}>
          <CFormLabel htmlFor="address3">City</CFormLabel>
          <CFormInput id="address3" />
                </CCol>
                <CCol md={2}>
          <CFormLabel htmlFor="address4">Zip</CFormLabel>
          <CFormInput id="address4" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="address5">State</CFormLabel>
                  <CFormSelect id="address5">
                    <option>Choose</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>West Bengal</option>
                    <option>Uttar Pradesh</option>
                    <option>Punjab</option>
                    <option>Gujrat</option>

                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="gender">Gender</CFormLabel>
                    <CFormSelect id="gender">                    
                    <option>male</option>
                    <option>female</option>                    
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="nationality">Nationality</CFormLabel>
          <CFormSelect id="nationality">
                   
                    <option>Indian</option>
                    <option>Non-Indian</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} className="text-center mt-5">
                  <CButton  type="submit"onClick={() => {
            addStudentData();
                  }}>Submit</CButton>
                </CCol>
              </CForm>
              <h2>{status}</h2>
      
      </>
    );
}
export default Addstudent;
