import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("purple")
  const click = color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  return (
    <div className='heading'>
      <h1><span style={{color:'orange'}}>Background</span> <span style={{color:'blue'}}>Color</span> <span style={{color:'#39FF14'}}>Change</span></h1>
     <div className=' button'>
        <button onClick={()=>click("purple")} style={{marginRight:'20px',backgroundColor:'purple',borderRadius:'12px',width:'100px',height:'40px',color:'white'}}>Purple</button>
        <button onClick={()=>click("green")} style={{marginRight:'20px',backgroundColor:'green',borderRadius:'12px',width:'100px',height:'40px',color:'white'}}>Green</button>
        <button onClick={()=>click("maroon")} style={{marginRight:'20px',backgroundColor:'maroon',borderRadius:'12px',width:'100px',height:'40px',color:'white'}}>Maroon</button>
        <button onClick={()=>click("pink")} style={{marginRight:'20px',backgroundColor:'pink',borderRadius:'12px',width:'100px',height:'40px',color:'white'}}>Pink</button>
        <button onClick={()=>click("red")} style={{marginRight:'20px',backgroundColor:'red',borderRadius:'12px',width:'100px',height:'40px',color:'white'}}>Red</button>
     </div>
    </div>
  );
}

export default App;
