import React from 'react'

const App = () => {
  return (
   <nav>
    <div className="nav-container">
      <div className="profile"><i className="fa-solid fa-user"></i></div>
      <div className="menus-container">
      <div className="menus">
        <button className="menu">Services  <i className="fa-solid fa-caret-down"></i></button>
        <div className="dropdown">
          <li>UI/UX Design</li>
          <li>We Applications</li>
          <li>SEO Advice</li>
        </div>
      </div>

      <div className="menus">
        <button className="menu">Products <i className="fa-solid fa-caret-down"></i></button>
        <div className="dropdown">
          <li>Learn CSS Blocks</li>
          <li>Secuirty Course</li>
          <li>Masterclass bundle</li>
        </div>
      </div>

      <div className="menus">
        <button className="menu">Support <i className="fa-solid fa-caret-down"></i></button>
        <div className="dropdown">
          <li>Live Chat</li>
          <li>Send Email</li>
          <li>Reguest Help</li>
        </div>
      </div>
      </div>
   </div>
   </nav>
  )
}

export default App