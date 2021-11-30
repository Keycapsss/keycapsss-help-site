import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import SidebarDesktop from './sidebarDesktop'
import SidebarMobile from './sidebarMobile'

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
    offset: 80,
  })
}

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="mx-4 max-w-screen-2xl sm:mx-6 2xl:mx-auto">
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <div className="flex my-4 md:my-6">
        <button
          type="button"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          className="fixed z-30 block w-16 h-16 text-white bg-gray-900 rounded-full bottom-4 right-4 md:hidden">
          <span className="sr-only">Open site navigation</span>
          <svg
            width="24"
            height="24"
            fill="none"
            className="absolute -mt-3 -ml-3 transition duration-300 transform opacity-0 top-1/2 left-1/2 scale-80">
            <path
              d="M4 8h16M4 16h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            className="absolute -mt-3 -ml-3 transition duration-300 transform top-1/2 left-1/2">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
        <SidebarMobile open={open} setOpen={setOpen} />
        <SidebarDesktop />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
