/* eslint-disable prettier/prettier */
import React from 'react'
import {CCol,CWidgetStatsC,CRow,CCardBody,CCardHeader,CCard, CImage} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilPeople,cilUserFollow,cilBasket,cilChartPie,cilSpeedometer} from '@coreui/icons'
import Profileimg from './student.png'
const Myprofile = () => {
  return (
      <>
      <CRow>
        <CCol lg={12} >
            <CCard className="mb-4">
              <CCardHeader>
                  <h5>Student Details</h5>
              </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol lg={3}>
                        <CImage className="p-2" align="start" rounded src={Profileimg} width={200} height={200} />
                    </CCol>

                    <CCol lg={3}>
                        <div className='info'>
                            <p>Name: Alex Williams</p>
                            <p>Class: XII</p>
                            <p>Stream: PCM</p>
                            <p>Academic Status: Good </p>
                            <p>Stream: PCM</p>
                        </div>
                    </CCol>

                    <CCol lg={3}>
                        <div className='info'>
                            <p>Name: Alex Williams</p>
                            <p>Class: XII</p>
                            <p>Stream: PCM</p>
                            <p>Academic Status: Good </p>
                            <p>Stream: PCM</p>
                        </div>
                    </CCol>
                    
                    <CCol lg={3}>
                        <div className='info'>
                            <p>Name: Alex Williams</p>
                            <p>Class: XII</p>
                            <p>Stream: PCM</p>
                            <p>Academic Status: Good </p>
                            <p>Stream: PCM</p>
                        </div>
                    </CCol>
                </CRow>
          </CCardBody>
        </CCard>
          </CCol>
      </CRow>

         <CRow>
            <CCol sm={6} md={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilPeople} height={36} />}
                value="12"
                title="Total Subjects"
                progress={{ color: 'info', value: 75 }}
                className="mb-4"
              />
            </CCol>
            <CCol sm={6} md={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilUserFollow} height={36} />}
                value="10"
                title="Exams Passed"
                progress={{ color: 'success', value: 75 }}
                className="mb-4"
              />
            </CCol>
            <CCol sm={6} md={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilBasket} height={36} />}
                value="2"
                title="Exams Failed "
                progress={{ color: 'warning', value: 75 }}
                className="mb-4"
              />
            </CCol>
            <CCol sm={6} md={3}>
              <CWidgetStatsC
                icon={<CIcon icon={cilChartPie} height={36} />}
                value="60%"
                title="Assignments Submitted"
                progress={{ color: 'primary', value: 60 }}
                className="mb-4"
              />
            </CCol>
            <CCol sm={6} md={3}>
              <CWidgetStatsC
                icon={<CIcon icon={cilSpeedometer} height={36} />}
                value="5"
                title="evnets Participation"
                progress={{ color: 'danger', value: 75 }}
                className="mb-4"
              />
            </CCol>
          </CRow>
      </>
    );
}
export default Myprofile;