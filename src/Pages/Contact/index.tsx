import React, { useState, FC } from 'react';
import ContactImage from '../../Assets/ContactPageImage.svg';
import emailjs from '@emailjs/browser';
import Spinner from '../../Components/Spinner.tsx';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs
      .send(
        'service_iw6o4fv',
        'template_235hxpe',
        formData,
        'N1SnmYsaMn5Nu862K'
      )
      .then(() => {
        setIsLoading(false); // Stop loading
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 10000); // Show success message for 10 seconds
      })
      .catch((err) => {
        setIsLoading(false); // Stop loading
        console.error('Failed to send email:', err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-[70%] sm:w-[50%]"
        src={ContactImage}
        alt="Contact page illustration"
      />
      {formSubmitted ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
          <p className='text-green-0'>
            Your message has been sent successfully. Our support team will get
            back to you soon.
          </p>
        </div>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="font-bold text-lg">Get in touch</h3>
          <form onSubmit={handleSubmit} className="w-[80%] space-y-6 py-6">
            <div className="flex gap-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full mt-2 p-3 rounded-md text-white border border-gray-0 border-opacity-40 focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please share details here..."
                className="w-full mt-2 p-3 rounded-md border border-gray-0 border-opacity-40 text-white focus:outline-none focus:ring-1 focus:ring-purple-600"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mr-4 px-6 py-2 text-white-0 font-semibold bg-yellow-0 rounded-full hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
