import React, {Suspense , useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import Model from './Chest'
import Light from './Light'
import Floor from './Floor'


export default function Model_Tex_Norm() {

    const [open, setOpen] = useState()
    function setTheOpen(){
        setOpen(!open)
    }

    return(
        <div className="chestModel">
            {/* Add Canvas with props such as "colorManagement" "shadows" "camera" */}
            <Canvas
            colorManagement
            shadows
            camera={{position:[-5,4,4], fov:40}}
            >
            {/* Then Add <Light/> <Model/> <Floor/> <OrbitControls/> in turn */}
            <Light/>
            <Suspense fallback={null}>
                <Model open={open} setOpened={setTheOpen}/>
                <Floor/>
            </Suspense>
            <OrbitControls/>
            </Canvas>
            {/* <Loader> */}
            <Loader/>
        </div>
    )

}
























// import React, {useRef} from 'react'

// // export default function Shoe() {
// //     return (
// //         <div>
            
// //         </div>
// //     )
// // }

// export default function TextInputWithFocusButton() {
//     const ref = useRef(0);

//     function Counter(){
//         ref.current++
//         console.log("your Clicks:" + ref.current);
//     }

//     return(
//         <button onClick={()=>Counter}>Click</button>
//     )

//   }