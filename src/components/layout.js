import React from 'react'
import Header from './header'
const Layout = ({ location, logo, children }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header logo={logo} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with {` `} ❤️ {` `} in the Windy
          City
        </footer>
      </div>
    </div>
  )
}

export default Layout
