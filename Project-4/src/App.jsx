import React from 'react'

const App = () => {
  return (
    <>
    <div className="container_one">
      <nav>
        <div className="logo"><img src="zoho.png" alt="" /></div>
        <div className="btn-pro">
          <button>jobs</button>
          <div className="profile"><img src="avatar.png" alt="" /></div>
        </div>
      </nav>
    </div>
    <div className="container_two">
      <div className="left">
         <div className="avatar">
            <div className="change"><i class="fa-solid fa-camera"></i></div>
         </div>
         <div className="name_mail">
            <div className="name">Mr. Umapathi S</div>
            <div className="mail">umapathi1014@gmail.com</div>
         </div>
      </div>
      <div className="right">
         <div className="edit"><i class="fa-solid fa-pen"></i></div>
      </div>
    </div>
    </>
  )
}

export default App