import React from 'react'

const SidebarButton = () => (
  <button
    type="button"
    className="fixed z-50 block w-16 h-16 text-white bg-gray-900 rounded-full bottom-4 right-4 md:hidden">
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
)

export default SidebarButton
