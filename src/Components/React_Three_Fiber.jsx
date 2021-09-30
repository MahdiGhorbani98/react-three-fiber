import React, {useEffect,useState , useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { softShadows , MeshWobbleMaterial, OrbitControls , Stars } from '@react-three/drei';
import {useSpring , a} from '@react-spring/three'

softShadows();

const SpinnigMesh = ({pos , args , color , speed=2})=>{

    console.log("useFrame");
    const mesh = useRef(null);
    useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false)
    const props = useSpring({
        scale : expand? [1.4,1.4,1.4] : [1,1,1]
    })


    return(
        <a.mesh onClick={()=> setExpand(!expand) } scale={props.scale} castShadow position={pos} ref={mesh}>
        <boxBufferGeometry  attach='geometry' args={args} />
        <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />
        </a.mesh>
    )
}

export default function React_Three_Fiber() {
    return (
        <>

            <Canvas
                
                shadows colorManagement camera={{position:[-5,2,10], fov:60}}>
                <color attach="background" args={'#003'} />
                <Stars/>
                <ambientLight intensity={0.3} />
                <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                />

                <pointLight position={[-10, 0 , -20]} intensity={0.5} />
                <pointLight position={[0, -10 , 0]} intensity={1.5} />

                <group>
                    <mesh rotation={[-Math.PI /2 , 0 ,0]} position={[0 , -3 , 0]} receiveShadow >
                        <planeBufferGeometry attach='geometry' args={[100,100]}/>
                        <shadowMaterial attach='material' opacity={0.3}  />
                        <meshStandardMaterial attach='material' color='cyan'/>

                    </mesh>
                    <SpinnigMesh pos={[0,1,0]} args={[3,2,1]} color='lightblue' />
                    <SpinnigMesh pos={[-2,1,-5]} args={[1,1,1]} color='pink' speed={5} />
                    <SpinnigMesh pos={[5,1,-2]} args={[1,1,1]} color='pink' speed={5} />
                </group>

                <OrbitControls/>
            </Canvas>
        </>
    )
}


{/* <Box>
<circleBufferGeometry attach='geometry' args={[2,500]} />
<meshStandardMaterial attach='material' /> 
</Box> */}