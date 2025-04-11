import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useRef } from 'react'

const Target = (props) => {
    const targetRef = useRef()
    const {scene} = useGLTF('/models/target.gltf');
    useGSAP(()=>{
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + .5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 3, 0]} >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Target