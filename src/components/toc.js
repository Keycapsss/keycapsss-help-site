import React from 'react'
import { Link } from 'gatsby'

const Toc = ({ headings }) => (
  <div id="toc" className="hidden w-48 mr-8 prose lg:block xl:w-60 xl:prose-lg">
    <div className="sticky top-0 bottom-0 md:top-20">
      <div className="max-h-screen overflow-y-auto">
        <div id="toc-content" className="mb-10 overflow-y-auto content">
          {/* <h3 className="mb-3">TOC</h3> */}
          <ul>
            {headings.map(heading => {
              if (heading.depth > 4) {
                return
              }

              return (
                <li key={heading.value}>
                  <Link
                    to={`#${heading.value.replace(/\s+/g, '-').toLowerCase()}`}>
                    {heading.value}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Toc
