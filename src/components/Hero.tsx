import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import SocialLinks from '../constants/social_links'

const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid
      }
    }
  } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>I'm Breno</h1>
            <h4>Frontend & Mobile Software Engineer</h4>
            <Link to='/contact' className='btn'>
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className='hero-img' />
      </div>
    </header>
  )
}

export default Hero
