'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		if (Object.values(data)) {
			setEmailSubmitted(true);
			console.log('Message sent.');
		}
	};

	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'
		>
			<div className='z-10'>
				<h5 className='text-xl font-bold text-slate-500 dark:text-white my-2'>
          Let`&apos;s Connect
				</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='#'>
						<Image src={'/images/600x400.png'} width={48} height={48} className='rounded-full' alt='Github Icon' />
					</Link>
					<Link href='#'>
						<Image src={'/images/600x400.png'} width={48} height={48} className='rounded-full' alt='Linkedin Icon' />
					</Link>
				</div>
			</div>

			<div>
				<form className='flex flex-col' onSubmit={handleSubmit}>

					{emailSubmitted ? (
						<div>
							<p className='text-green-700 text-lg mt-2 mb-8'>
							Email sent successfully!
							</p>
							<button
								className='bg-primary-500 hover:bg-primary-600 hover:text-white text-slate-500 dark:text-white font-medium py-2.5 px-5 rounded-lg w-full'
								type='button'
								onClick={() => {setEmailSubmitted(false);}}>
									Send Again
							</button>
						</div>
					) : (
						<div>

							<div className='mb-6'>
								<label
									htmlFor='email'
									className='text-slate-500 dark:text-white block mb-2 text-sm font-medium'
								>
									Your email
								</label>
								<input
									name='email'
									type='email'
									id='email'
									required
									className='bg-slate-50 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-slate:500 black:text-gray-100 text-sm rounded-lg block w-full p-2.5'
									placeholder='jacob@google.com'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='subject'
									className='text-slate-500 dark:text-white block text-sm mb-2 font-medium'
								>
									Subject
								</label>
								<input
									name='subject'
									type='text'
									id='subject'
									required
									className='bg-slate-50 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-slate:500 black:text-gray-100 text-sm rounded-lg block w-full p-2.5'
									placeholder='Just saying hi'
								/>
							</div>
							<div className='mb-6'>
								<label
									htmlFor='message'
									className='text-slate-500 dark:text-white block text-sm mb-2 font-medium'
								>
									Message
								</label>
								<textarea
									name='message'
									id='message'
									className='bg-slate-50 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-slate:500 black:text-gray-100 text-sm rounded-lg block w-full p-2.5'
									placeholder='Let`s talk about...'
									rows={8}
									style={{ resize: 'none' }}

								/>
							</div>
							<button
								type='submit'
								className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
							>
								Send Message
							</button>
						</div>
					)}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
