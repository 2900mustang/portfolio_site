import React from 'react'
import resume from '../images/resume.jpg'
import EmailIcon from '@material-ui/icons/Email';
import '../styles/contact.scss'

const Contact = () => {
  return (
    <div className='contact_container'>
      <div className='resume_box'>
        <img src={resume} alt='resume' /> 
      </div> 
      <div className='email_box'>
        <h3>Shoot Me an Email</h3>
        <a href='mailto:deepocean.2900@gmail.com' target="_blank" rel="noopener noreferrer">
          <EmailIcon className='email_icon' />
        </a>
      </div>
    </div>
  )
}

export default Contact
