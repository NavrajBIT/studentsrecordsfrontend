/* eslint-disable prettier/prettier */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CButton, CTable,CTableBody,CTableHead,CTableHeaderCell,CTableRow,CTableDataCell, CFormInput,CForm,CFormLabel,CCol} from '@coreui/react'

const Addstudent = () => {
  const navigate = useNavigate();
  return (
      <>
       <CForm className="row g-3 mb-5">

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
              
       <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow style={{cursor: "pointer"}} onClick={() => navigate('/studentprofile')}>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    {/* <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell> */}
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
      </>
    );
}
export default Addstudent;