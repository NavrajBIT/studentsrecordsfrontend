/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import UserContext from './userContext'

const UserState = (props) => {
  const [userType, setUserType] = useState('Admin')
  const updateType = (user) => {
    setUserType(user)
  }
  return (
    <UserContext.Provider value={{ userType, updateType }}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
