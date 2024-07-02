import React from 'react';
import Banner from '../Components/Banner';
import InfoBox from '../Components/InfoBox';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Skills from '../Components/Skill';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoBox />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;