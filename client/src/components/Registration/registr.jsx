import { useEffect } from 'react';
import ContactUs from '../ContactUs';
import Map from '../Map';

const Register = () => {
	useEffect(() => {
		const copy = document.querySelector('.logos-slide').cloneNode(true);
		document.querySelector('.logos').appendChild(copy);
	}, []);

	return (
		<div className='elementor elementor-1061'>
			<div id='back' className='shadow p-3 '>
				<img alt='img' id='top' src='assets/head2.png' />
			</div>

			<section
				className='elementor-section elementor-top-section elementor-element elementor-element-9881757 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default'
				data-element_type='section'
			>
				{/* Form border  */}

				<div id='details' className='col-md-12 shadow  mb-4 rounded'>
					<div className='guides' id='e'>
						<h3 className='heading-title'>
							<mark>Carefully go through the information given below</mark>
						</h3>
					</div>
					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>Submission Guidelines :</h4>
						<p>
							The papers should be in the following formats: Publisher format
							(BPI)
						</p>
					</div>
					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>Plagiarism Policy :</h4>
						<p>
							Article should be checked through Turnitin with less than 10-15 %
							of similarity Index
						</p>
					</div>
					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>
							Review Process & Acceptance Notification :
						</h4>
						<p>Review Process -</p>
						<ul style={{ textAlign: 'left' }}>
							<li>
								Step 1: Corresponding author will receive an acknowledgment
								email containing Paper-Id within one week of paper submission
							</li>
							<li>
								Step 2: To ensure the quality of the manuscript, the Supporting
								Team will check for the following: Plagiarism (as per Policy)
								Quality and Novelty Scope of the Manuscript with the theme of
								the Conference
							</li>
							<li>
								Step 3: The manuscript satisfying the above said points, will be
								sent for review, and the manuscript not satisfying the
								above-said points will be notified as either “Revise and
								Resubmit “or “Rejected”
							</li>
							<li>
								Step 4: Three reviewers will be assigned to each manuscript and
								will undergo a double-blind review process
							</li>
							<li>
								Step 5: Based on the review comments, the organizing committee
								will send the decision to the authors Accept/Accept with
								Revision/ Reject
							</li>
							<li>
								Step 6: If out of three reviewers, the manuscript is accepted by
								two reviewers, the manuscript will be sent to the Conference
								chair for further process
							</li>
							<li>
								Step 7: After the final confirmation for acceptance of the
								manuscript from MTEC Editorial Board, author(s) will be notified
								through acceptance mail
							</li>
						</ul>
						<p>Acceptance Notification :</p>
						<ul style={{ textAlign: 'left' }}>
							<li>
								After Acceptance Notification you cannot withdraw your paper
								from MTEC-2024
							</li>
							<li>
								Paying Registration Fee: Calculate the registration fee
								according to your type of authorship ( Academician includes
								Professor and Faculty, Student include: Research Scholars, PG,
								and UG Student ) and make payment using Online Payment available
								at home page of the website
							</li>
						</ul>
						<p>
							Do not forget to send scanned copy of the online payment receipt
							on email :
						</p>
						<ul style={{ textAlign: 'left' }}>
							<li>
								Mailing the following items in .zip / .rar format to the
								Camera-ready Article files, both in prescribed MS Word and PDF
								format
							</li>
							<li>Copy of filled in Registration Form</li>
							<li>Scanned copy of filled in Copyright Form</li>
							<li>Proof of studentship</li>
							<li>Copy of registration fee receipt of Online Payment.</li>
							<li>
								The mail must bear the subject line as: “ Registration of
								article MTEC-2024 "
							</li>
						</ul>
					</div>

					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>Submission Link :</h4>
						<div
							className='hero-btns wow '
							data-wow-delay='1.5s'
							data-wow-duration='1s'
						>
							<a
								href='https://cmt3.research.microsoft.com/MEC2024'
								className='btn-fill style-one'
								target='_blank'
								rel='noreferrer'
							>
								Submit your paper
							</a>
						</div>
					</div>

					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>Important Dates :</h4>
						<table style={{ borderCollapse: 'collapse' }}>
							<tbody>
								<tr>
									<td style={{ padding: '10px' }}>
										Submission Deadline abstract, poster and oral presentation :
									</td>
									<td style={{ padding: '10px' }}>Feb 25, 2024</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>
										Acceptance Notification and Registration Starts :
									</td>
									<td style={{ padding: '10px' }}>Mar 1, 2024</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>
										Final Call for Camera Ready Paper :
									</td>
									<td style={{ padding: '10px' }}>March 9, 2024</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>
										Last date of Registration :
									</td>
									<td style={{ padding: '10px' }}>March 15, 2024</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>Date of Conference :</td>
									<td style={{ padding: '10px' }}>March 20th & 21st, 2024</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div id='tab' className='list-item'>
						{/* BEST PAPER AWARD*/}
						<h3 style={{ textAlign: 'center' }}>
							<mark>
								Win Rs.5000 cash prize for the best business-related article and
								Rs.5000 for outstanding technical content
							</mark>
						</h3>
						<p style={{ textAlign: 'center', paddingTop: '10px' }}>
							<strong>
								Once the full paper is accepted, Author(s) will be requested to
								submit the copyright transfer form <br /> Any paper which does
								not follow the guidelines may not be considered for publication
								in the BP International, UK, London
							</strong>
						</p>
					</div>

					<div id='tab' className='list-item'>
						{/* Registtration Fees*/}
						<h4 className='comn-hdg'>
							Registartion Fees ( After Acceptance of the Paper ) :
						</h4>
						<table style={{ borderCollapse: 'collapse' }}>
							<thead>
								<tr>
									<th>Category</th>
									<th>Fees</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={{ padding: '10px' }}>
										Academician / Research Scholar (PG and PhD Scholars) :
									</td>
									<td style={{ padding: '10px' }}>
										Rs. 2000 (Maximum of 3 Authors)
									</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>Corporate Professionals :</td>
									<td style={{ padding: '10px' }}>
										Rs. 3000 (Maximum of 3 Authors)
									</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>Foreign Delegates :</td>
									<td style={{ padding: '10px' }}>$100</td>
								</tr>
								<tr>
									<td style={{ padding: '10px' }}>UG Students :</td>
									<td style={{ padding: '10px' }}>Rs. 750</td>
								</tr>
							</tbody>
						</table>
						<h6 className='text-center'>
							<em>
								<strong>
									Last date for Registration and Payment of registration fee:
									15th March 2024
								</strong>
							</em>
						</h6>
					</div>

					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>Payment Details :</h4>
						<div
							className='hero-btns wow '
							data-wow-delay='1.5s'
							data-wow-duration='1s'
						>
							<a
								href='https://acharyainstitutes.in/index.php?r=acerp-api/acerp-events&id=319'
								className='btn-fill style-one'
								target='_blank'
								rel='noreferrer'
							>
								Open payment gateway
							</a>
						</div>
					</div>

					<div id='tab' className='list-item'>
						<h4 className='comn-hdg'>PUBLICATION DETAILS :</h4>
						<p>
							Selected Papers will be published in the Book series with ISBN
							published in BP International, UK, London <br />
						</p>
						<h4 className='comn-hdg'>PUBLICATION :</h4>
						<p>
							Publication : Selected Papers will be published in Book volume
							with ISBN and Following Indexing -
						</p>
					</div>

					{/* PHOTOS OF PUBLISHERS */}

					<section>
						<div className='logos'>
							<div className='logos-slide'>
								<img alt='img' src='assets/image/cross.png' />
								<img alt='img' src='assets/image/bpi.png' />
								<img alt='img' src='assets/image/dimensions.png' />
								<img alt='img' src='assets/image/open.png' />
								<img alt='img' src='assets/image/scilit.png' />
								<img alt='img' src='assets/image/semantic.png' />
								<img alt='img' src='assets/image/gscholar.png' />
							</div>
							<div className='logos-slide'>
								<img alt='img' src='assets/image/cross.png' />
								<img alt='img' src='assets/image/bpi.png' />
								<img alt='img' src='assets/image/dimensions.png' />
								<img alt='img' src='assets/image/open.png' />
								<img alt='img' src='assets/image/scilit.png' />
								<img alt='img' src='assets/image/semantic.png' />
								<img alt='img' src='assets/image/gscholar.png' />
							</div>
						</div>
					</section>
				</div>

				{/* Social media links */}
				<div id='i'>
					<div className='elementor-widget-container'>
						<div className='section-heading style-one'>
							<div className='custom-heading-subtitle' style={{ fontSize: 25 }}>
								Reach out to us!
							</div>
							<h2 className='heading-title' style={{ fontSize: 40 }}>
								Find us here :
							</h2>
						</div>
					</div>
				</div>

				<div
					className='elementor-element elementor-element-8866411 contact-social elementor-widget elementor-widget-html'
					data-element_type='widget'
					data-widget_type='html.default'
				>
					<div className='elementor-widget-container' id='list'>
						<ul className='social' id='list-items'>
							<li>
								<a
									target='_blank'
									href='https://www.facebook.com/acharya.ac.in'
									className='facebook'
									rel='noreferrer'
								>
									<img src='assets/facebook.png' alt='facebook' />
								</a>
							</li>
							<li>
								<a
									target='_blank'
									href='https://twitter.com/acharya_ac_in'
									className='twitter'
									rel='noreferrer'
								>
									<img src='assets/twitter.png' alt='twitter' />
								</a>
							</li>
							<li>
								<a
									target='_blank'
									href='https://www.youtube.com/user/acharya7317'
									className='youtube'
									rel='noreferrer'
								>
									<img src='assets/youtube.png' alt='youtube' />
								</a>
							</li>
							<li>
								<a
									target='_blank'
									href='https://www.instagram.com/acharyainstitutes/'
									className='instagram'
									rel='noreferrer'
								>
									<img src='assets/instagram.png' alt='instagram' />
								</a>
							</li>
							<li>
								<a
									target='_blank'
									href='https://www.linkedin.com/school/acharya-institutes/'
									className='linkedin'
									rel='noreferrer'
								>
									<img src='assets/linkedin.png' alt='linkedin' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<ContactUs />
			<Map />
		</div>
	);
};

export default Register;
