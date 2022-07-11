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
    <nav className="space-y-1" aria-label="Sidebar">
      {headings.map((heading, i) => {
        if (heading.depth <= maxHeadingsDepth) {
          return (
            <a
              key={i}
              href={`#${heading.id}`}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium
                ${
                  activeId === heading.id
                    ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-300'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 hover:dark:bg-slate-600 hover:dark:text-slate-200'
                }
              }`}>
              <span className="truncate">{heading.value}</span>
            </a>
          )
        }
      })}
      {/* comment section */}
      <a
        key="comments"
        href="#comments"
        className={`flex items-center rounded-md px-3 py-2 text-sm font-medium
                ${
                  activeId === 'comments'
                    ? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-300'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 hover:dark:bg-slate-600 hover:dark:text-slate-200'
                }
              }`}>
        <span className="truncate">Comments</span>
      </a>
    </nav>
  )
}

function Toc({ headings }) {
  const idList = getIds(headings)
  const activeId = useActiveHash(idList, `-10% 0% -50% 0%`)

  return (
    <aside className="relative flex-shrink-0 hidden overflow-y-auto xl:flex xl:flex-col w-96">
      {/* Start secondary column (hidden on smaller screens) */}
      <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
        <h5 className="mb-3 text-sm font-bold uppercase dark:text-slate-300">On this page</h5>
        <RenderTocItems headings={headings} activeId={activeId} />
      </div>
      {/* End secondary column */}
    </aside>
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
