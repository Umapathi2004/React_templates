import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [Datas,SetDatas] = useState([])
  const [postPerpage,SetpostPerpage] = useState(10)
  const [CurrentPage,SetCurrentPage] = useState(1)
  const GetData = async() =>{
    try {
       await axios.get("https://jsonplaceholder.typicode.com/posts").then((Datas)=>{
        SetDatas(Datas.data)
       })
    } catch (error) {
      console.log(error)
    }
  }
  const ChangeCurrentPage = (CurrentPage) =>{
    SetCurrentPage(CurrentPage);  
  }
  const LastIndex = CurrentPage * postPerpage;
  const FirstIndex = LastIndex - postPerpage;
  const currentPost = Datas.slice(FirstIndex,LastIndex); 

  useEffect(()=>{
    GetData();
  },[])
  
  const totalPage = Datas.length/postPerpage; 
  
  return (
    <div className="container">
      <div className="pages">
        {
          currentPost.map((data)=>(
            <li key={data.id}>{`${data.id} - ${data.title}`}</li>
          ))
        }
      </div>
      <div className="buttons_container">
        <button onClick={()=>ChangeCurrentPage(1)}>First</button>
        <button disabled={CurrentPage==1} onClick={()=>ChangeCurrentPage(CurrentPage-1)}>Previous</button>
       
       {new Array(totalPage).fill(0).map((_,index)=>{
        return <button disabled={(index+1)==CurrentPage} onClick={()=>ChangeCurrentPage(index+1)} key={index+1}>{index+1}</button>
       })}

        <button disabled={CurrentPage==totalPage} onClick={()=>ChangeCurrentPage(CurrentPage+1)}>Next</button>
        <button onClick={()=>ChangeCurrentPage(totalPage)}>Last</button>
      </div>
    </div>
  )
}

export default App