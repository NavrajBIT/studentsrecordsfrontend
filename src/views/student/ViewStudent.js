/* eslint-disable prettier/prettier */
import React from 'react'
import { CButton, CInputGroup, CFormInput,CForm,CFormLabel,CCol} from '@coreui/react'
const Addstudent = () => {
  return (
      <>
       <CForm className="row g-3">

       <CCol md={4}>
             <CFormLabel htmlFor="inputEmail4">Student Name</CFormLabel>
            <CFormInput type="email" id="inputEmail4" placeholder="Enter name"/>
        </CCol>
        <CCol md={4}>
             <CFormLabel htmlFor="inputEmail4">Student ID</CFormLabel>
            <CFormInput type="email" id="inputEmail4" placeholder="Enter ID"/>
        </CCol>
        <CCol md={4}>
             <CFormLabel htmlFor="inputEmail4">Enter Batch Year</CFormLabel>
            <CFormInput type="email" id="inputEmail4" placeholder="Enter Batch Year"/>
        </CCol>
       
        <CCol xs={12} class="text-center mt-5">
                  <CButton color='success' type="submit">View Record</CButton>
                </CCol>
       </CForm>
              
      </>
    );
}
export default Addstudent;