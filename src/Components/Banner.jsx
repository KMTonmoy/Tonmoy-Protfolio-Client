import React from 'react';
import myPic from '../../public/me22.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsDownload, BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#122033] text-white"
        >
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-10 px-2">

                {/* Left Section - Text Content */}
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 md:mt-0 mt-5">

                    <h1 className="text-3xl md:text-4xl font-bold mt-2">Hello, I'm</h1>
                    <h1 className="text-3xl md:text-5xl text-[#00FFA0] font-bold">Tonmoy Ahamed</h1>
                    <h4 className="text-sm text-gray-400 font-bold mt-2 ml-2">Full Stack Developer</h4>
                    <p className="text-base mt-4">Highly motivated Junior Web Developer proficient in both front-end
                        and back-end development, with a demonstrated talent for crafting
                        responsive and intuitive web applications. Seeking to apply technical
                        expertise and problem-solving acumen within a collaborative team
                        environment to drive innovation and personal advancement in the
                        technology sector.</p>

                    {/* Download CV Button */}
                    <div className='flex gap-10 mt-10 items-center'>
                        <a
                            href="../../public/TonmoyFinalResume.pdf"
                            download="Tonmoy_Ahamed_CV.pdf"
                            className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-3 rounded-full flex justify-center items-center text-center gap-3 hover:text-black hover:bg-[#0DFAA1]'
                        >
                            Download CV <BsDownload />
                        </a>

                        {/* Social Links */}
                        <div className='flex gap-2'>
                            <Link to="#" className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-2 rounded-full text-center items-center flex w-10 h-10 justify-center hover:text-black hover:bg-[#0DFAA1]'><FaGithub /></Link>
                            <Link to="#" className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-2 rounded-full text-center items-center flex w-10 h-10 justify-center hover:text-black hover:bg-[#0DFAA1]'><FaLinkedin /></Link>
                            <Link to="#" className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-2 rounded-full text-center items-center flex w-10 h-10 justify-center hover:text-black hover:bg-[#0DFAA1]'><FaInstagram /></Link>
                            <Link to="#" className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-2 rounded-full text-center items-center flex w-10 h-10 justify-center hover:text-black hover:bg-[#0DFAA1]'><FaFacebook /></Link>
                            <Link to="#" className='text-[#0DFAA1] border-2 border-[#0DFAA1] p-2 rounded-full text-center items-center flex w-10 h-10 justify-center hover:text-black hover:bg-[#0DFAA1]'><BsTwitterX /></Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Profile Picture */}
                <div className="md:w-1/2 flex justify-center">
                    <img className="border-4 border-[#00FFA0] h-auto w-full rounded-full md:w-[400px] md:h-[400px] " src={myPic} alt="Tonmoy Ahamed" />
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;
