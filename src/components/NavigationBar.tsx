import '../stylesheets/navigation-bar.css'
import '../stylesheets/main.css'

import { Outlet, Link } from 'react-router-dom'

//import profilepic from '/profilepics/suitoncouch.png';

export default function NavigationBar() {
  const profilepic = process.env.PUBLIC_URL + '/profilepics/djingjoes.png'
  const settingsIcon = process.env.PUBLIC_URL + '/icons/settings.svg'; 

  return (
    <nav className="navigation-bar">
      <div>
        <Link to={'/'} >
          <h1>Matt Marsico</h1>
        </Link>
      </div>

      <div>
        <h3>Portfolio Website</h3>
      </div>

      <ul>
        <Link to={`/blog`}><li>Blog</li></Link>
        <Link to={`/professional`}><li>Professional</li></Link>
        <Link to={`/photos`}><li>Photo Dump</li></Link>
        <Link to={`/about`}><li>About</li></Link>
      </ul>

      <div className='settings'>
        <Link to={'/settings'}>
          <img src={settingsIcon} />        
        </Link>
      </div>

      <div>
        <img src={profilepic} alt='profile picture' />
      </div>
    </nav>
  )
}
