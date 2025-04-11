import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef } from 'react'

const DemoComputer = (props) => {
    const computerRef = useRef();
    const {scene} =  useGLTF('/models/computer.glb')
    
    useGSAP(()=>{
        gsap.from(computerRef.current.rotation,{
            y: Math.PI /2,
            duration: 1, 
            ease: 'power3.out'
        })
    })
  return (
    <group {...props} ref={computerRef}>
        <primitive object={scene} />
    </group>
  )
}

export default DemoComputer