/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton, CCol, CForm} from '@coreui/react'
const Markcard = () => {
  return (
      <>
        <CForm className="row g-3">
          <CCol md={6}>
            <CFormLabel htmlFor="studentid">Student ID</CFormLabel>
            <CFormInput type="text" id="studentid" placeholder="Enter Student ID"/>
          </CCol>

          <CCol md={6}>
            <CFormLabel htmlFor="studentClass">Enter Class</CFormLabel>
            <CFormInput type="text" id="studentClass" placeholder="Enter Class"/>
          </CCol>
    
          <CCol xs={12}>
            <CFormLabel htmlFor="formFile">Upload Mark Card</CFormLabel>
            <CFormInput type="file" id="formFile"/>
          </CCol>
        </CForm>
        <CButton className='mt-4' color="primary">Upload</CButton>
      </>
    );
}
export default Markcard;