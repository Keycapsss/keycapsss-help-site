import * as React from 'react'
import { Dialog } from '@headlessui/react'
import SidebarButton from './sidebar-button'

const Sidebar = () => {
  let [isOpen, setIsOpen] = React.useState(true)

  return (
    <>
      {/* mobile sidebar */}
      <Dialog
        as="div"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-40">
        <div className="fixed top-0 z-40 w-11/12 h-full pr-4 -ml-4 bg-white shadow-2xl sm:-ml-6 md:ml-0 xl:hidden md:z-30 md:h-auto md:relative sm:w-6/12 md:w-60 xl:w-64 md:shadow-none">
          <div className="sticky top-0 bottom-0 my-10 ml-6 md:top-20 md:my-0 md:ml-0">
            <div className="max-h-screen overflow-y-auto">
              <h3>mobile sidebar</h3>
              <nav id="sidebar-content" className="mb-10 mr-4 overflow-y-auto">
                <ul>
                  <li className="pb-4">Mobile</li>
                  <li className="pb-4">2. Menu Item</li>
                  <li className="pb-4">3. Menu Item</li>
                  <li className="pb-4">4. Menu Item</li>
                  <li className="pb-4">5. Menu Item</li>
                  <li className="pb-4">1. Menu Item</li>
                  <li className="pb-4">2. Menu Item</li>
                  <li className="pb-4">3. Menu Item</li>
                  <li className="pb-4">4. Menu Item</li>
                  <li className="pb-4">5. Menu Item</li>
                  <li className="pb-4">1. Menu Item</li>
                  <li className="pb-4">2. Menu Item</li>
                  <li className="pb-4">3. Menu Item</li>
                  <li className="pb-4">4. Menu Item</li>
                  <li className="pb-4">Last Menu Item</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* <div className="fixed inset-0 bg-gray-600 bg-opacity-50"></div> */}
      </Dialog>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed z-50 block w-16 h-16 text-white bg-gray-900 rounded-full bottom-4 right-4">
        <span className="sr-only">Open site navigation</span>
        <svg
          width="24"
          height="24"
          fill="none"
          className="absolute -mt-3 -ml-3 transition duration-300 transform opacity-0 top-1/2 left-1/2 scale-80">
          <path
            d="M4 8h16M4 16h16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
        <svg
          width="24"
          height="24"
          fill="none"
          className="absolute -mt-3 -ml-3 transition duration-300 transform top-1/2 left-1/2">
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
      </button>
    </>
  )
}

export default Sidebar
