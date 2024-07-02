// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <motion.footer 
//             className="bg-[#122033] text-white py-6 px-4 mt-8"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//                 <div className="mb-4 md:mb-0">
//                     <p className="text-center md:text-left">
//                         © {new Date().getFullYear()} Tonmoy Ahamed. All rights reserved.
//                     </p>
//                 </div>
//                 <div className="flex space-x-6">
//                     <motion.a 
//                         href="https://www.linkedin.com/in/tonmoyahamed" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-xl hover:text-gray-400"
//                     >
//                         <FaLinkedin />
//                     </motion.a>
//                     <motion.a 
//                         href="https://github.com/tonmoyahamed" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-xl hover:text-gray-400"
//                     >
//                         <FaGithub />
//                     </motion.a>
//                     <motion.a 
//                         href="https://twitter.com/tonmoyahamed" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-xl hover:text-gray-400"
//                     >
//                         <FaTwitter />
//                     </motion.a>
//                     <motion.a 
//                         href="mailto:tonmoyahamed@example.com" 
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-xl hover:text-gray-400"
//                     >
//                         <FaEnvelope />
//                     </motion.a>
//                 </div>
//             </div>
//         </motion.footer>
//     );
// };

// export default Footer;
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left section */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Tonmoy Ahamed</h2>
                        <p className="text-sm">Full Stack Web Developer</p>
                    </div>

                    {/* Middle section (optional) */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                            <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
                            <li><Link to="/Contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Right section (optional) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                        <div className="flex space-x-4">
                            <Link to="https://x.com/TasrikAhamed25" className="text-gray-300 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569c-.885.384-1.83.646-2.828.767A4.76 4.76 0 0 0 23.136 3c-.967.573-2.034.988-3.162 1.208a4.75 4.75 0 0 0-8.111 4.323C9.446 8.248 5.484 5.5 2.437 1.98a4.707 4.707 0 0 0-.64 2.386c0 1.654.854 3.115 2.151 3.973a4.753 4.753 0 0 1-2.15-.597v.06c0 2.318 1.587 4.25 3.697 4.688-.387.104-.795.16-1.214.16-.297 0-.587-.028-.872-.082.588 1.855 2.298 3.208 4.325 3.248a9.48 9.48 0 0 1-5.61 1.885c-.366 0-.726-.022-1.085-.065a13.399 13.399 0 0 0 7.192 2.105c8.65 0 13.39-7.16 13.39-13.39 0-.203-.005-.405-.014-.605a9.579 9.579 0 0 0 2.358-2.43z" />
                                </svg>
                            </Link>
                            <Link to="https://www.facebook.com/profile.php?id=100088205996277" className="text-gray-300 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.999 4.375 10.986 10.125 11.888v-7.937H7.125V12H10v-2.573c0-3.299 1.974-5.124 4.981-5.124 1.438 0 2.827.256 2.827.256v3.12h-1.599c-1.57 0-2.056.972-2.056 1.972V12h3.504l-.56 3.975h-2.944v7.937C19.625 22.986 24 17.999 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </Link>
                            <Link to='https://www.linkedin.com/in/tonmoy-ahamed' className='text-2xl'>
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
