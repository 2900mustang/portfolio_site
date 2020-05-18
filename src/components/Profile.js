import React from 'react'
import '../styles/profile.scss'

const Profile = () => {
  return (
    <>
      <div className='banner'>
        <img src='https://i.imgur.com/5nm1AGq.png' alt='sea' />
        <div className='title'>
          <h1>Chao Lai</h1>
          <h3>Fullstack Engineer</h3>
        </div>
      </div>
      <div className='story'>
        <div className='story-description'>
          <h3>story of a self-taught programmer<span>.</span></h3>
          <p>
            Fellow of Adobe Digital Academy. Recent grad of a bootcamp sponsored by Adobe. Graduated from Baruch College with a worthless degree in Marketing. Decided to give up all and learn code. Partly inspired by the documentary AlphaGo. Future blockchain developer. For now I want a taste of the regular tech industry. Currently seeking a full-time role as a Software Engineer in fullstack, frontend, or backend.
          </p>
          <p>
            Proficient: JavaScript (ES6, Typescript), Python (Flask, Django), Ruby (Rails), Node.js, MongoDB, Express, React, React-Router, React-Redux, Redux, Sequelize, PostgreSQL, HTML5, CSS, SASS, SQL, Git, Agile
          </p>
        </div>
        <div className='whiteboarding'>
          <img src='https://i.imgur.com/atArEUU.jpg' alt='whiteboarding' />
        </div>
      </div>
      <div className='random'>
        <div className='random-description'>
          <h3>Random Collections</h3>
          <p>"Every day, once a day, give yourself a present. Don't plan it. Don't wait for it. Just let it happen. It could be a new shirt at the men's store, a catnap in your office chair, or two cups of good, hot black coffee."</p>
          <p>"No one has the right to judge you. Not even you yourself."</p>
        </div>
        <div className='random-gallery'>
          <img src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-dennis-brown-afro-newspapergado.jpg' alt='random' />
          <img src='https://dl9fvu4r30qs1.cloudfront.net/a0/e382f02a5f11e197b6123138165f92/file/Bob_Marley,_Legend.jpg' alt='random' />
          <img src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/01/27/150442-01-02-1580112629.jpg?itok=K4Oie1Gz' alt='random' />
          <img src='https://thumbs-prod.si-cdn.com/spc2ebuvqgsT4vzBjGTEtFgmwW4=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/62/b1/62b172b6-a443-4ef3-a88b-73f20977f3ae/dyhrb2.jpg' alt='random' />
          <img src='https://www.europenowjournal.org/wp-content/uploads/2017/05/franz-819x1024.jpg' alt='random' />
          <img src='https://static.jojowiki.com/images/6/62/Sandman02.jpg' alt='random' />
        </div>
      </div>
    </>
  )
}

export default Profile
