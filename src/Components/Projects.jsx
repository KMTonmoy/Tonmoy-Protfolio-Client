import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const modalRef = useRef();

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

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleViewDetails = (project) => {
        openModal(project);
        toast.info("Please click outside the modal to close it.");


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
                            <button
                                onClick={() => handleViewDetails(project)}
                                className="text-blue-500 hover:underline"
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'bg-blue-200 cursor-not-allowed' : 'hover:bg-blue-600'}`}
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
                    className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === Math.ceil(projects.length / projectsPerPage) ? 'bg-blue-200 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                >
                    Next
                    <FaChevronRight className="inline-block ml-1" />
                </button>
            </div>

            {/* Modal */}
            {showModal && selectedProject && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-xl max-w-lg">
                        <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                        <img className="w-full h-64 object-cover mb-4" src={selectedProject.imageUrl} alt={selectedProject.name} />
                        <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                        <a
                            href={selectedProject.liveURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Visit Live Site
                        </a>
                    </div>
                </motion.div>
            )}

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Projects;
