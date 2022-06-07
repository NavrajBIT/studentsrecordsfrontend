/* eslint-disable prettier/prettier */
import React from 'react'
import {CFormLabel, CFormInput, CButton} from '@coreui/react'
const Studentdash = () => {
  return (
      <>
        <div className="mb-3">
            <CFormLabel htmlFor="formFile">Upload Assignment</CFormLabel>
            <CFormInput type="file" id="formFile"/>
        </div>
      </>
    );
}
export default Studentdash;