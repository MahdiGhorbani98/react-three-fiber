import React from 'react'

export default function Light() {
    return (
        <>
            <ambientLight intensity={1}/>
            <directionalLight 
            position={[10,0,-10]}
            intensity={0.4}
            />
            <directionalLight 
            intensity={0.4}
            position={[4,10,-4]}  
            // color={'#0f0'}          
            />
            <directionalLight 
            intensity={0.4}
            position={[-10,0,-10]}  
            />

        </>
    )
}
