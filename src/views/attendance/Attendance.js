/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton} from '@coreui/react'
const Attendance = () => {
  return (
      <>
        <div className="mb-3">
            <CFormLabel htmlFor="formFile">Upload Attendance File</CFormLabel>
            <CFormInput type="file" id="formFile"/>
        </div>
        <CButton color="primary">Upload</CButton>
      </>
    );
}
export default Attendance;
