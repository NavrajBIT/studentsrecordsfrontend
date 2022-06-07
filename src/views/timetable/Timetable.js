/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton,CCol,CForm,CRow} from '@coreui/react'
const Timetable = () => {
  return (
      <>
        <CForm className="row g-3">
              <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Enter subject</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" placeholder="Enter Subject"/>
              </CCol>

              <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Enter Class</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" placeholder="Enter class"/>
              </CCol>
        </CForm>
             <CRow>
                <CCol xs={4} class="text-center mt-5">
                    <CButton color="primary">View</CButton>
                </CCol>
                <CCol xs={4} class="text-center mt-5">
                    <CButton color="primary">Download</CButton>
                </CCol>
                </CRow>
      
      </>
    );
}
export default Timetable;
