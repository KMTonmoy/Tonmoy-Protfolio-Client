import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#122033] text-white relative">
            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            {/* Navbar Content */}
            <motion.div
                className="container mx-auto flex justify-between items-center py-4 px-2 md:px-0 relative z-50"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h1 className="text-2xl font-bold">
                        Tonmoy Ahamed
                        <span className="block text-sm text-gray-400">Full Stack Web Developer</span>
                    </h1>
                </div>

                {/* Hamburger menu icon for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className="text-2xl" />
                        ) : (
                            <FaBars className="text-2xl" />
                        )}
                    </button>
                </div>

                {/* Navigation links for large screens */}
                <nav className="hidden md:flex space-x-4">
                    <Link to="/">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-gray-300"
                        >
                            Home
                        </motion.a>
                    </Link>
                    <Link to="/about">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-gray-300"
                        >
                            About
                        </motion.a>
                    </Link>
                    <Link to="/projects">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-gray-300"
                        >
                            Projects
                        </motion.a>
                    </Link>
                    <Link to="/skills">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-gray-300"
                        >
                            Skills
                        </motion.a>
                    </Link>
                    <Link to="/contact">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hover:text-gray-300"
                        >
                            Contact
                        </motion.a>
                    </Link>
                </nav>

                {/* Collapsible menu for small screens */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            className="md:hidden flex flex-col absolute top-0 right-0 bg-[#122033] z-50 py-4 px-6 w-[50%] h-screen"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className="md:hidden">
                                <button onClick={toggleMenu}>
                                    <FaTimes className="text-2xl text-white" />
                                </button>
                            </div>
                            <Link to="/" onClick={toggleMenu}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-gray-300 block py-2"
                                >
                                    Home
                                </motion.a>
                            </Link>
                            <Link to="/about" onClick={toggleMenu}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-gray-300 block py-2"
                                >
                                    About
                                </motion.a>
                            </Link>
                            <Link to="/projects" onClick={toggleMenu}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-gray-300 block py-2"
                                >
                                    Projects
                                </motion.a>
                            </Link>
                            <Link to="/skills" onClick={toggleMenu}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-gray-300 block py-2"
                                >
                                    Skills
                                </motion.a>
                            </Link>
                            <Link to="/contact" onClick={toggleMenu}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-gray-300 block py-2"
                                >
                                    Contact
                                </motion.a>
                            </Link>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Navbar;
