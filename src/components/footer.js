import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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
          <Link to="https://github.com/keycapsss/" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faGithubSquare}
            />
          </Link>
          <Link to="https://kycs.store/youtube" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faYoutubeSquare}
            />
          </Link>
          <Link
            to="https://www.instagram.com/keycapsss_com/"
            className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faInstagramSquare}
            />
          </Link>
          <Link to="https://twitter.com/keycapsss" className="w-6 mx-1">
            <FontAwesomeIcon
              className="text-3xl text-gray-500 cursor-pointer fill-current hover:text-gray-400"
              icon={faTwitterSquare}
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
