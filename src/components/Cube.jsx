import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const Cube = (props) => {
    const cubeRef = useRef();
    const [isHover, setIsHover] = useState(false)
    const {scene} = useGLTF('/models/cube.glb');
    useEffect(() => {
		scene.traverse((child) => {
			if (child.isMesh) {
				child.material = new THREE.MeshPhongMaterial({ color: "lightBlue" }); // or customize it
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
	}, [scene]);
    useGSAP(()=>{
        gsap.timeline({
            repeat: -1,
            repeatDelay: .5,
        }).to(cubeRef.current.rotation, {
            y: isHover ? '+=2': `+=${Math.PI * 2}`,
            x: isHover ? '+=2': `+=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
                each: .15,
            },
        })
    }, [isHover])
  return (
    <group 
        ref={cubeRef}
        {...props} 
        onPointerEnter={()=> setIsHover(true)} 
        onPointerLeave={()=> setIsHover(false)} 
    >
        <primitive object={scene}  />
    </group>
  )
}

export default Cube