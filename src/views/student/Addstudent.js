/* eslint-disable prettier/prettier */
import React from 'react'
import { CButton, CInputGroup, CFormInput} from '@coreui/react'
const Addstudent = () => {
  return (
      <>
        <CInputGroup className="mb-3">
            <CFormInput placeholder="Student Name" aria-label="Username" aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CButton color="primary">Submit</CButton>
      </>
    );
}
export default Addstudent;
