import React from 'react'
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/brenosalv',
  },
  {
    id: 2,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: 'https://www.github.com/Brenosalv',
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare className='social-icon'></FaEnvelopeSquare>,
    url: 'mailto:brenosalvadordefreitas@gmail.com',
  },
]

const links = data.map(link => (
  <li key={link.id}>
    <a href={link.url} className='social-link'>
      {link.icon}
    </a>
  </li>
))

export default ({ styleClass }: { styleClass?: string }) => (
  <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
)
