/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton,CForm,CCol} from '@coreui/react'
const Assignment = () => {
  return (
      <>
       <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="grade">Enter Grade</CFormLabel>
              <CFormInput type="text" id="grade" placeholder="Enter Grade here"/>
            </CCol>

            <CCol md={4}>
              <CFormLabel htmlFor="subject">For Subject</CFormLabel>
              <CFormInput type="text" id="subject" placeholder="Enter Subject"/>
            </CCol>

            <CCol md={4}>
                <CFormLabel htmlFor="formFile">Upload Assignment here</CFormLabel>
                <CFormInput type="file" id="formFile"/>
            </CCol>
      
            <CCol xs={12} className="text-center mt-5">
                <CButton color="primary">Upload</CButton>
            </CCol>
        </CForm>
      </>
    );
}
export default Assignment;