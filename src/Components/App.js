import '../Css/App.css';
// import Three from './Three';
// import React_Three_Fiber from './React_Three_Fiber';
// import Model_Tex_Norm_Minecraft from './MineCraft/Model_Tex_Norm';
import Bottle from './Bottle/BottleModel' 
import React from 'react'
import Lorem from './WhiteWine/Lorem';
import { gsap } from "gsap";

function App() {
  
  return (
    <div className="App">
      <Bottle/>
      <div className="startBottle">
      <Lorem classes={'s1'} />
      <Lorem classes={'s2'} />
      <Lorem classes={'s3'} />  
      <Lorem classes={'s4'} />  
      <Lorem classes={'s5'} />  
      </div>
    </div>
  );
}

export default App;
