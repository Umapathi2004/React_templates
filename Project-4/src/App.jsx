import React, { useEffect, useState } from 'react'

const App = () => {
  const[clickPro,SetClickpro] = useState(false);
  const[clickAp,SetClickap] = useState(false);
  const[clickSa,SetClickSa] = useState(false);
  const clickProfile = () =>{
    SetClickap(false);
    SetClickSa(false);
    SetClickpro(true);
  }
  const clickApp = () =>{
    SetClickap(true);
    SetClickSa(false);
    SetClickpro(false);
  }
  const clickSave = () =>{
    SetClickap(false);
    SetClickSa(true);
    SetClickpro(false);
  }
  useEffect(()=>{
    clickApp();
  },[])
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
    <div className="conatiner_three">
      <div className="menus">
        <div className={`menu ${clickPro && "clicked"}`} onClick={()=>clickProfile()}>Profile</div>
        <div className={`menu ${clickAp && "clicked"}`} onClick={()=>clickApp()}>Applications</div>
        <div className={`menu ${clickSa && "clicked"}`} onClick={()=>clickSave()}>Save Jobs</div>
      </div>
      <div className="main_content">
        <div className="detials">
          <div className="time">Full time</div>
          <div className="role">Web Developers</div>
          <div className="location">Tamil Nadu, Tamil Nadu</div>
          <div className="expreiance">0-1year</div>
          <div className="discrption">Develop new components based on design specs. Work independently and write maintainable code. Understand existing code and suggest optimization in ter...</div>
        </div>
        <div className="status">
          <div className="app_status">Screening</div>
          <div className="app_date"><span className='small'>Applied on</span><span>17/07/2024</span></div>
        </div>
      </div>
    </div>
    <footer>
      <div className="powered">Powered By</div>
      <div className="footer_logo"></div>
    </footer>
    </>
  )
}

export default App