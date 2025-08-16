import DirectionTitle from '@/components/shared/user-dashboard/support-legal/DirectionTitle';
import SupportBanner from '@/components/shared/user-dashboard/support-legal/SupportBanner';
import React from 'react';
import { BiSpreadsheet } from 'react-icons/bi';

const TermsService = () => {
    return ( 
        <div>
           
            <DirectionTitle icon={<BiSpreadsheet className='text-[#003877]' />} title='Terms of Service' />
            <div className=''>
                <SupportBanner title='Legal Document' subTitle='Terms of Service' />
            </div>

            {/* container   */}     
            <div>
                <div className=" mx-auto my-8 p-6 border border-[#C5D0D0] rounded-lg  bg-white ">
                    <h1 className="lg:text-xl text-lg font-medium mb-4">Effective Date: December 19, 2024</h1>
                    <p className="text-lg lg:text-xl mb-6">Studyfy ("we," "us," or "our") respects the privacy of our users ("you" or "your"). This Privacy Policy describes the types of information we collect from and about you when you use our mobile application, Studyfy (the "App"), and how we use that information.</p>

                    <h2 className="lg:text-xl text-lg font-medium mb-3">1. Information We Collect:</h2>
                    <ul className="list-inside list-disc lg:text-lg text-[16px] mb-4">
                        <li>Account Information: When you create an account, we collect your name and email address.</li>
                        <li>Usage Data: We collect information about how you use the App, such as the subjects you study, the resources you access, and the features you use.</li>
                        <li>Device Information: We collect information about the device you use to access the App, such as the device type, operating system, and IP address.</li>
                    </ul>

                    <h2 className="lg:text-xl text-lg font-medium mb-3">2. How We Use Your Information:</h2>
                    <ul className="list-inside list-disc lg:text-lg text-[16px] mb-4">
                        <li>Provide and Improve the App: We use your information to provide and improve the App, including personalizing your study experience.</li>
                        <li>Communicate with You: We may use your information to communicate with you about the App, such as sending you updates, promotional offers, and customer support.</li>
                        <li>Analytics: We may use your information for analytics purposes to understand how users interact with the App and improve our services.</li>
                    </ul>

                    <h2 className="lg:text-xl text-lg font-medium mb-3">3. Sharing Your Information:</h2>
                    <p className="lg:text-lg text-[16px] mb-4">We will not share your information with third parties without your consent, except in the following cases:</p>
                    <ul className="list-inside list-disc lg:text-lg text-[16px]  mb-6">
                        <li>Service Providers: We may share your information with third-party service providers who help us operate the App.</li>
                        <li>Legal Requirements: We may disclose your information if required to comply with legal processes.</li>
                    </ul>
                </div>
            </div>
      
        </div>
    );
};

export default TermsService;