/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton} from '@coreui/react'
const Timetable = () => {
  return (
      <>
        <div className="mb-3">
            <CFormLabel htmlFor="formFile">Upload Time-Table here</CFormLabel>
            <CFormInput type="file" id="formFile"/>
        </div>
        <CButton color="primary">Upload</CButton>
      </>
    );
}
export default Timetable;
