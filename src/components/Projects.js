import React, { useState } from 'react'
import '../styles/projects.scss'
import bishop1 from '../images/bishop_001.jpg'
import bishop2 from '../images/bishop_002.jpg'
import rook1 from '../images/rook_001.png'
import rook2 from '../images/rook_002.png'
import knight1 from '../images/knight_001.jpg'
import knight2 from '../images/knight_002.jpg'

const Projects = () => {
  const [selected, setSelected] = useState(0)

  const projects = [
    {
      name: 'Recording Umbrella',
      function: "users can let go of vintage items, find them a right owner, before fleeing to a safer country in times of crisis",
      tools: "React, Javascript, HTML, CSS, Node.js, Express, MongoDB",
      img1: bishop1,
      img2: bishop2,
      url: "https://survival-kit-app.netlify.app/"
    },
    {
      name: 'Solid Parakeet',
      function: "bicyclists can share and comment on biking blog posts",
      tools: "React, Javascript, HTML, Sass, Ruby, Rails",
      img1: rook1,
      img2: rook2,
      url: "https://romantic-wescoff-425978.netlify.app/"
    },
    {
      name: 'The Last Museum',
      function: "users can view artworks from the Harvard Museum and add them to collection",
      tools: "React, Javascript, HTML, CSS",
      img1: knight1,
      img2: knight2,
      url: "https://the-last-museum.netlify.com/"
    }
  ]

  const displayProject = () => (
    <>
      <div className='details'>
        <h1>{projects[selected].name}</h1>
        <h2>{projects[selected].function}</h2>
        <p>{projects[selected].tools}</p>
      </div>
      <div className='pixel'>
        <a href={projects[selected].url} target="_blank" rel="noopener noreferrer">
          <img className='proj-left' src={projects[selected].img1} alt='chess' />
        </a>
        <a href={projects[selected].url} target="_blank" rel="noopener noreferrer">
          <img className='proj-right' src={projects[selected].img2} alt='chess' />
        </a>
      </div>
    </>
  )

  return (
    <div className='projects-container'>
      <section className='page'>
        {displayProject()}
      </section>

      <div className="pages">
        <div className="page-1">
          <h3>01</h3>
          <svg
            className={selected === 0 ? "slide active" : "slide"}
            onClick={() => setSelected(0)}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
        <div className="page-2">
          <h3>02</h3>
          <svg
            className={selected === 1 ? "slide active" : "slide"}
            onClick={() => setSelected(1)}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
        <div className="page-3">
          <h3>03</h3>
          <svg
            className={selected === 2 ? "slide active" : "slide"}
            onClick={() => setSelected(2)}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Projects
