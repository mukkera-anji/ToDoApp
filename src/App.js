import {useState,useRef} from 'react'
import {computeHeadingLevel} from '@testing-library/react'
import './index.css'


 export function App() {

  const data=localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')) : []
  const [list,setList]=useState(data)
  const [newtask,setnewTask]=useState("")
  const [search,setSearch]=useState("")


  const addtask=()=>{
    localStorage.setItem('list',JSON.stringify([...list,newtask]))
     setList([...list,newtask]);
setnewTask(" ")
    
    // console.log(setnewTask);
  }
const updateTask=(e,i)=>{
  const uptask=[...list];
  uptask.splice(i,1,e.target.value)
  setList(uptask)
  localStorage.setItem('list',JSON.stringify(uptask))

}
const deleteTask=(i)=>{
const deletelist=[...list];
deletelist.splice(i,1)
setList(deletelist)
localStorage.setItem('list',JSON.stringify(deletelist))

}
const keyEnter=(e)=>{
 
  if(e.key==="Enter"){
    addtask()

  }
}

 

  return (
   <div className='App'>
    <div className='search'>
      <input type='text' placeholder='search Task🔍' onChange={(e)=>{setSearch( e.target.value)}} ></input>
    </div>
    <h1 className='heading'>To-Do  App💀</h1>
<div className='inputs'>
  <input type='text' onChange={(e)=>{setnewTask(e.target.value)}}  onKeyDown={keyEnter}  />
  <button className='btn' onClick={addtask} >Add Task👍</button>

 
</div>
<div className='container'>
{
    list.map((val,i)=>{

if(val.toLowerCase().includes(search.toLowerCase() )){
  return(

    <div className='list' key={i}>
    <input type='text' value={val} onChange={(e)=>{updateTask(e)}}/>
    <span className='icon' onClick={()=>{deleteTask(i)}}>❌</span>
    </div>
  )
}
      
     
    })
  }
 
 
</div>
 
</div>
  );
}


