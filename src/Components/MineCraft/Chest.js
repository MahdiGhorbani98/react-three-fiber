import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useSpring , a} from '@react-spring/three'

//import Audio
import openChestFsx from '../../asset/sounds/open-chest.mp3'
import closeChestFsx from '../../asset/sounds/close-chest.mp3'

//declare Audio
const open_chest = new Audio(openChestFsx)
const close_chest = new Audio(closeChestFsx)

export default function Model({ ...props }) {
  const group = useRef()

  const openCloseAnim= useSpring({
    rotation:props.open?[0,0,0]:[1.6,0,0],
    rotationAll:props.open?[0,-1.5,0]:[0,0,0]
  })

  const handleClick=()=>{
    props.setOpened();
    open_chest.volume= close_chest.volume = 0.3;
    props.open? close_chest.play():
    open_chest.play()
  }

  const { nodes, materials, animations } = useGLTF('../../../../coffre-minecraft.glb')
  return (
    <group onClick={handleClick} ref={group} {...props} dispose={null}>
      {/* Animate whole of chest by <a.group> */}
      <a.group rotation={openCloseAnim.rotationAll} name="Armature" position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <a.primitive rotation={openCloseAnim.rotation} object={nodes.Bone001} />
        <skinnedMesh castShadow geometry={nodes.Cube.geometry} material={materials.Material} skeleton={nodes.Cube.skeleton} />
      </a.group>
    </group>
  )
}

useGLTF.preload('../../../../coffre-minecraft.glb')
