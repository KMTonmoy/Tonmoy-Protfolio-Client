import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <motion.footer 
            className="bg-[#122033] text-white py-6 px-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} Tonmoy Ahamed. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <motion.a 
                        href="https://www.linkedin.com/in/tonmoyahamed" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl hover:text-gray-400"
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a 
                        href="https://github.com/tonmoyahamed" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl hover:text-gray-400"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a 
                        href="https://twitter.com/tonmoyahamed" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl hover:text-gray-400"
                    >
                        <FaTwitter />
                    </motion.a>
                    <motion.a 
                        href="mailto:tonmoyahamed@example.com" 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl hover:text-gray-400"
                    >
                        <FaEnvelope />
                    </motion.a>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
