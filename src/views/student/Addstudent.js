/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react'
import { CButton, CFormInput,CFormLabel,CCol,CForm,CFormSelect} from '@coreui/react'
const Addstudent = () => {
  return (
      <>
        <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Student Name</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" placeholder="Enter name"/>
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="inputPassword4">Class</CFormLabel>
                  <CFormInput type="password" id="inputPassword4" placeholder="Enter Class" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress">Father's Name</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="Enter name" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress2">Mother's Name</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Enter name" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress">Student Email ID</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="Enter email id" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress2">Contact No</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Enter number" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress">Address line 1</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="Enter address" />
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress2">Address line 2</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Enter address" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputAddress">Batch Year</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="Enter Batch Year" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputAddress">Student ID</CFormLabel>
                  <CFormInput id="inputAddress" placeholder="Enter Student ID" />
                </CCol>
                <CCol xs={4}>
                  <CFormLabel htmlFor="inputAddress">Date of Birth</CFormLabel>
                  <CFormInput id="inputAddress" type="date"/>
                </CCol>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputAddress2">Guardian's name</CFormLabel>
                  <CFormInput id="inputAddress2" placeholder="Enter number" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputCity">City</CFormLabel>
                  <CFormInput id="inputCity" />
                </CCol>
                <CCol md={2}>
                  <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
                  <CFormInput id="inputZip" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">State</CFormLabel>
                  <CFormSelect id="inputState">
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
                  <CFormLabel htmlFor="inputState">Gender</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">Nationality</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose...</option>
                    <option>Indian</option>
                    <option>Non-Indian</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} class="text-center mt-5">
                  <CButton  type="submit">Submit</CButton>
                </CCol>
              </CForm>
      </>
    );
}
export default Addstudent;
