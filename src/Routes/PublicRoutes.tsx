import { Routes, Route, Navigate } from "react-router-dom"
import React, { Suspense } from "react"

const Login = React.lazy(() => import('../pages/Login'))

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      } />

      <Route path='/*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}