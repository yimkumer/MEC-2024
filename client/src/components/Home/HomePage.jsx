import 'bootstrap/dist/css/bootstrap.css';
import { default as React, useEffect, useState } from 'react';
import image from './back.jpeg';
import KeyNoteSpeakers from './KeyNoteSpeakers';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/registration`;
		navigate(path);
	};
	// For Countdown
	useEffect(() => {
		const countdown = () => {
			const countDate = new Date('March 20, 2024 00:00:00').getTime();
			const now = new Date().getTime();
			const gap = countDate - now;

			const second = 1000;
			const minute = second * 60;
			const hour = minute * 60;
			const day = hour * 24;

			const textDay = Math.floor(gap / day)
				.toString()
				.padStart(2, '0');
			const textHour = Math.floor((gap % day) / hour)
				.toString()
				.padStart(2, '0');
			const textminute = Math.floor((gap % hour) / minute)
				.toString()
				.padStart(2, '0');
			const textsecond = Math.floor((gap % minute) / second)
				.toString()
				.padStart(2, '0');

			const dayElement = document.querySelector('.day');
			const hourElement = document.querySelector('.hour');
			const minuteElement = document.querySelector('.minute');
			const secondElement = document.querySelector('.second');

			if (!dayElement || !hourElement || !minuteElement || !secondElement) {
				clearInterval(intervalId);
				return;
			}

			dayElement.innerText = textDay;
			hourElement.innerText = textHour;
			minuteElement.innerText = textminute;
			secondElement.innerText = textsecond;
		};

		const intervalId = setInterval(countdown, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	// For Tracks drop down
	const [openDropdown, setOpenDropdown] = useState(null);

	const handleOpen = (index) => {
		setOpenDropdown(openDropdown === index ? null : index);
	};

	useEffect(() => {
		const copy = document.querySelector('.logos-slide').cloneNode(true);
		document.querySelector('.logos').appendChild(copy);
	}, []);

	return (
		<>
			<div
				data-elementor-type='wp-page'
				data-elementor-id={37}
				className='elementor elementor-37'
			>
				<section
					className='elementor-section elementor-top-section elementor-element elementor-element-bb0eb96 elementor-section-full_width elementor-section-height-default elementor-section-height-default'
					data-id='bb0eb96'
					data-element_type='section'
				>
					<div className='elementor-container elementor-column-gap-no'>
						<div
							className='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-afd4703'
							data-id='afd4703'
							data-element_type='column'
						>
							<div className='elementor-widget-wrap elementor-element-populated'>
								<div
									className='elementor-element elementor-element-5cfe129 elementor-widget elementor-widget-rt-eventbanner1'
									data-id='5cfe129'
									data-element_type='widget'
									data-widget_type='rt-eventbanner1.default'
								>
									<div>
										<div className='custom-navbar'>
											<img width='40px' alt='-' src='assets/head2.png' />
											<div className='links'>
												<a href='#home' className='nav-link'>
													Home
												</a>
												<a href='#about' className='nav-link'>
													About
												</a>
												<a href='#gallery' className='nav-link'>
													Gallery
												</a>
												<a href='#contact' className='nav-link'>
													Contact
												</a>
											</div>
										</div>
										{/*=====================================*/}
										{/*=      Hero Section Area Start      =*/}
										{/*=====================================*/}
										<div
											id='home'
											className='custom-hero-wrap'
											style={{ backgroundImage: `url(${image})` }}
										>
											<div className='custom-hero'>
												<div className='custom-hero-left'>
													<div>
														<h2>International Conference on </h2>
														<h1>
															Management, Technology & Entrepreneurial
															Challenges in Dynamic Business Environment- MTEC
															2024
														</h1>
													</div>

													<button
														onClick={routeChange}
														id='tap'
														className='custom-hero-btn'
													>
														VIEW PAPER SUBMISSION AND ACCEPTANCE DETAILS
													</button>
												</div>
												<div className='custom-hero-right'>
													<div id='c'>
														<h2>BEGINS IN</h2>
														<div id='countdown' className='container-fluid'>
															<div id='d1' className='container-day'>
																<h3 id='day' className='day'>
																	00
																</h3>
																<h5 id='d'>Days</h5>
																<h3 id='d-mobile'>DAYS</h3>
															</div>
															<h1 className='colon'>:</h1>
															<div id='d2' className='container-hour'>
																<h3 id='hour' className='hour'>
																	00
																</h3>
																<h5 id='h'>Hours</h5>
																<h3 id='h-mobile'>HRS</h3>
															</div>
															<h1 className='colon'>:</h1>
															<div id='d3' className='container-minute'>
																<h3 id='minute' className='minute'>
																	00
																</h3>
																<h5 id='m'>Minutes</h5>
																<h3 id='m-mobile'>MIN</h3>
															</div>
															<h1 className='colon'>:</h1>
															<div id='d4' className='container-second'>
																<h3 id='second' className='second'>
																	00
																</h3>
																<h5 id='s'>Seconds</h5>
																<h3 id='s-mobile'>SEC</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className='elementor-element elementor-element-6353059 elementor-widget elementor-widget-rt-countdown'
									data-id={6353059}
									data-element_type='widget'
									data-widget_type='rt-countdown.default'
								></div>
							</div>
						</div>
					</div>
				</section>
				<section
					className='elementor-section elementor-top-section elementor-element elementor-element-cbbd5b0 elementor-section-boxed elementor-section-height-default elementor-section-height-default'
					data-id='cbbd5b0'
					data-element_type='section'
				>
					<div className='elementor-container elementor-column-gap-default'>
						<div
							className='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9607693'
							data-id={9607693}
							data-element_type='column'
						>
							<div className='elementor-widget-wrap elementor-element-populated'>
								<section
									className='elementor-section elementor-inner-section elementor-element elementor-element-7f8373e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default'
									data-id='7f8373e'
									data-element_type='section'
								>
									{/* INTERNATIONAL COLLABORATION UNI LOGOS */}
									<div className='logos'>
										<div className='logos-slide'>
											<a
												href='https://www.acharya.ac.in/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/college.png' />
											</a>
											<a
												href='https://www.budiluhur.ac.id/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/budi.png' />
											</a>
											<a
												href='https://www.duet.edu.ua/en'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/ukraine.jpeg' />
											</a>
											<a
												href='https://www.acharya.uz/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/Acharya Uzbek.png' />
											</a>
											<a
												href='https://vtu.ac.in/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/vtu-logo.png' />
											</a>
											<a
												href='https://students.ieee.org/student-branches/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/ieee.png' />
											</a>
										</div>
										<div className='logos-slide'>
											<a
												href='https://www.acharya.ac.in/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/college.png' />
											</a>
											<a
												href='https://www.budiluhur.ac.id/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/budi.png' />
											</a>
											<a
												href='https://www.duet.edu.ua/en'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/ukraine.jpeg' />
											</a>
											<a
												href='https://www.acharya.uz/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/Acharya Uzbek.png' />
											</a>
											<a
												href='https://vtu.ac.in/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/vtu-logo.png' />
											</a>
											<a
												href='https://students.ieee.org/student-branches/'
												target='_blank'
												rel='noreferrer'
											>
												<img alt='-' src='assets/ieee.png' />
											</a>
										</div>
									</div>
									<div
										id='info2'
										className='container-fluid text-center font-weight-heavy'
									>
										International Conference on Management, Technology &
										Entrepreneurial Challenges in Dynamic Business Environment-
										MTEC 2024, Department of MBA, and Department of MCA, Acharya
										Institute of Technology, Bengaluru in association with
										Universitas Budi Luhur, Indonesia and The State University
										of Economics and Technology, Ukraine. The event is scheduled
										to take place on March 20th and 21st, 2024
									</div>
									{/* dates table */}
									<div id='container3'>
										<hr />
										<br />
										<table style={{ margin: '0px auto' }}>
											<tbody>
												<tr>
													<td className='second'>Dates :</td>
													<td className='third'>20th and 21st March 2024</td>
												</tr>
												<tr>
													<td className='second'>Target Audience :</td>
													<td className='third'>
														Academicians, Research Scholars, Students, and
														Corporate Professional
													</td>
												</tr>
												<tr>
													<td className='second'>
														Abstract and Paper Submission link:
													</td>
													<td className='third'>
														{' '}
														<a
															href='https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FMEC2024'
															target='_blank'
															rel='noreferrer'
														>
															Microsoft CMT{' '}
														</a>
													</td>
												</tr>
												<tr>
													<td className='second'>Mode of Conference :</td>
													<td className='third'>Hybrid</td>
												</tr>
												<tr>
													<td className='second'>Online Mode: </td>
													<td className='third'>
														Alive platform (Acharya LMS)
													</td>
												</tr>
												<tr>
													<td className='second'>Offline Mode: </td>
													<td className='third'>
														Acharya Institute of Technology, Bengaluru 560107
													</td>
												</tr>
											</tbody>
										</table>
									</div>

									{/* end of table */}

									<div className='elementor-container elementor-column-gap-default'>
										<div
											className='elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cc30f35'
											data-id='cc30f35'
											data-element_type='column'
										>
											<div className='elementor-widget-wrap elementor-element-populated'>
												<div
													className='elementor-element elementor-element-d575cad elementor-widget elementor-widget-rt-image-box'
													data-id='d575cad'
													data-element_type='widget'
													data-widget_type='rt-image-box.default'
												>
													<div className='elementor-widget-container'>
														<div className='about-box-layout1'>
															<div className='figure-wrap'>
																<div
																	className='main-figure image-1 wow fadeInLeft'
																	data-wow-delay='0.1s'
																	data-wow-duration='1s'
																>
																	<img
																		fetchpriority='high'
																		decoding='async'
																		width={729}
																		height={1050}
																		src='assets/front.jpeg'
																		className='attachment-full size-full'
																		alt=' ec'
																		srcSet='assets/front.jpeg 729w, assets/front.jpeg 600w, assets/front.jpeg 711w'
																		sizes='(max-width: 729px) 100vw, 729px'
																	/>
																</div>
																<div className='sub-figure'>
																	<ul>
																		<li
																			className='wow image-2 zoomIn'
																			data-wow-delay='0.3s'
																			data-wow-duration='0.4s'
																		>
																			<img
																				decoding='async'
																				width={106}
																				height={106}
																				src='assets/tiranga.jpeg'
																				className='attachment-full size-full'
																				alt='img'
																			/>
																		</li>
																		<li
																			className='wow image-3 zoomIn'
																			data-wow-delay='0.5s'
																			data-wow-duration='0.4s'
																		>
																			<img
																				decoding='async'
																				width={157}
																				height={157}
																				src='assets/grad.jpg'
																				className='attachment-full size-full'
																				alt='img2'
																				srcSet='assets/grad.jpg 157w, assets/grad.jpg 150w'
																				sizes='(max-width: 157px) 100vw, 157px'
																			/>
																		</li>
																		<li
																			className='wow image-4 zoomIn'
																			data-wow-delay='0.7s'
																			data-wow-duration='0.4s'
																		>
																			<img
																				loading='lazy'
																				decoding='async'
																				width={218}
																				height={218}
																				src='assets/crowd.jpg'
																				className='attachment-full size-full'
																				alt='imgcrowd'
																				srcSet='assets/crowd.jpg 218w, assets/crowd.jpg 150w'
																				sizes='(max-width: 218px) 100vw, 218px'
																			/>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											id='about'
											className='elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a4817e2'
											data-id='a4817e2'
											data-element_type='column'
										>
											<div className='elementor-widget-wrap elementor-element-populated'>
												<div
													className='elementor-element elementor-element-5894d25 elementor-widget elementor-widget-text-editor'
													data-id='5894d25'
													data-element_type='widget'
													data-widget_type='text-editor.default'
												>
													<div className='elementor-widget-container'>
														{/* About the conference */}
														<h4 className='heading-title comn-hdg'>
															About the Conference :
														</h4>
														<p className='description'>
															Welcome to MTEC 2024 - the International
															Conference on Management, Technology &
															Entrepreneurial Challenges in a Dynamic Business
															Environment. This collaborative event, hosted by
															the MBA and MCA Departments of Acharya Institute
															of Technology (AIT), Bengaluru, India, in
															partnership with Universitas Budi Luhur,
															Indonesia, and The State University of Economics
															and Technology, Ukraine, is set to delve into the
															complexities of navigating the ever-evolving
															realms of Management, Technology, and
															Entrepreneurship. Taking place on March 20th and
															21st, 2024, the conference will embrace a Hybrid
															Mode, seamlessly blending offline and online
															participation. Join us for two days of stimulating
															discussions and insights, as we collectively
															explore innovative solutions and strategies to
															address the challenges in today's dynamic business
															environment
														</p>

														{/* Important Dates */}
														<h4 className='heading-title comn-hdg'>
															Objectives of the Program :
														</h4>
														<p className='description'></p>
														<ol>
															<li>
																To facilitate the exchange of knowledge,
																research findings and best practices among
																participants including students, academicians,
																researchers, practitioners and industry
																professionals
															</li>
															<li>
																To provide a platform for participants to
																network with peers, experts, and potential
																collaborators, fostering professional
																relationships and partnerships
															</li>
															<li>
																To disseminate the latest research findings,
																innovations and advancements in a particular
																field promoting the dissemination of new
																knowledge
															</li>
															<li>
																To encourage interdisciplinary collaboration by
																bringing together experts from different fields
																to explore solutions to complex problems that
																require diverse perspectives
															</li>
															<li>
																To Provide a platform for researchers to publish
																and showcase their work through conference
																proceedings, journals, or other publication
																channels
															</li>
														</ol>
													</div>
												</div>
												<div
													className='elementor-element elementor-element-5df2dcb elementor-widget elementor-widget-rt-button'
													data-id='5df2dcb'
													data-element_type='widget'
													data-widget_type='rt-button.default'
												></div>
											</div>
										</div>
									</div>

									{/* About acharya  */}
									<div id='box' className='container-fluid  '>
										<div id='description' className='text container-fluid '>
											<h4 className='comn-hdg'>About Acharya</h4>
											<div id='photo' className='image container-fluid '>
												<img id='image' alt='-' src='assets/campus.jpeg' />
											</div>
											<p>
												Acharya Institute of Technology is committed to
												excelling in teaching, learning, research, and
												developing professionals who make a difference globally.
												The faculty at Acharya is not only involved in teaching
												but they also pursue research to push the boundaries of
												human knowledge. The students are motivated to pursue
												academic research by taking up bigger challenges.
												Acharya Institute of Technology is the ultimate
												destination, located in the south Indian city
												‘Bangalore’, known as the “Silicon Valley of India''.
												Acharya Institute of Technology was established in the
												year 2000 and offers 11 undergraduate programmes, 2
												postgraduate programmes and 11 research programmes. The
												diverse academic programmes attract nearly 5000 students
												from 60+ countries as well as from all parts of India.
												Acharya is proud of having a large number of notable
												alumni around the world
											</p>
										</div>
									</div>

									{/* About Karnataka  */}
									<div id='box' className='container-fluid  '>
										<div id='description' className='text container-fluid '>
											<h4 className='comn-hdg'>About Karnataka</h4>
											<div id='photo' className='image container-fluid '>
												<img alt='-' id='image' src='assets/karnataka.png' />
											</div>
											<p>
												The capital of Karnataka is Bengaluru, often referred to
												as the "Silicon Valley of India." It is a major hub for
												technology and innovation, hosting numerous IT companies
												and startups. Kannada is the official language of
												Karnataka. The state has a rich cultural heritage with
												influences from various dynasties like the Hoysalas,
												Chalukyas, and the Vijayanagara Empire. Traditional
												dance forms like Yakshagana and classical music are an
												integral part of Karnataka's cultural identity.
												Karnataka boasts diverse landscapes, ranging from the
												lush Western Ghats with hill stations like Coorg, to the
												Deccan Plateau, and the coastal areas along the Arabian
												Sea. This diversity contributes to a variety of flora,
												fauna, and climate zones within the state. The state is
												home to several historical and architectural wonders.
												Hampi, a UNESCO World Heritage Site, was the capital of
												the Vijayanagara Empire. The intricate temples of Belur
												and Halebid, and the medieval forts like Bidar Fort,
												showcase the rich history of Karnataka. Karnataka has a
												robust economy, driven by industries such as information
												technology,biotechnology, aerospace, and manufacturing.
												Bengaluru, with its thriving IT sector, has played a
												significant role in India's economic growth. Karnataka
												is known for its prestigious educational institutions,
												including the Indian Institute of Science (IISc) and the
												Indian Institutes of Technology (IIT Dharwad). It is a
												hub for research and innovation. Karnataka's cuisine
												reflects its diverse cultural influences. It includes
												iconic dishes like Bisi Bele Bath, Mysore Pak, Dosa, and
												various types of traditional sweets. The state is also
												famous for its filter coffee. Karnataka celebrates a
												variety of festivals with grandeur. The Mysuru Dasara,
												Hampi Utsav, and Ugadi are among the major festivals
												that showcase the state's cultural richness. Karnataka
												is a blend of tradition and modernity, offering a unique
												and dynamic experience for residents and visitors alike.
												If there's anything specific you'd like to know about
												Karnataka
											</p>
										</div>
									</div>

									{/* info */}
									<div id='lists' className='container-fluid'>
										<div id='f1' className='lists-grid'>
											<div className='list-item'>
												<h4 className='comn-hdg'>
													<span className='right-aligned'>Chief Patrons :</span>
												</h4>
												<ol>
													<li>
														Shri B M Reddy, President, JMJ Education Society,
														Bangalore
													</li>
													<li>
														Shri B Premnath Reddy, Chairman, Acharya Institutes,
														Bangalore
													</li>
												</ol>
												<h4 className='comn-hdg'>
													<span className='right-aligned'>Patrons :</span>
												</h4>
												<ol>
													<li>
														Smt. Shalini Reddy, Executive Director, Acharya
														Institutes, Bangalore
													</li>
													<li>
														Mr. Krishna Basani Reddy, Managing Director, Acharya
														Institutes, Bangalore
													</li>
													<li>
														Shri C B M Bhooshan ES to Chairman, Acharya
														Institutes, Bangalore{' '}
													</li>
													<li>Dr. Rajath Hegde M M, Principal, AIT, India </li>
													<li>
														Prof. Marigowda C K, Vice Principal, AIT, India{' '}
													</li>
												</ol>
											</div>
											<div className='list-item'>
												<h4 className='comn-hdg'>
													<span className='right-aligned'>
														INTERNATIONAL ADVISORY COMMITTEE :
													</span>
												</h4>
												<ol>
													<li>
														Dr. Vigneshwaran P,Vice Rector Academics,Acharya
														University,Uzbekistan
													</li>
													<li>
														Dr. Zulvia Khalid, MM, UNIVERSITAS BUDI LUHUR,
														Indonesia
													</li>
													<li>Dr. Ririt Roeswidiah, UNIVERSITAS BUDI LUHUR</li>
													<li>
														Dr. Mohammad Syafrullah, M.Kom, M.Sc, Head of
														Research Sub/Directorate, Ukraine
													</li>
													<li>
														Victoria SOLOVIEVA, Assoc. Prof. PhD, State
														University of Economics and Technology, Ukraine
													</li>
													<li>
														Dr. Ajith Padyana,Vice Rector, Acharya
														University,Uzbekistan
													</li>
												</ol>
											</div>
											<div className='list-item'>
												<h4 className='comn-hdg'>
													<span className='right-aligned'>
														NATIONAL ADVISORY COMMITTEE :
													</span>
												</h4>
												<ol>
													<li>
														Dr. B.E. Rangaswamy Davangere. Registrar Evaluation,
														VTU Belagavi,India
													</li>
													<li>
														Dr. Rajashekhar Patil, Head, Quality assurance,
														Acharya Institutes, Bangalore,India
													</li>
													<li>
														Dr. Rajeswari, Dean of Academics Acharya Institute
														of Technology, Bangalore,India
													</li>
													<li>
														Dr. Justin Jeya Amutha K, Assistant Director of
														Research, Acharya Institutes, Bangalore
													</li>
													<li>
														Prof. Devasis Pradhan, Dean, R & D Acharya Institute
														of Technology, Bangalore
													</li>
												</ol>
											</div>
										</div>

										<div className='list-item'>
											<h4 className='comn-hdg'>Program Chair :</h4>
											<p>
												Dr. Juin Choudhury, Head of the Department, MBA, AIT
											</p>
											<h4 className='comn-hdg'>Program Co-Chair :</h4>
											<p>
												Dr. Ratnakirti Roy, Head of the Department, MCA, AIT
											</p>
											<h4 className='comn-hdg'>
												<span className='right-aligned'>Convener :</span>
											</h4>
											<ul>
												<li>
													Dr. Nijaguna G, Professor and Dean IED, MBA, AIT, Mob-
													99009 44552
												</li>
												<li>
													Dr. Monica M, Assistant Professor, MBA, AIT, Mob-
													9740715297
												</li>
												<li>
													Prof. Sheela Maharajpet, Assistant Professor, MCA,
													AIT, Mob- 88674 13464
												</li>
												<li>
													Prof. Sumit Singha Chowdhury, Assistant Professor,
													MCA, AIT, Mob- 8583866180
												</li>
												<li>
													Prof. Pallavi M O, Assistant Professor, MCA, AIT, Mob-
													99160 22291
												</li>
											</ul>
										</div>
									</div>

									<div id='tab' className='list-item'>
										<h4 className='comn-hdg'>COMMITTEE MEMBERS :</h4>

										{/* Track 1 */}
										<div className='track-content'>
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(1)}>
													<img src='assets/down.png' alt='+' />
													PROGRAMME COMMITTEE
												</p>
												{openDropdown === 1 && (
													<ol style={{ textAlign: 'left' }} id='mt1'>
														<li>
															Dr. Renuka Devi, Associate Professor, MBA, AIT
														</li>
														<li>Dr. Mahak Balani, Assistant Professor </li>
														<li>Prof. Channakeshava HC, Assistant Professor</li>
														<li>Prof. Nethravathi N, Assistant Professor</li>
														<li>Prof. Mudasir Rashid, Assistant Professor</li>
														<li>Prof. Nikhita K, Assistant Professor</li>
														<li>Prof. Anju A Nair, Assistant Professor</li>
														<li>
															Prof. Anila Raveendran Nambiar, Assistant
															Professor
														</li>
													</ol>
												)}
											</div>

											{/* Track 2 */}
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(2)}>
													<img src='assets/down.png' alt='+' />
													ORGANIZING COMMITTEE
												</p>
												{openDropdown === 2 && (
													<ol style={{ textAlign: 'left' }} id='mt1'>
														<li>
															Dr. Ramesh C Raina, Associate Professor, MBA
														</li>
														<li>Prof. Archana Vijay, Assistant Professor</li>
														<li>Prof. Bhavya VM, Assistant Professor</li>
														<li>Prof. Harshita Kaushik, Assistant Professor</li>
														<li>Prof. Dhanalakshmi C, Assistant Professor</li>
														<li>
															Prof. Rajendra Mahesh Jotawar, Assistant Professor
														</li>
														<li>Prof. Rohith, Assistant Professor</li>
													</ol>
												)}
											</div>

											{/* Track 3 */}
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(3)}>
													<img src='assets/down.png' alt='+' />
													SCIENTIFIC COMMITTEE
												</p>
												{openDropdown === 3 && (
													<ol style={{ textAlign: 'left' }} id='mt1'>
														<li>Prof. Pranav U, Associate Professor</li>
														<li>Prof. Suhas Patel, Assistant Professor</li>
														<li>Prof. Anitabai, Assistant Professor </li>
														<li>Prof. Kirthika, Assistant Professor </li>
														<li>
															Prof. Sumit Singha Chowdhury, Assistant Professor
														</li>
														<li>Prof. S Harshini, Assistant Professor</li>
														<li>Prof. Yogesh Dixit, Assistant Professor</li>
													</ol>
												)}
											</div>
										</div>
									</div>

									{/* Committe Members */}
									{/* <div id='tab' className='list-item'>
										<h4 className='comn-hdg'>Committee Members :</h4>
										<table>
											<tbody>
												<tr>
													<td>Programme committee</td>
													<td>
														<ol style={{ textAlign: 'left' }}>
															<li>
																Dr. Renuka Devi, Associate Professor, MBA, AIT
															</li>
															<li>Dr. Mahak Balani, Assistant Professor </li>
															<li>
																Prof. Channakeshava HC, Assistant Professor
															</li>
															<li>Prof. Nethravathi N, Assistant Professor</li>
															<li>Prof. Mudasir Rashid, Assistant Professor</li>
															<li>Prof. Nikhita K, Assistant Professor</li>
															<li>Prof. Anju A Nair, Assistant Professor</li>
															<li>
																Prof. Anila Raveendran Nambiar, Assistant
																Professor
															</li>
														</ol>
													</td>
												</tr>
												<tr>
													<td>Organizing Committee</td>
													<td>
														<ol style={{ textAlign: 'left' }}>
															<li>
																Dr. Ramesh C Raina, Associate Professor, MBA
															</li>
															<li>Prof. Archana Vijay, Assistant Professor</li>
															<li>Prof. Bhavya VM, Assistant Professor</li>
															<li>
																Prof. Harshita Kaushik, Assistant Professor
															</li>
															<li>Prof. Dhanalakshmi C, Assistant Professor</li>
															<li>
																Prof. Rajendra Mahesh Jotawar, Assistant
																Professor
															</li>
															<li>Prof. Rohith, Assistant Professor</li>
														</ol>
													</td>
												</tr>
												<tr>
													<td>Scientific committee</td>
													<td>
														<ol style={{ textAlign: 'left' }}>
															<li>Prof. Pranav U, Associate Professor</li>
															<li>Prof. Suhas Patel, Assistant Professor</li>
															<li>Prof. Anitabai, Assistant Professor </li>
															<li>Prof. Kirthika, Assistant Professor </li>
															<li>
																Prof. Sumit Singha Chowdhury, Assistant
																Professor
															</li>
															<li>Prof. S Harshini, Assistant Professor</li>
															<li>Prof. Yogesh Dixit, Assistant Professor</li>
														</ol>
													</td>
												</tr>
											</tbody>
										</table>
									</div> */}

									{/* Resource Persons */}
									<div id='tab' className='list-item'>
										<KeyNoteSpeakers />
									</div>

									{/* Call for papers */}
									<div id='tab' className='list-item'>
										<h4 className='comn-hdg'>Call for Papers :</h4>
										<p>
											Acharya Institute of Technology, invites you to associate
											with us for the upcoming Conference -2024, a 2 Days
											International Conference to be held on 20th and 21st March
											2024. International Conference on Management, Technology &
											Entrepreneurial Challenges in Dynamic Business
											Environment- MTEC 2024 team with pleasure invites you to
											contribute with an original research paper, to this blind
											and peer-reviewed conference
										</p>
									</div>

									{/* TRACK DETAILS */}

									<div id='tab' className='list-item'>
										<h4 className='comn-hdg'>TECHNICAL TRACKS :</h4>

										{/* Track 1 */}
										<div className='track-content'>
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(1)}>
													<img src='assets/down.png' alt='+' />
													TRACKS 1: MANAGEMENT ( HR, Marketing, Finance )
												</p>
												{openDropdown === 1 && (
													<ul id='mt1' className='menu'>
														<li>Rethinking HR: Home as Office</li>
														<li>HR Role in World from Home Culture</li>
														<li>Virtual Employee Engagement</li>
														<li>Reimaging Onboard post pandemic</li>
														<li>WFH - Challenges for Team HR</li>
														<li>Diversity and Inclusion</li>
														<li>Building Resilience Post Pandemic</li>
														<li>Changing Role of HR Post Pandemic</li>
														<li>Strategic Human Resource Management</li>
														<li>Impact of Technology on HR</li>
														<li>Ethics in Human Resource Management</li>
														<li>
															Recent HR Practices / HR Innovative Practices
														</li>
														<li>Practices to build healthy workplaces</li>
														<li>Talent Acquisition</li>
														<li>Technology in HR</li>
														<li>Digital Marketing</li>
														<li>e-Marketing</li>
														<li>Brand Management</li>
														<li>Consumer Psychology</li>
														<li>Nero Marketing</li>
														<li>Consumer Behaviour Analysis</li>
														<li>Advanced Marketing Communication</li>
														<li>Green Marketing</li>
														<li>Corporate Soles Dynamics</li>
														<li>Innovations in services Marketing</li>
														<li>Innovations in Retail Business</li>
														<li>Rural Marketing</li>
														<li>Digital Banking</li>
														<li>Personal Finance</li>
														<li>Behavioural Finance</li>
														<li>Portfolio Management</li>
														<li>Public Finance</li>
														<li>Venture Capital</li>
														<li>Micro Finance</li>
														<li>Mergers Post Covid</li>
														<li>Capital Market</li>
														<li>Corporate Governance</li>
														<li>Financial Inclusion</li>
														<li>Post Pandemic Financial Planning</li>
														<li>Risk Management</li>
														<li>Embedded Finance</li>
														<li>ESG Investing</li>
													</ul>
												)}
											</div>

											{/* Track 2 */}
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(2)}>
													TRACK 2: ENTREPRENEURSHIP AND INNOVATIONS
													<img src='assets/down.png' alt='+' />
													TRACK 2: ENTREPRENEURSHIP
												</p>
												{openDropdown === 2 && (
													<ul id='mt1' className='menu'>
														<li>Small and Medium-Sized Enterprises ( SME )</li>
														<li>
															Entrepreneurship, Fin Tech and Investing in future
															business
														</li>
														<li>Microfinance and self-help groups</li>
														<li>Role of Al in Entrepreneurship</li>
														<li>Disruptive business models</li>
														<li>
															Internationalization and cross-country trade
															management
														</li>
														<li>
															Global market segmentation, targeting and
															positioning
														</li>
														<li>
															Knowledge management, innovation, and Customer
															advocacy
														</li>
														<li>Globalization and business diversity</li>
													</ul>
												)}
											</div>

											{/* Track 3 */}
											<div className='dropdown container-fluid'>
												<p id='t1' onClick={() => handleOpen(3)}>
													TRACK 3: EMERGING TECHNOLOGIES AND OTHER ALLIED AREAS
													<img src='assets/down.png' alt='+' />
													TRACK 3: TECHNOLOGY AND OPERATIONS
												</p>
												{openDropdown === 3 && (
													<ul id='mt3' className='menu'>
														<li>
															Artificial Intelligence (AI) and Machine Learning
														</li>
														<li>
															(ML) Internet of Things (IoT) Blockchain and
														</li>
														<li>
															Cryptocurrency: Biotechnology and Bioinformatics
														</li>
														<li>Renewable Energy and Sustainability Quantum</li>
														<li>
															Computing Augmented Reality (AR) and Virtual
															Reality
														</li>
														<li>(VR) Cybersecurity 5G and Next-Generation</li>
														<li>
															Connectivity Space Exploration and New Space
														</li>
														<li>
															Technologies Sustainability and Green Technologies
														</li>
														<li>
															Ethical and Societal Implications Generative AI
															for
														</li>
														<li>
															Business Decision Making Digital Financial Data
														</li>
														<li>Security Digital Transformation</li>
													</ul>
												)}
											</div>
										</div>
									</div>

									<div id='tab' className='list-item'>
										<h4 className='comn-hdg'>PUBLICATION DETAILS :</h4>
										<p>
											Selected Papers will be published in the Book series with
											ISBN published in BP International, UK, London <br />
										</p>
										<h4 className='comn-hdg'>PUBLICATION :</h4>
										<p>
											Publication : Selected Papers will be published in Book
											volume with ISBN and Following Indexing -
										</p>
									</div>
								</section>
							</div>
						</div>
					</div>
					{/* logos slider */}
					<section>
						<div className='logos'>
							<div className='logos-slide'>
								<img alt='-' src='assets/image/cross.png' />
								<img alt='-' src='assets/image/bpi.png' />
								<img alt='-' src='assets/image/dimensions.png' />
								<img alt='-' src='assets/image/open.png' />
								<img alt='-' src='assets/image/scilit.png' />
								<img alt='-' src='assets/image/semantic.png' />
								<img alt='-' src='assets/image/gscholar.png' />
							</div>
							<div className='logos-slide'>
								<img alt='-' src='assets/image/cross.png' />
								<img alt='-' src='assets/image/bpi.png' />
								<img alt='-' src='assets/image/dimensions.png' />
								<img alt='-' src='assets/image/open.png' />
								<img alt='-' src='assets/image/scilit.png' />
								<img alt='-' src='assets/image/semantic.png' />
								<img alt='-' src='assets/image/gscholar.png' />
							</div>
						</div>
					</section>
				</section>
			</div>
		</>
	);
};

export default HomePage;
