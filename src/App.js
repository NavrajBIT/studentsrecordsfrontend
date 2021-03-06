/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */

import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import UserState from './context/User/UserState'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const MyDashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <UserState>
            <Routes>
              <Route exact path="/" name="Login Page" element={<Login />} />
              <Route exact path="/mydashboard" name="Dashboard" element={<MyDashboard/>} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </UserState>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
