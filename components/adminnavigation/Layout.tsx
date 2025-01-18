import React from 'react'
import Nav from './Nav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#008080] pt-4 min-h-screen flex mt-24">
      <Nav />
      <div className="bg-white flex-grow mt-r mr-r mb-0 p-4">
        {/* Logged In {session.user.email} */}
        {children}
      </div>
    </div >
  )
}

export default Layout