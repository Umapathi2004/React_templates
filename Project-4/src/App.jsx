import React, { useReducer } from 'react'

const App = () => {
  const Initials = {
    profile:true,
    application:null,
    saved:null
  }
  const Manage =(value,name)=>{
      if(name.value=="profile")
        return {profile:true,application:null,saved:null}
      if(name.value=="application")
        return {profile:null,application:true,savmed:null}
      if(name.value=="saved")
        return {profile:null,application:null,saved:true}
    }
  
 
  const[clicked,SetCliked] = useReducer(Manage,Initials);
  const Change = (e) =>{
    var name = e.target.attributes.name;
    SetCliked(name);
  }
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
        <div name="profile" className={`menu ${clicked.profile && "clicked"}`} onClick={(e)=>Change(e)}>Profile</div>
        <div name="application" className={`menu ${clicked.application && "clicked"}`} onClick={(e)=>Change(e)}>Applications</div>
        <div name="saved" className={`menu ${clicked.saved && "clicked"}`} onClick={(e)=>Change(e)}>Save Jobs</div>
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