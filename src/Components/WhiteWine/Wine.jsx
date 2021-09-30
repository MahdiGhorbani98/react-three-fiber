import {useEffect} from 'react'
import { TimelineMax } from 'gsap'
import * as ScrollMagic from "scrollmagic"; 
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { gsap } from "gsap/dist/gsap";
import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';




export default function Wine(props) {
  gsap.registerPlugin(ScrollTrigger)





  // useEffect(() => {
  //   const tl = new TimelineMax();
  //   TimelineMax.defaultOverwrite = false
   
  //   gsap.to(rotateGSAP.current.rotation , 
  //     {
  //       y:40,
  //       duration:400,
  //       // ease:'Power3.easeInOut',
  //       scrollTrigger:{
  //         trigger: '.s1',
  //         markers:true
  //       }
  //     }
  //   );

  // })
  useEffect(() => {
    console.log("use");
    ScrollMagicPluginGsap(ScrollMagic, gsap);
    const tl = new TimelineMax();
    TimelineMax.defaultOverwrite = false
    var controller = new ScrollMagic.Controller({ refreshInterval: 1 });
    
    tl.to(rotateGSAP.current.rotation , 

      {
        y:40,
        duration:400,
        // ease:'Power3.easeInOut'
      }
    );

    const scene = new ScrollMagic.Scene({
      triggerElement: ".startBottle",
      triggerHook: "onLeave",
      duration: 5930,
      scrub:false
    })
    .setTween(tl)
    .addTo(controller)
    .reverse(true)
    .scr



  })
  

  const mesh = useRef(null);
  const group = useRef()
  const rotateGSAP = useRef()
  const { nodes, materials } = useGLTF('../../../../wine.glb')


  
  return(
    <group rotation={[0,0,0]} scale={1.2,1.2,1.2} ref={group} {...props} dispose={null}>
        <group ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
          <group ref={rotateGSAP} rotation={[Math.PI / 2, 0 ,0.26]}>
            <mesh geometry={nodes.defaultMaterial.geometry} material={materials.bottle} />
            <mesh rotation={[0,15,0]} geometry={nodes.defaultMaterial_1.geometry} material={materials.wrap} />
          </group>
        </group>
    </group>
  )
}

useGLTF.preload('../../../../wine.glb')



  // useFrame (()=>{ (mesh.current.rotation.z += value/1000)});
  // useEffect(() => 
  // {
  //   window.addEventListener('scroll', function()
  //   {
    
  //   }, true)  
  // })
  // useEffect(() => {
  //   if(startRotate){
  //     console.log("startRotate");
  //     console.log(value);
  //   }
  // }, [startRotate])
  // const yourFunction = () => {
  //   for (let i = 0; i < 100; i++) {
  //     setValue(pre=>pre+1)
  //   }
  //   for (let i = value; i < 0; i--) {
  //     setValue(pre=>pre-1)
  //   }
  //   console.log(value);
  // }