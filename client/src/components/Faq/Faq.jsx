import React from 'react';
import { useState } from 'react';
import http from '../../api';
import Swal from 'sweetalert2';
import './Faq.css';
import { MdOutlineContactSupport } from 'react-icons/md';

import { Button, Input, Textarea } from '../common';

const Faq = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phoneNo: '',
		message: '',
	});

	const [selectedId, setSelectedId] = useState(0);

	const Faqs = [
		{
			id: 1,
			title: 'Is this for engineering students only?',
			desc: 'Nope. If you are eligible for the role according to the provided criteria you can also apply for the same.',
		},
		{
			id: 2,
			title: 'What kind of resources do you provide?',
			desc: 'The resources related to coding can help you to learn it in a better way. Till now we have covered up - Remote job websites, best coding websites, and best gaming websites for programmers, etc.',
		},
		{
			id: 3,
			title:
				'I ain’t active on Instagram, how can I access the resources & updates that you’re providing?',
			desc: 'Not to worry. We are active on Twitter, LinkedIn & WhatsApp also , so you can connect with us from any compatible platform.',
		},
		{
			id: 4,
			title: 'What kind of podcasts do you make?',
			desc: 'The podcast basically includes experience of individuals from industry folks, guiding students with their experience and sharing tips and tricks for a college student to grab a job offer.',
		},
	];

	const { name, email, phoneNo, message } = contact;

	const onChangeHandler = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		if (name === '' || email === '' || phoneNo === '' || message === '') {
			// AlertContext.setAlert("Please enter all fields", "danger"); add a state
			alert('Please fill all  the fields');
		}
		try {
			http.post('/contact/createContact', contact).then(
				() => {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Your query is sent to us.',
						showConfirmButton: false,
						timer: 1500,
					});
				},
				(error) => {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: error,
					});
				}
			);
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error,
			});
		}
		setContact({
			name: '',
			email: '',
			phoneNo: '',
			message: '',
		});
	};

	const handleClick = (id) => {
		if(selectedId) {
			setSelectedId(0);
		}
		else {
			setSelectedId(id);
		}
	};

	return (
		<>
			<section className="Faqs section" id="Faqs">
				<h2 className="section__title">Frequently Asked Questions</h2>
				<span className="section__subtitle">
					have questions we are here to help you
				</span>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						flexWrap: 'wrap-reverse',
					}}
				>
					<div className="Contact__container container grid">
						<form onSubmit={submitHandler}>
							<h1 className="doubt__title">Still have Questions ???</h1>
							<h3 className="contact__title">
								<MdOutlineContactSupport size={'2rem'} /> Contact Us
							</h3>
							<div className="inputText">
								<Input
									className="inputText"
									onChange={onChangeHandler}
									type="text"
									value={name}
									label="Name"
									name="name"
									required
								/>
							</div>
							<div className="inputText">
								<Input
									className="inputText"
									onChange={onChangeHandler}
									type="text"
									value={email}
									label="Email"
									name="email"
									required
								/>
							</div>
							<div className="inputText">
								<Input
									onChange={onChangeHandler}
									type="text"
									value={phoneNo}
									label="Mobile Number"
									name="phoneNo"
									required
								/>
							</div>
							<div className="inputText">
								<Textarea
									className="inputText"
									onChange={onChangeHandler}
									type="text"
									value={message}
									label="Your Query"
									name="message"
									required
								/>
							</div>

							<div className="button">
								<Button
									padding="8px 24px"
									fontSize="18px"
									label="Send"
									bgColor="#7541C8"
								/>
							</div>
						</form>
					</div>

					<div className="Faqs__container container grid">
						<div>
							{Faqs.map((item) => (
								<div
									key={item.id}
									// className="Faqs__content Faqs__close"
									className={
										selectedId === item.id
											? 'Faqs__content Faqs__open'
											: 'Faqs__content Faqs__close'
									}
								>
									<div 
										className="Faqs__header"
										onClick={() => handleClick(item.id)}
									>
										<div>
											<h1 className="Faqs__title">{item.title}</h1>
										</div>

										<i
											className="uil uil-angle-down Faqs__arrow"
										></i>
									</div>

									<div className="Faqs__list grid">
										<div className="Faqs__data">
											<span className="Faqs__subtitle">{item.desc}</span>
										</div>
									</div>
									<hr
										style={{
											height: '.15rem',
											width: '100%',
											outline: 'none',
											backgroundColor: '#ccc',
											border: 'none',
											borderRadius: '1rem',
											margin: '1rem 0',
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
