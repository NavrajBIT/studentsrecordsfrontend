import React from 'react'
import { AppSidebar, AppHeader, AppContent } from '../components/index'
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import userContext from 'src/context/User/userContext'
import { useContext, useState, useEffect } from 'react'

import Timetable from 'src/views/timetable/Timetable'
import Attendance from 'src/views/attendance/Attendance'
import Markcard from 'src/views/markcard/Markcard'
import Assignment from 'src/views/assignment/Assignment'
import Addstudent from 'src/views/student/Addstudent'
import StudentRecords from 'src/views/student/ViewStudent'
import ProfilePage from 'src/views/profile'
// import { textColorsPropType } from '@coreui/react/dist/components/Types'
import { getStudentData } from 'src/api/contractCall'



const DefaultLayout = () => {
  const user = useContext(userContext)
 


  
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
          {user.userState.view === 1 && user.userState.type === "Student" && <ProfilePage id={user.userState.id}/>}
          {user.userState.view === 2 && <Addstudent />}
          {user.userState.view === 3 && <StudentRecords />}
          {user.userState.view === 4 && <Attendance />}
          {user.userState.view === 5 && <Assignment />}
          {user.userState.view === 6 && <Markcard />}
          {user.userState.view === 7 && <Timetable />} 
          

        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
