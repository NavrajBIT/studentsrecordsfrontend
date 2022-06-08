/* eslint-disable prettier/prettier */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CButton, CTable,CTableBody,CTableHead,CTableHeaderCell,CTableRow,CTableDataCell, CFormInput,CForm,CFormLabel,CCol} from '@coreui/react'

const Addstudent = () => {
  const navigate = useNavigate();
  return (
      <>
       <CForm className="row g-3 mb-5">

       <CCol md={6}>
             <CFormLabel htmlFor="inputEmail4">Student Name</CFormLabel>
            <CFormInput type="email" id="inputEmail4" placeholder="Enter name"/>
        </CCol>
        <CCol md={6}>
             <CFormLabel htmlFor="inputEmail4">Student ID</CFormLabel>
            <CFormInput type="email" id="inputEmail4" placeholder="Enter ID"/>
        </CCol>
       
        <CCol xs={12} className="text-center mt-5">
                  <CButton color='success' type="submit">View Record</CButton>
                </CCol>
       </CForm>
              
       <CTable striped>
          <CTableHead>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Batch</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>ABC</CTableDataCell>
              <CTableDataCell>123</CTableDataCell>
              <CTableDataCell>6th</CTableDataCell>
              <CTableDataCell>2021-22</CTableDataCell>
            </CTableRow>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>DEF</CTableDataCell>
              <CTableDataCell>124</CTableDataCell>
              <CTableDataCell>6th</CTableDataCell>
              <CTableDataCell>2021-22</CTableDataCell>
            </CTableRow>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>GHI</CTableDataCell>
              <CTableDataCell>125</CTableDataCell>
              <CTableDataCell>6th</CTableDataCell>
              <CTableDataCell>2021-22</CTableDataCell>
            </CTableRow>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>JKL</CTableDataCell>
              <CTableDataCell>126</CTableDataCell>
              <CTableDataCell>6th</CTableDataCell>
              <CTableDataCell>2021-22</CTableDataCell>
            </CTableRow>
            <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>MNO</CTableDataCell>
              <CTableDataCell>127</CTableDataCell>
              <CTableDataCell>6th</CTableDataCell>
              <CTableDataCell>2021-22</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </>
    );
}
export default Addstudent;