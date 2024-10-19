import React, { useRef, useState } from 'react' 

const Toaster = () => {
 const [Toasters,SetToasters]=useState([]) 
 const ToasterRef = useRef({});

 const opentoaster = (type,message) =>{
    const id = new Date().getTime()
    const NewToaster = ([...Toasters,{id:id,type:type,message:message}])
    SetToasters(NewToaster)  
    ToasterRef.current[id] = setTimeout(()=>closetoaster(id),5000)
 } 
 const closetoaster = (id) =>{ 
    SetToasters((currentToasters)=>{
        const result = currentToasters.filter(toaster=>toaster.id!=id)
        return result
    })
    clearTimeout(ToasterRef.current[id]);
    delete ToasterRef.current[id];

 }
  return (
    <div className="container" >
        <div className="toaster_container">
            {  Toasters.map((toaster)=>(
                    <div className={`toaster ${toaster.type}`} key={toaster.id}>{toaster.message}
                        <span onClick={()=>closetoaster(toaster.id)}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                )) 
            }
            {/* <div className="toaster">This is sample toaster <span><i class="fa-solid fa-xmark"></i></span></div> */}
        </div>
        <div className="buttons_container">
            <button onClick={()=>opentoaster("success","This is Success.")} className='success'>Success</button>
            <button onClick={()=>opentoaster("alert","This is Alert!")} className='alert'>Alert</button>
            <button onClick={()=>opentoaster("warning","This is Warning!")} className='warning'>Warning</button>
            <button onClick={()=>opentoaster("info","This is Info.")} className='info'>Info</button> 
        </div>
    </div>
  )
}

export default Toaster