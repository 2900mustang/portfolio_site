import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './screens/NavBar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './screens/Footer'

const App = () => {
  return (
    <>
     <NavBar /> 
     <Switch>
       <Route exact path='/'>
         <Redirect to='/story' />
       </Route>
       <Route path='/story' render={() => <Profile />} />
       <Route path='/projects' render={() => <Projects />} />
       <Route path='/contact' render={() => <Contact />} />
     </Switch>
     <Footer />
    </>
  )
}

export default App
