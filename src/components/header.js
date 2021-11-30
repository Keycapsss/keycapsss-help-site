import React from 'react'
import { Link } from 'gatsby'

import KeycapsssLogo from '/assets/keycapsss-logo.svg'

const Header = () => (
  <header className="sticky top-0 z-20 flex flex-none bg-white border-b border-gray-200 lg:z-30 md:border-0">
    <div className="flex items-center flex-none w-full xl:w-64">
      <Link to="/" className="m-auto overflow-hidden md:w-auto">
        <span className="sr-only">Keycapsss Help Site Home</span>
        <KeycapsssLogo className="w-auto h-auto py-3 sm:py-0 md:w-10/12 md:mx-auto" />
      </Link>
    </div>
    <div className="flex items-center justify-between flex-auto h-12 sm:h-16 2xl:ml-0 md:border-b md:border-gray-200">
      <button
        type="button"
        className="flex items-center hidden w-full py-2 space-x-3 font-medium leading-6 transition-colors duration-200 group sm:space-x-4 hover:text-gray-600">
        <svg
          width="24"
          height="24"
          fill="none"
          className="text-gray-400 transition-colors duration-200 group-hover:text-gray-500">
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
        <span>
          Quick search<span className="hidden sm:inline"> for anything</span>
        </span>
        <span
          style={{ opacity: 1 }}
          className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
          <span className="sr-only">Press </span>
          <kbd className="font-sans">
            <abbr title="Command" className="no-underline">
              ⌘
            </abbr>
          </kbd>
          <span className="sr-only"> and </span>
          <kbd className="font-sans">K</kbd>
          <span className="sr-only"> to search</span>
        </span>
      </button>
    </div>
  </header>
)

export default Header
