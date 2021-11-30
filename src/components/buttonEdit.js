import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const EditButton = ({ webLink, branch, relativePath }) => {
  return (
    <div className="my-10 text-right text-gray-500">
      <a
        className="hover:text-gray-900"
        href={`${webLink}/edit/${branch}/${relativePath}`}>
        <FontAwesomeIcon
          className="cursor-pointer hover:text-gray-400"
          icon={faPencilAlt}
        />{' '}
        Edit this page
      </a>
    </div>
  )
}

EditButton.propTypes = {
  webLink: PropTypes.string,
  branch: PropTypes.string,
  relativePath: PropTypes.string,
}

export default EditButton
