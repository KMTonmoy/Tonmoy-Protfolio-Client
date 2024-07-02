import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mkgwngok', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for contacting me. I will get back to you soon.',
                    confirmButtonColor: '#3b82f6'
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
                confirmButtonColor: '#3b82f6'
            });
        }
    };

    return (
        <div className="flex px-2 flex-col-reverse gap-5 md:flex-row  md:items-center md:justify-center md:px-10 py-12">
            {/* Left Side (Contact Form) */}
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0 bg-gray-100 text-gray-800 p-8 rounded-lg shadow-lg ">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-lg font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 mt-1 bg-white text-black border-gray-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-lg font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 mt-1 bg-white text-black border-gray-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-lg font-semibold">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="block w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 mt-1 bg-white text-black border-gray-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Right Side (Additional Text) */}
            <div className="md:mt-0 mt-5 md:w-1/2 md:pl-6 text-center md:text-left ">
                <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
                <p className="text-lg">
                    Feel free to reach out to me for any inquiries or opportunities. I'll be glad to hear from you!
                </p>
                <p className="text-lg mt-4">
                    You can also connect with me on various social platforms to stay updated with my latest projects and activities.
                </p>
                <p className=" mt-2 text-lg leading-relaxed">
                    Email: tonmoyahamed2009@gmail.com
                    <br />
                    Phone: (+880) 1731158705
                </p>
            </div>
        </div>
    );
};

export default Contact;
