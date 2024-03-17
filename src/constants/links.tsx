import { Link } from 'gatsby'
import React from 'react'

const data = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about/',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects/',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact/',
  },
]

const tempLinks = data.map(link => (
  <li key={link.id}>
    <Link to={link.url}>{link.text}</Link>
  </li>
))

export default ({ styleClass }: { styleClass?: string }) => (
  <ul className={`page-links ${styleClass ? styleClass : ''}`}>{tempLinks}</ul>
)