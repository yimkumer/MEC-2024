import React from 'react';

const Photos = () => {
	return (
		<section id='gallery'>
			{/* Photo collage starting */}
			<div className='row g-0'>
				<div className='col-lg-6 col-sm-2 col-12'>
					<div className='gallery-box-layout1 has-animation'>
						<img
							loading='lazy'
							decoding='async'
							width='1920'
							height='100'
							src='assets/building.jpg'
							className='attachment-full size-full'
							alt='-'
							srcSet='assets/building.jpg 1920w, assets/building.jpg 600w, assets/building.jpg 1024w, assets/building.jpg 768w, assets/building.jpg 1536w'
							sizes='(max-width: 1920px) 100vw, 1920px'
						/>{' '}
					</div>
				</div>
				<div className='col-lg-3 col-sm-12 col-12'>
					<div className='gallery-box-layout1 has-animation'>
						<img
							loading='lazy'
							decoding='async'
							width='960'
							height='900'
							src='assets/grad.jpg'
							className='attachment-full size-full'
							alt='-'
							srcSet='assets/grad.jpg 960w, assets/grad.jpg 600w, assets/grad.jpg 768w'
							sizes='(max-width: 960px) 100vw, 960px'
						/>{' '}
					</div>
				</div>
				<div className='col-lg-3 col-sm-12 col-12'>
					<div className='gallery-box-layout1 has-animation'>
						<img
							loading='lazy'
							decoding='async'
							width='960'
							height='900'
							src='assets/class.jpeg'
							className='attachment-full size-full'
							alt='-'
							srcSet='assets/class.jpeg 960w, assets/class.jpeg 600w, assets/class.jpeg 768w'
							sizes='(max-width: 960px) 100vw, 960px'
						/>{' '}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Photos;
