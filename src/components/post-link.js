import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ page }) => (
  <div>
    <Link to={page.path}>{page.path}</Link>
  </div>
)

export default PostLink
