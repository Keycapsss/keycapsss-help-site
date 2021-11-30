import React, { Fragment } from 'react'
import SidebarItems from './sidebarItems'

const SidebarDesktop = () => {
  return (
    <>
      {/* desktop sidebar */}
      <div className="top-0 z-40 hidden h-auto pr-4 md:block md:z-30 w-60">
        <div className="sticky bottom-0 top-20">
          <div className="max-h-screen overflow-y-auto">
            <nav className="mb-10 overflow-y-auto">
              <SidebarItems />
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarDesktop
