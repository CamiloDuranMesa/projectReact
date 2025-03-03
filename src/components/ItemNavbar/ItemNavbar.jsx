import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({content, className, route}) => {
  return (
    <li className={className}>
        <NavLink to={route}>{content}</NavLink>
    </li>
  )
}
