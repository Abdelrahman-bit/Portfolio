export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Emily Johnson",
		position: "Upwork Client",
		img: "assets/review1.png",
		review: "Working with Abdelrahman was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Mark Rogers",
		position: "local",
		img: "assets/review2.png",
		review: "Abdelrahman’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "John Dohsas",
		position: "Upwork client ",
		img: "assets/review3.png",
		review: "I can’t say enough good things about Abdelrahman. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Ether Smith",
		position: "Freelancer Clinet",
		img: "assets/review4.png",
		review: "Abdelrahman was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

export const myProjects = [
	{
		title: "Issue tracker application",
		desc: "Helps you tracking issues and make things doen.",
		subdesc:
			"A clean and minimal issue tracking app built with Next.js 15, Tailwind CSS, TypeScript, Prisma, and PostgreSQL. Features include Google/GitHub login, issue creation and assignment, priority/status management, and a responsive dashboard UI.",
		href: "https://issue-tracker-dun-seven.vercel.app/",
		texture: "/textures/project/project3.mp4",
		logo: "/assets/issue-tracker.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "nextjs",
				path: "assets/nextjs-icon.svg",
			},
			{
				id: 3,
				name: "PostgreSQL",
				path: "/assets/postgres.webp",
			},
			{
				id: 4,
				name: "Next auth",
				path: "/assets/next-auth.png",
			},
			{
				id: 5,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 6,
				name: "Prisma",
				path: "assets/prisma.svg",
			},
		],
	},
	{
		title: "Iphone website clone",
		desc: "website clone from one of modern websites out there",
		subdesc:
			"A high-fidelity, animated clone of Apple’s iPhone 15 Pro landing page built with Next.js, Tailwind CSS, Three.js, React Three Fiber, and GSAP. Features smooth 3D interactions, scroll-based animations, and a fully responsive design.",
		href: "https://iphone-clone-rosy.vercel.app/",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/apple-icon.jpg",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "nextjs",
				path: "assets/nextjs-icon.svg",
			},
			{
				id: 3,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 4,
				name: "Three.js",
				path: "assets/threejs.png",
			},
			{
				id: 5,
				name: "gsap",
				path: "assets/gsap.png",
			},
		],
	},
	{
		title: "Fitnes-workout exercises",
		desc: "Showing the most usefull and commone exercises as GIF for the full body, and you can search for spasific muscle group",
		subdesc:
			"Fitness Frind is your ultimate workout companion — explore exercises by muscle group with engaging GIF demos, search specific moves with ease, and power your fitness journey using real-time data from RapidAPI. Built with React, React Router, and Material UI for a smooth, responsive experience. ",
		href: "https://fitnes-frind.netlify.app/",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/muscle.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "Material-Ui",
				path: "assets/material-ui.png",
			},
			{
				id: 3,
				name: "React-router",
				path: "/assets/react-router.svg",
			},
		],
	},
	{
		title: "Coffee-restront showcase",
		desc: "BrewMaster — Elevating Coffee Restaurant Experiences",
		subdesc:
			"BrewMaster is a modern web solution tailored for coffee restaurants, designed to showcase menus, highlight signature brews, manage customer engagement, and streamline operations. From cozy cafés to bustling coffee chains, BrewMaster brings your brand to life with an elegant, responsive interface built to impress.",
		href: "https://coffeesit.netlify.app/",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/coffe.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "Html",
				path: "/assets/html.png",
			},
			{
				id: 2,
				name: "Css",
				path: "assets/css.png",
			},
			{
				id: 3,
				name: "JavaScrip",
				path: "/assets/javascript.png",
			},
		],
	},
	{
		title: "Coding bootCamp",
		desc: "bootCamp — Launch Your Tech Career with Confidence",
		subdesc:
			"bootCamp is a dynamic coding bootcamp platform designed to help aspiring developers build real-world skills through hands-on projects, expert-led courses, and a supportive learning community. Whether you're diving into web development, mastering full-stack frameworks, or preparing for tech interviews, bootCamp empowers you to code your future with purpose.",
		href: "https://bootcampcampny.netlify.app/",
		texture: "/textures/project/project3.mp4",
		logo: "/assets/bootcamp.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "Html",
				path: "/assets/html.png",
			},
			{
				id: 2,
				name: "Css",
				path: "assets/css.png",
			},
			{
				id: 3,
				name: "JavaScrip",
				path: "/assets/javascript.png",
			},
			{
				id: 4,
				name: "bootstrap",
				path: "/assets/bootstrap.png",
			},
		],
	},
	{
		title: "Marketing Landing-page",
		desc: "A sleek and responsive marketing landing page for MacBook Air, built using modern web technologies to provide a seamless user experience.",
		subdesc:
			"Fully responsive design for all devices Modern UI built with Tailwind CSS Fast and optimized using Vite Multi-page navigation using React Router v6 Dedicated pages for: Home (Hero section, product highlights, call-to-action) Features Detailed specifications and unique selling points Contact Us Form for inquiries and supportSmooth scrolling and animations for better UX.",
		href: "https://abdelrahman-bit.github.io/MacBook-landing-page",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/apple-icon.jpg",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "React-router",
				path: "/assets/react-router.svg",
			},
			{
				id: 4,
				name: "Vite",
				path: "/assets/vite.svg",
			},
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -7, 0] : isTablet ? [6, -5, 0] : [9, -5.5, 0],
		reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
		ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
		targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Framer",
		pos: "Lead Web Developer",
		duration: "2022 - Present",
		title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
		icon: "/assets/framer.svg",
		animation: "victory",
	},
	{
		id: 2,
		name: "Figma",
		pos: "Web Developer",
		duration: "2020 - 2022",
		title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
		icon: "/assets/figma.svg",
		animation: "clapping",
	},
	{
		id: 3,
		name: "Notion",
		pos: "Junior Web Developer",
		duration: "2019 - 2020",
		title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
		icon: "/assets/notion.svg",
		animation: "salute",
	},
];
