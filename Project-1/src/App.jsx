import React from 'react'

export const App = () => {
 const content = ["home","setting","dashboard","mail","cloud","workspace"];
  return (
    <>
    <div className="container">
    <div className="profile"><i class="fa-solid fa-user"></i></div>
    <div className="menus">
        {content.map((menu,index)=>(
            <button key={index} className={''}>
                <i class={`fa-solid fa-${
                 menu=="home"?"house"
                :menu=="setting"?"gear"
                :menu=="dashboard"?"chart-line"
                :menu=="mail"?"envelope"
                :menu=="workspace"?"briefcase"
                :menu
                }`}></i>
                <span>{menu}</span>
            </button>
        ))}
    </div>
    </div>
    </>
  )
}
