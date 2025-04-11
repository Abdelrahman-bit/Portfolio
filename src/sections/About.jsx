import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handelCopy = ()=>{
        navigator.clipboard.writeText('abdelrahman.mohamed4030@gmail.com');
        setHasCopied(true);

        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }
	return (
		<section id='about' className='c-space my-20'>
			<div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
				{/* first grid */}
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img src='/assets/grid1.png' alt='developer image' className='w-full sm:h-[276px] h-fit object-contain' />
						<div>
							<p className='grid-headtext'>Hi, I'm Abderahman</p>
							<p className='grid-subtext'>
								with 2 years of experience, I have build my skills in web latest technoloies and framworks with a
								passion of learning new things.
							</p>
							<a href=''>
								<Button name='See My Resume' isBeam containerCalss='mt-5' />
							</a>
						</div>
					</div>
				</div>
				{/* second grid */}
				<div className='col-span-1 xl: row-span-3'>
					<div className='grid-container'>
						<img src='/assets/grid2.png' alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain' />
						<div>
							<p className='grid-headtext'>Tech Stack</p>
							<p className='grid-subtext'>
								I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.
							</p>
						</div>
					</div>
				</div>
				{/* ------------------ */}
				<div className='col-span-1 xl:row-span-4'>
					<div className='grid-container'>
						<div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center '>
							<Globe
								height={326}
								width={326}
								backgroundColor='rgba(0,0,0,0)'
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
								bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
								labelsData={[
									{
										lat: 30,
										lng: 31,
										text: "I'm Here!",
										color: "white",
										size: 0.1,
									},
								]}
							/>
						</div>
						{/* text */}
						<div>
							<p className='grid-headtext'>I work remotely across most timezones.</p>
							<p className='grid-subtext'>I'm based in Cairo, with remote work abailable.</p>
							<a href='#contact'>
								<Button name='Contact Me' isBeam containerCalss='w-full mt-10' />
							</a>
						</div>
					</div>
				</div>
				{/*--------------------------  */}
				<div className='xl:col-span-2 xl:row-span-3'>
					<div className='grid-container'>
						<img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain ' />
						<div>
							<p className='grid-headtext'>My Passion For Coding</p>
							<p className='grid-subtext'>
								I love solving problems and building things through code. Coding isn't just my profession - it is
								my passion
							</p>
						</div>
					</div>
				</div>
				{/* ----------------------- */}
				<div className='xl:col-span-1 xl:row-span-2'>
					<div className='grid-container'>
						<img
							src='/assets/grid4.png'
							alt='grid-4'
							className='w-full md:h-[126px] sm:h-[276px] xl:h-[200px] h-fit object-cover sm:object-top'
						/>
						<div className='space-y-2'>
							<p className='grid-subtext text-center'>Contact me</p>
							<div className=' copy-container ' onClick={handelCopy}>
								<img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt='copy' />
								<p className=' font-medium text-gray_gradient text-white'>abdelrahman.mohamed4030@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
