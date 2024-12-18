import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "../components/Navbar"
import React, { Suspense } from "react"

const Profile = React.lazy(() => import('../pages/Profile'))
const About = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const FAQs = React.lazy(() => import('../pages/FAQs'))



export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='profile' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>

        } />
        <Route path='about' element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        } />
        <Route path='contact' element={
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        } />
        <Route path='faqs' element={
          <Suspense fallback={<div>Loading...</div>}>
            <FAQs />
          </Suspense>} />

        <Route path='/*' element={<Navigate to='/profile' replace />} />
      </Routes>
    </>
  )
}