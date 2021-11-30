import React, { Fragment } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default function SidebarItems() {
  const data = useStaticQuery(graphql`
    query SidebarItems {
      allSidebarYaml {
        edges {
          node {
            label
            link
            items {
              label
              link
            }
          }
        }
      }
    }
  `)

  const sidebarItems = data.allSidebarYaml.edges.map(item => {
    if (item.node.items) {
      return (
        <Fragment key={item.node.label}>
          <li className="px-5">
            <div className="flex flex-row items-center h-8">
              <div className="font-light tracking-wide text-gray-500">
                {item.node.label}
              </div>
            </div>
          </li>
          {item.node.items.map(item => (
            <li key={item.label}>
              <Link
                to={item.link}
                className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-100 hover:border-green-400"
                activeClassName="bg-gray-100 border-green-400"
                partiallyActive={true}>
                <span className="inline-flex items-center justify-center ml-4">
                  <ChevronRightIcon className="w-4 h-4 text-gray-300" />
                </span>
                <span className="ml-2 tracking-wide truncate">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </Fragment>
      )
    } else {
      return (
        <li key={item.node.label}>
          <Link
            to={item.node.link}
            className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-gray-100 hover:border-green-400"
            activeClassName="bg-gray-100 border-green-400"
            partiallyActive={item.node.link !== '/' ? true : false}>
            <span className="inline-flex items-center justify-center ml-4">
              <ChevronRightIcon className="w-4 h-4 text-gray-300" />
            </span>
            <span className="ml-2 tracking-wide truncate">
              {item.node.label}
            </span>
            {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
              New
            </span> */}
          </Link>
        </li>
      )
    }
  })

  return (
    <div className="flex-grow overflow-x-hidden overflow-y-auto">
      <ul className="flex flex-col space-y-1">{sidebarItems}</ul>
    </div>
  )
}
