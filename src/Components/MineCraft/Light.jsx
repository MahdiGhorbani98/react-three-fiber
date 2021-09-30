import React from 'react'


export default function Light() {
    return (
        <>
            <fog attach="fog" args={['#fff', 0 , 33]}  />

            <ambientLight intensity={0.9}/>
            <directionalLight
            castShadow
            position={[-8,16,-8]}
            intensity={0.3}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-mapSize-far={50}
            shadow-mapSize-top={10}
            shadow-mapSize-right={10}
            shadow-mapSize-left={-10}
            shadow-mapSize-bottom={-10}


            />

            <pointLight position={[0,50,0]} intensity={2}/>
            <pointLight position={[30,0,0]} intensity={2}/>
            <pointLight position={[0,0,30]} intensity={2}/>
            <pointLight position={[0,0,0]} intensity={2}/>
            <pointLight position={[5,5,5]} intensity={2}/>
            {/* <pointLight position={[40,0,0]} intensity={1}/>
            <pointLight position={[0,0,50]} intensity={1}/> */}
        </>
    )
}
