/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton,CForm,CCol} from '@coreui/react'
const StudentAssignment = () => {
  return (
      <>
        <CForm className="row g-3">
            <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">For Subject</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" placeholder="Enter Subject"/>
              </CCol>

                <CCol md={6}>
                    <CFormLabel htmlFor="formFile">Upload Time-Table here</CFormLabel>
                    <CFormInput type="file" id="formFile"/>
                </CCol>
          
                <CCol xs={12} class="text-center mt-5">
                    <CButton color="primary">Upload</CButton>
                </CCol>
        </CForm>
      </>
    );
}
export default StudentAssignment;