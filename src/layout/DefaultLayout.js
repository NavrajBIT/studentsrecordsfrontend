import React from 'react'
import { AppSidebar, AppHeader } from '../components/index'
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        {/* <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout