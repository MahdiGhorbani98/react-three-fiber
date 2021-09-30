// import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React,{Suspense } from 'react'
import Light from './Light'
import Wine from '../WhiteWine/Wine.jsx'
// import Model_Cola_Bottle from './BottleCola'


export default function BottleModel() {

    const canvas = 
    <Canvas className="cam"  style={{width:'400px'}} colorManagement shadows camera={{position:[0, 0, -3.7],fov:40}}>
    <Light/>
    <Suspense fallback={null}>
        <Wine  />
    </Suspense>
    </Canvas>

    // console.log(canvas);

    return (
        
        <div className="bottleModel">
            {canvas}

        </div>
    )
}
