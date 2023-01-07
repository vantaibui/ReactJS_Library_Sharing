import React from 'react'
import { Outlet, useHref, useLocation, useMatch, useNavigate, useRoutes, useSearchParams,  } from 'react-router-dom'

const AppLayout = () => {
  const href = useHref();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <React.Fragment>
      <div>AppLayout</div>
      <Outlet/>
    </React.Fragment>
  )
}

export default AppLayout