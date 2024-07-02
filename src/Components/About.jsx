import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../../public/about.png';

const About = () => {
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
                <div>
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
                </div>
            </motion.div>
        </div>
    );
};

export default About;
