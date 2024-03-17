import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Job } from '../types/Job'
import Title from './Title'

interface DataProps {
  allStrapiJob: {
    nodes: Job[]
  }
}

const Jobs = () => {
  const data = useStaticQuery<DataProps>(graphql`
    {
      allStrapiJob(sort: { createdAt: DESC }) {
        nodes {
          strapi_id
          company
          date
          position
          subtitle
          desc {
            id
            name
          }
        }
      }
    }
  `)

  const [currentIndex, setCurrentIndex] = useState(0)

  const jobs = data.allStrapiJob.nodes

  const { company, position, date, subtitle, desc } = jobs[currentIndex]

  function handleButtonClick(index: number) {
    setCurrentIndex(index)
  }

  return (
    <section className='section jobs'>
      <Title title='experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <button
              key={job.strapi_id}
              onClick={() => handleButtonClick(index)}
              className={`job-btn ${index === currentIndex && 'active-btn'}`}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          <p>{subtitle}</p>
          {desc.map(item => (
            <div key={item.id} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to='/about' className='btn center-btn'>
        more info
      </Link>
    </section>
  )
}

export default Jobs
