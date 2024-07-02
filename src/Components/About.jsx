import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../../public/about.png';

const About = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="md:flex md:items-center md:justify-center md:px-10 py-12">
            {/* Left Side (Image) */}
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 md:pr-6 mb-6 md:mb-0 flex justify-center"
            >
                <img
                    src={myImage}
                    alt="Tonmoy Ahamed"
                    className="rounded-xl h-auto md:h-[600px] w-full md:w-[600px] shadow-lg"
                />
            </motion.div>

            {/* Right Side (Text) */}
            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 md:pl-6 text-center md:text-left"
            >
                <div className="mb-8">
                    <div className="flex justify-center md:justify-start mb-4">
                        <button
                            onClick={() => handleTabChange('about')}
                            className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white'}`}
                        >
                            About Me
                        </button>
                        <button
                            onClick={() => handleTabChange('education')}
                            className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white'}`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => handleTabChange('contact')}
                            className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white'}`}
                        >
                            Contact
                        </button>
                    </div>
                    {activeTab === 'about' && (
                        <>
                            <h2 className="text-4xl font-bold mb-4 text-[#00FFA0]">About Me 😎</h2>
                            <p className="text-lg mb-4 leading-relaxed">
                                Hello, I'm Tonmoy Ahamed, a passionate web developer specializing in React.js,
                                Node.js, and MongoDB. I excel at building web applications that solve
                                real-world problems and drive business growth.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With a strong focus on user experience and performance optimization, I strive to
                                deliver high-quality solutions that meet client objectives effectively. Let's
                                connect and discuss how I can help bring your projects to life!
                            </p>
                        </>
                    )}
                    {activeTab === 'education' && (
                        <>
                            <h2 className="text-4xl font-bold mb-4 text-[#00FFA0]">Education 📚</h2>
                            <p className="text-lg mb-4 leading-relaxed">
                                I am currently studying in Class 9 at Mirkamary Adarsa High School, Mirkamary,
                                Iswardi, Pabna, Bangladesh.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Education is a key aspect of my journey to becoming a skilled web developer, and I am
                                committed to learning and growing in this field.
                            </p>
                        </>
                    )}
                    {activeTab === 'contact' && (
                        <>
                            <h2 className="text-4xl font-bold mb-4 text-[#00FFA0]">Contact 📞</h2>
                            <p className="text-lg mb-4 leading-relaxed">
                                Feel free to contact me if you have any questions, project inquiries, or just want to
                                connect!
                            </p>
                            <p className="text-lg leading-relaxed">
                                Email: tonmoyahamed2009@gmail.com
                                <br />
                                Phone: (+880) 1731158705
                            </p>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
