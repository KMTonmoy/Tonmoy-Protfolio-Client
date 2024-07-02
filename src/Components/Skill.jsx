// import React from 'react';
// import { FaCode, FaServer, FaDatabase, FaToolbox } from 'react-icons/fa';

// const Skills = () => {
//     return (
//         <div className="container mx-auto px-4 md:px-0 py-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Frontend Skills */}
//                 <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-4">Frontend Development</h3>
//                     <ul className="list-disc list-inside">
//                         <li className="mb-2 flex items-center">
//                             <FaCode className="text-blue-400 mr-2" /> React.js
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaCode className="text-blue-400 mr-2" /> HTML5 & CSS3
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaCode className="text-blue-400 mr-2" /> JavaScript (ES6+)
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaCode className="text-blue-400 mr-2" /> TypeScript
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Backend Skills */}
//                 <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-4">Backend Development</h3>
//                     <ul className="list-disc list-inside">
//                         <li className="mb-2 flex items-center">
//                             <FaServer className="text-green-400 mr-2" /> Node.js
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaServer className="text-green-400 mr-2" /> Express.js
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaServer className="text-green-400 mr-2" /> RESTful APIs
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaServer className="text-green-400 mr-2" /> GraphQL
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Database Skills */}
//                 <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-4">Database & Tools</h3>
//                     <ul className="list-disc list-inside">
//                         <li className="mb-2 flex items-center">
//                             <FaDatabase className="text-yellow-400 mr-2" /> MongoDB
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaDatabase className="text-yellow-400 mr-2" /> SQL & MySQL
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaDatabase className="text-yellow-400 mr-2" /> Firebase
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaDatabase className="text-yellow-400 mr-2" /> PostgreSQL
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Other Skills */}
//                 <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-4">Other Skills</h3>
//                     <ul className="list-disc list-inside">
//                         <li className="mb-2 flex items-center">
//                             <FaToolbox className="text-pink-400 mr-2" /> Git & Version Control
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaToolbox className="text-pink-400 mr-2" /> Docker
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaToolbox className="text-pink-400 mr-2" /> CI/CD Pipelines
//                         </li>
//                         <li className="mb-2 flex items-center">
//                             <FaToolbox className="text-pink-400 mr-2" /> Agile Methodologies
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;


import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaToolbox } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className="container mx-auto px-4 md:px-0 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Frontend Development</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> React.js
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> HTML5 & CSS3
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> JavaScript (ES6+)
                        </li>

                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> Bootstrap
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> TailwindCSS
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> DaisyUI
                        </li>

                        <li className="mb-2 flex items-center">
                            <FaCode className="text-blue-400 mr-2" /> NPM Pacages
                        </li>







                    </ul>
                </motion.div>

                {/* Backend Skills */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Backend Development</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 flex items-center">
                            <FaServer className="text-green-400 mr-2" /> Node.js
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaServer className="text-green-400 mr-2" /> Express.js
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaServer className="text-green-400 mr-2" /> RESTful APIs
                        </li>

                    </ul>
                </motion.div>

                {/* Database Skills */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Database & Tools</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 flex items-center">
                            <FaDatabase className="text-yellow-400 mr-2" /> MongoDB
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaDatabase className="text-yellow-400 mr-2" /> LocalSotrage
                        </li>

                        <li className="mb-2 flex items-center">
                            <FaDatabase className="text-yellow-400 mr-2" /> Firebase
                        </li>

                    </ul>
                </motion.div>

                {/* Other Skills */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Other Skills</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 flex items-center">
                            <FaToolbox className="text-pink-400 mr-2" /> Git & Version Control
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaToolbox className="text-pink-400 mr-2" /> VS Code
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaToolbox className="text-pink-400 mr-2" /> Open AI
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaToolbox className="text-pink-400 mr-2" /> UI Design
                        </li>

                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
