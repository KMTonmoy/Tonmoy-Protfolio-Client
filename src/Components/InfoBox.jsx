import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLaptopCode, FaTools } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const InfoBox = () => {
    const projectsCompleted = 12;
    const technologiesUsed = 15;
    const toolsExpertise = "VS Code, Git, Figma";

    return (
        <div className="container mx-auto px-4 md:px-0 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center"
            >
                <FaBriefcase className="text-4xl md:text-5xl text-green-400 mr-6" />
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Projects Completed</h3>
                    <span className="text-3xl md:text-4xl font-bold">{projectsCompleted}</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center"
            >
                <FaLaptopCode className="text-4xl md:text-5xl text-yellow-400 mr-6" />
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Technologies Used</h3>
                    <span className="text-3xl md:text-4xl font-bold">{technologiesUsed}</span>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center"
            >
                <FaTools className="text-4xl md:text-5xl text-red-400 mr-6" />
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Tools Expertise</h3>
                    <p className="text-lg">{toolsExpertise}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default InfoBox;
