import { useState } from "react";
import { myProjects } from "../constants/data";

const Projects = () => {
	const projectCount = myProjects.length;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const currentProject = myProjects[selectedIndex];
	const handleNavigation = (direction) => {
		setSelectedIndex((prev) => {
			if (direction === "previous") {
				return prev === 0 ? projectCount - 1 : prev - 1;
			} else {
				return prev === projectCount - 1 ? 0 : prev + 1;
			}
		});
	};
	return (
		<section id='work' className='c-sapce my-20 mx-10'>
			<p className='head-text'> My Work </p>
			<div className='flex items-center justify-center lg:px-40 md:px-30 '>
				<div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 '>
					<div className='absolute top-0 right-0'>
						<img src={currentProject.spotlight} alt='spolitght' className='w-full h-96 object-cover rounded-xl' />
					</div>
					<div className='p-3 backdrop-filter backdrop-blure-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
						<img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' />
					</div>
					<div className='flex flex-col gap-5 text-white-600 my-5'>
						<p className='text-whhite text-2xl font-semibold animatedText'> {currentProject.title} </p>
						<p className='animatedText'> {currentProject.desc} </p>
						<p className='animatedText'> {currentProject.subdesc} </p>
					</div>

					<div className='flex items-center justify-between flex-wrap gap-5 relative'>
						<div className='flex items-center gap-3'>
							{currentProject.tags.map((tag, index) => (
								<div key={index} className='tech-logo'>
									<img src={tag.path} alt={tag.name} />
								</div>
							))}
						</div>
						<a
							href={currentProject.href}
							className='flex items-center gap-2 cursor-pointer text-white-600'
							target='_blank'
							rel='noreferrer'
						>
							<p>Check live Site</p>
							<img src='/assets/arrow-up.png' alt='arrow' className='w-3 h-3' />
						</a>
					</div>
					<div className='flex justify-between items-center mt-7'>
						<button className='arrow-btn' onClick={() => handleNavigation("previous")}>
							<img src='/assets/left-arrow.png' alt='left arrow' className='w-4 h-4' />
						</button>
						<button className='arrow-btn' onClick={() => handleNavigation("next")}>
							<img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4' />
						</button>
					</div>
					<div className=' flex absolute bottom-5 right-[36%] md:right-[47%] space-x-2'>
						{myProjects.map((_, i) => (
							<div
								key={i}
								className={`w-3 h-3 ${selectedIndex === i ? "bg-white" : "bg-gray-400"} rounded-full`}
							></div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
