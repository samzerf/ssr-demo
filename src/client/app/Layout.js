import React from 'react'
import { Link } from 'react-router-dom'

export default ({ children }) => {
  return (
    <div>
      <Link to="/index">首页</Link>
      <Link to="/list">列表页</Link>
      <div>{children}</div>
    </div>
  )
}
