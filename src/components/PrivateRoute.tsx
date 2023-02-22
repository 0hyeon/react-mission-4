import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({
  authenticated,
  component: Component,
}: {
  authenticated: any
  component: any
}) {
  console.log(Component)

  return authenticated ? (
    Component
  ) : (
    <>
      <Navigate to="/login"></Navigate>
      {alert('접근할수없는페이지입니다.')}
    </>
  )
}

export default PrivateRoute
