/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton,CCol,CForm, CInputGroup} from '@coreui/react'
const Timetable = () => {
  return (
      <>
        <CForm className="row g-3">
              <CCol md={6}>
                <CInputGroup className="d-flex flex-column">
                    <CFormLabel htmlFor="inputEmail4">Select Time Table</CFormLabel>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        style={{width: "100%"}}
                    >
                        <option value="Class">Class Time Table</option>
                        <option value="Exam">Exam Time Table</option>
                    </select>
                </CInputGroup>
              </CCol>

              <CCol md={6}>
                  <CFormLabel htmlFor="inputEmail4">Enter Class</CFormLabel>
                  <CFormInput type="email" id="inputEmail4" placeholder="Enter class"/>
              </CCol>
        </CForm>
        <CCol md={1} className='mt-4'>
            <CButton color="primary">Upload</CButton>
        </CCol>
      </>
    );
}
export default Timetable;
