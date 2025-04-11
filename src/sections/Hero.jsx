import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ComputerModle from "../components/ComputerModle";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/data";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
	// const c = useControls( 'HackerRoom', {
	//     positionX:{
	//         value: 2.5,
	//         min: -10,
	//         max: 10
	//     },
	//     positionY:{
	//         value: 2.5,
	//         min: -10,
	//         max: 10
	//     },
	//     positionZ:{
	//         value: 2.5,
	//         min: -10,
	//         max: 10
	//     },
	//     rotaionX:{
	//         value: 0,
	//         min: -10,
	//         max: 10
	//     },
	//     rotaionY:{
	//         value: 0,
	//         min: -10,
	//         max: 10
	//     },
	//     rotaionZ:{
	//         value: 0,
	//         min: -10,
	//         max: 10
	//     },
	//     scale:{
	//         value: 1,
	//         min: .1,
	//         max: 10
	//     }
	// })
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });
	const sizes = calculateSizes(isSmall, isMobile, isTablet);
	return (
		<section id='home' className='min-h-screen w-full flex flex-col relative'>
			<div className='mx-auto flex flex-col mt-20 c-space gap-3 '>
				<p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans z-10'>
					Hi, I am Abderahman <span className='waving-hand'>👋</span>
				</p>
				<p className='text-gray_gradient hero_tag z-10'> Fullstack Web Developer </p>
			</div>
			<div className='w-full h-full absolute inset-0'>
				{/* <Leva /> */}
				<Canvas className='w-full h-full'>
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<ComputerModle
								scale={sizes.deskScale}
								position={sizes.deskPosition}
								rotation={[0.2, -Math.PI, 0]}
								// position={[c.positionX, c.positionY, c.positionZ]}
								// rotation = {[c.rotaionX, c.rotaionY, c.rotaionZ]}
								// scale={c.scale}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} scale={1.7} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
							<Rings position={sizes.ringPosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
				<a href='#about' className='w-fit'>
					<Button name="let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96 ' />
				</a>
			</div>
		</section>
	);
};

export default Hero;
