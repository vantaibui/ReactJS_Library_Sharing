import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <React.Fragment>
      <div>AuthLayout</div>
      <Outlet/>
    </React.Fragment>
  )
}

export default AuthLayout