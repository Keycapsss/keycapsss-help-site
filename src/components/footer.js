import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer>
    <div className="pt-2">
      <div className="flex flex-col max-w-6xl pt-5 pb-5 m-auto text-sm text-gray-800 border-t md:flex-row">
        <div className="mt-2">{new Date().getFullYear()} KEYCAPSSS</div>
        <div className="flex flex-row mt-1 md:flex-auto md:flex-row-reverse">
          <a href="https://github.com/keycapsss/" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faGithubSquare}
            />
          </a>
          <a href="https://kycs.store/youtube" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faYoutubeSquare}
            />
          </a>
          <a
            href="https://www.instagram.com/keycapsss_com/"
            className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faInstagramSquare}
            />
          </a>
          <a href="https://twitter.com/keycapsss" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faTwitterSquare}
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
