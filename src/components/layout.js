import * as React from 'react'
import { Fragment, useState } from 'react'
import { Link, withPrefix, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Dialog, Transition } from '@headlessui/react'
import { useLocation } from '@reach/router'

import Header from './header'
import Footer from './footer'

import {
  FolderIcon,
  HomeIcon,
  MenuIcon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Shop', href: 'https://keycapsss.com', icon: ShoppingCartIcon },
  { name: '3W6', href: '/3w6/buildguide_en', icon: FolderIcon },
  { name: 'Cirque Trackpad', href: '/cirque-trackpad', icon: FolderIcon },
  { name: 'Kimiko', href: '/kimiko/buildguide_en', icon: FolderIcon },
  { name: 'Lily58L', href: '/lily58l/buildguide_en', icon: FolderIcon },
  { name: 'Plaid-Pad', href: '/plaid-pad/buildguide_en', icon: FolderIcon },
  { name: 'Reviung41', href: '/reviung41/buildguide_en', icon: FolderIcon },
]

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}

      <header className="sticky top-0 flex flex-wrap items-center justify-between px-4 py-5 transition duration-500 bg-white shadow-md shadow-slate-900/5 dark:bg-slate-800 dark:shadow-none sm:px-6 lg:px-8">
        <div className="flex mr-6 lg:hidden">
          <button
            type="button"
            className="relative"
            aria-label="Open navigation"
            onClick={() => setSidebarOpen(true)}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-6 h-6 stroke-slate-500 dark:stroke-slate-300">
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
          </button>
        </div>
        <div className="relative flex items-center flex-grow basis-0">
          <a aria-label="Home page" href="/">
            <div className="dark:hidden">
              <img
                className="w-auto h-10 sm:hidden"
                src={withPrefix('/keycapsss-logo-small.svg')}
                alt="Keycapsss Logo"
              />
              <img
                className="hidden w-auto h-10 sm:block"
                src={withPrefix('/keycapsss-logo.svg')}
                alt="Keycapsss Logo"
              />
            </div>
            <div className="hidden dark:block">
              <img
                className="w-auto h-10 sm:hidden"
                src={withPrefix('/keycapsss-logo-small-dark.svg')}
                alt="Keycapsss Logo"
              />
              <img
                className="hidden w-auto h-10 sm:block"
                src={withPrefix('/keycapsss-logo-dark.svg')}
                alt="Keycapsss Logo"
              />
            </div>
          </a>
        </div>
        {/* <div className="mr-6 -my-5 sm:mr-8 md:mr-0">Search Placeholder</div> */}
        {/* Theme switche */}
        {/* <div className="relative flex justify-end gap-6 basis-0 sm:gap-8 md:flex-grow">
          <div className="relative z-10">
            <label className="sr-only">Theme</label>
            <button
              className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5"
              id="headlessui-listbox-button-:R2j36:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              aria-labelledby="headlessui-listbox-label-:R1j36: headlessui-listbox-button-:R2j36:"
              aria-label="Light">
              Theme
            </button>
          </div>
        </div> */}
      </header>

      <div className="relative flex justify-center mx-auto max-w-8xl dark:bg-slate-800 sm:px-2 lg:px-10">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden"
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none dark:bg-slate-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar Mobile */}
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="px-2 space-y-1">
                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href == location.pathname
                              ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-300'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 hover:dark:bg-slate-600 hover:dark:text-slate-200',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium',
                          )}>
                          <item.icon
                            className={classNames(
                              item.href == location.pathname
                                ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-300'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 hover:dark:bg-slate-600 hover:dark:text-slate-200',
                              'mr-4 h-6 w-6',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
                {/* END Sidebar Mobile */}
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar Desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-48">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-1 min-h-0 border-r border-slate-100 dark:border-slate-900">
              <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <nav className="flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href == location.pathname
                            ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-300'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 hover:dark:bg-slate-600 hover:dark:text-slate-200',
                          'group flex items-center rounded-md px-2 py-2',
                        )}
                        partiallyActive={false}>
                        <item.icon
                          className={classNames(
                            item.href == location.pathname
                              ? 'text-slate-300'
                              : 'text-slate-400 group-hover:text-slate-500 dark:text-slate-300',
                            'mr-3 h-6 w-6',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* END Sidebar Desktop */}
        <div
          id="content"
          className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
