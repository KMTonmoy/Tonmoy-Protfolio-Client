import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for previous and next buttons

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-0 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map(project => (
                    <motion.div
                        key={project._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img className="w-full h-48 object-cover object-center" src={project.imageUrl} alt={project.name} />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <Link
                                to={`details/:${project._id}`}
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'bg-blue-300 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                >
                    <FaChevronLeft className="inline-block mr-1" />
                    Prev
                </button>
                {[...Array(Math.ceil(projects.length / projectsPerPage)).keys()].map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber + 1)}
                        className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === pageNumber + 1 ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
                    className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === Math.ceil(projects.length / projectsPerPage) ? 'bg-blue-300 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                >
                    Next
                    <FaChevronRight className="inline-block ml-1" />
                </button>
            </div>
        </div>
    );
};

export default Projects;
