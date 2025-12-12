import React from 'react';
import BannerSection from './BannerSection';
import OurStory from './OurStory';
import MissionVision from './MissionVision';
import OurCoreValues from './OurCorevalues';
import JoinOurCommunity from './JoinOurCommunity';

const AboutUs = () => {
    return (
        <div className=''>
            <BannerSection />
            <OurStory />
            <MissionVision />
            <OurCoreValues />
            <JoinOurCommunity />
        </div>
    );
};

export default AboutUs;