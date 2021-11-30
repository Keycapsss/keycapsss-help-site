import React from 'react'
import PropTypes from 'prop-types'

const Iframe = ({ src, width, height }) => (
  <iframe src={src} width={width} height={height} scrolling="no"></iframe>
)

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Iframe
