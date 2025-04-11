import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef } from 'react'

const ReactLogo = (props) => {
    const reactRef = useRef();
    const {scene} = useGLTF('/models/react.glb');
    useGSAP(()=>{
        gsap.to(reactRef.current.position, {
            y: reactRef.current.position.y + .5,
            x: reactRef.current.position.x + 1,
            duration: 1.7,
            repeat: -1,
            yoyo: true
        });
    })
  return (
    <mesh ref={reactRef} {...props} rotation={[0, Math.PI / -4, 0]} scale={.5} >
        <primitive object={scene} />
    </mesh>
  )
}

export default ReactLogo