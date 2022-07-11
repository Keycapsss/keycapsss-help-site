import React from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link as a } from 'gatsby' // eslint-disable-line
import { useActiveHash } from '../hooks/use-active-hash'

const maxHeadingsDepth = 2

function getIds(items) {
  const idList = []
  if (items) {
    for (const item of items) {
      if (item.depth <= maxHeadingsDepth) {
        idList.push(item.id)
      }
    }
  }
  return idList
}

function RenderTocItems({ headings, activeId }) {
  return (
    <>
      {headings.map((heading, i) => {
        if (heading.depth <= maxHeadingsDepth) {
          return (
            <Menu.Item>
                <a
                  href={`#${heading.id}`}
                  className={`block px-4 py-2 text-sm
                  ${activeId === heading.id ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                  }`}
                >
                  <span className="truncate">{heading.value}</span>
                </a>
            </Menu.Item>
          )
        }
      })}
    </>
  )
}

function Toc({ headings }) {
  const idList = getIds(headings)
  const activeId = useActiveHash(idList, `-10% 0% -50% 0%`)

  return (
    <Menu as="div" className="absolute top-0 right-0 inline-block">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          On this page
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="relative right-0 w-56 mt-4 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <RenderTocItems headings={headings} activeId={activeId} />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

RenderTocItems.propTypes = {
  headings: PropTypes.array.isRequired,
  activeId: PropTypes.string,
}

Toc.propTypes = {
  headings: PropTypes.array.isRequired,
}

export default Toc
