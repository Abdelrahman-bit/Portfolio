const Footer = () => {
	return (
		<footer className='c-space p-10 mt-20 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
			<div className='text-white-500 flex gap-2'>
				<p>Terms & Conditions</p>
				<p>|</p>
				<p>Privacy Policy</p>
			</div>

			<div className='flex gap-3'>
				<a href='https://github.com/Abdelrahman-bit' target='_blank'>
					<div className='social-icon'>
						<img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2' />
					</div>
				</a>
				<a href='www.linkedin.com/in/abdelrahman-mohamed-soliman-705b7a20b' target='_blank'>
					<div className='social-icon'>
						<img
							src='https://img.icons8.com/?size=100&id=447&format=png&color=ffffff'
							alt='linkedin'
							className='w-1/2 h-1/2 text-white'
						/>
					</div>
				</a>
				<a href='' target='_blank'>
					<div className='social-icon'>
						<img
							src='https://img.icons8.com/?size=100&id=44091&format=png&color=ffffff'
							alt='resume'
							className='w-1/2 h-1/2'
						/>
					</div>
				</a>
			</div>

			<p className='text-white-500'>© 2025 Abdelrahman mohamed. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
