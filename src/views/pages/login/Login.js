/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */

import React, { useState, useContext } from 'react'
import userContext from 'src/context/User/userContext'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilInfo } from '@coreui/icons'
import './login.css'
import { checkLogin } from 'src/api/contractCall'

const Login = () => {
  const user = useContext(userContext)
  const [stdInput, setStdInput] = useState({
    name: null,
    password: null,
  })
  const [status, setStatus] = useState("")
  let navigate = useNavigate()
  const loginuser = async () => {
    setStatus("logging in...")
    await checkLogin(stdInput.name, stdInput.password).then((response) => {    
      
      if (response.status === "Failed" || response.loginType === "Unauthorized") { setStatus('Username or password incorrect.') }
      else {
        user.updateState(response.loginType, response.userId, 1)
        // navigate('/dashboard')
        navigate('/mydashboard')
      }
    }).catch((err) => {
      console.log(err)
      setStatus('Something went wrong. Please try again.')
    })

    // if (stdInput.name !== null && stdInput.password !== null) {
    //   navigate('/dashboard')
    // } else {
    //   alert('Please enter username with correct password')
    // }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center loginPage">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4 bg-opacity-75 bg-dark text-white">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-white">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => {
                          setStdInput({ ...stdInput, name: e.target.value })
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setStdInput({ ...stdInput, password: e.target.value })
                        }}
                      />
                    </CInputGroup>

                    <p className="text-white">{status}</p>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={async () => { await loginuser() }}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-end">
                        <CButton color="link" className="px-0 text-white">
                          Forgot password ?
                        </CButton>
                      </CCol>
                    </CRow>

                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
