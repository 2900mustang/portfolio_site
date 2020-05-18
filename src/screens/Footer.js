import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import '../styles/footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>&copy; 2020 - Chao Lai</p>
      <div className='social-icons'>
        <a href='https://twitter.com/LaiNitgo/' target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href='https://github.com/2900mustang/' target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/chao-lai-2900/' target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>Made with <LocalCafeIcon /> from NYC</p>
    </div>
  )
}

export default Footer