import React from 'react'
import PropTypes from 'prop-types'
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
    <ul className="font-medium text-gray-500 ">
      {headings.map((heading, i) => {
        if (heading.depth <= maxHeadingsDepth) {
          return (
            <li
              key={i}
              className={`px-2
              ${activeId === heading.id ? 'bg-gray-100 border-green-400' : ''}
              }`}>
              <a
                href={`#${heading.id}`}
                className={`
              ${activeId === heading.id ? 'text-gray-900' : 'text-gray-500'}
              ${heading.depth >= 3 ? 'ml-4' : ''}
              } block transform transition-colors duration-200 py-2 hover:text-gray-900`}>
                {heading.value}
              </a>
            </li>
          )
        }
      })}
    </ul>
  )
}

function Toc({ headings }) {
  const idList = getIds(headings)
  const activeId = useActiveHash(idList, `-10% 0% -50% 0%`)

  return (
    <div id="toc" className="hidden w-48 mr-8 lg:block xl:w-60">
      <div className="sticky top-0 bottom-0 md:top-20">
        <div className="max-h-screen overflow-y-auto">
          <div className="pb-32 overflow-y-auto">
            <h5 className="mb-3 text-sm font-bold uppercase">On this page</h5>
            <RenderTocItems headings={headings} activeId={activeId} />
          </div>
        </div>
      </div>
    </div>
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
