import React, { useContext } from 'react'
import userContext from 'src/context/User/userContext'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logoNegative } from 'src/assets/brand/logo-negative'
// import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const user = useContext(userContext)
  const checkAccess = (nav) => {
    return nav.access === user.userType
  }
  const newNav = navigation.filter(checkAccess)

  const NavItem = (props) => {
    return <div style={
      {border: '1px solid rgba(0, 0, 0, 0.5)',
       borderRadius: '5px',
        display: 'flex',        
        justifyContent: 'center',
        padding: '0.6rem',        
        fontSize: '1.25rem'
        }} onClick={() => {  
            user.updateState(user.userState.type, user.userState.id, props.view)          
        }}>
      <p style={{margin: '0px', padding: '0px'}}>{props.name}</p>
          
          </div>
  }

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" onClick={() => {
        user.updateState(user.userState.type, user.userState.id, 1)
      }}>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
        <h5 onClick={() => {
          user.updateState(user.userState.type, user.userState.id, 1)
        }}>{user.userState.type === "Admin" ? "School" : "Student"} Dashboard</h5>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {user.userState.type === "Admin" ? <>
            <NavItem name='Add Student' view={2} />
            <NavItem name='View Records' view={3} />
            <NavItem name='Attendence' view={4} />
            <NavItem name='Assignment' view={5} />
            <NavItem name='Marks Card' view={6} />
            <NavItem name='Time Table' view={7} />
          </> : <>
            <NavItem name='Attendence' view={4} />
            <NavItem name='Assignment' view={5} />
            <NavItem name='Marks Card' view={6} />
            <NavItem name='Time Table' view={7} />
          </>}
          {/* <AppSidebarNav items={newNav} /> */}
          
          
        </SimpleBar>
      </CSidebarNav>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
