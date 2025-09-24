import PageNavbar from '@/components/shared/user-dashboard/PageNavbar';
import { Network } from 'lucide-react';
import React from 'react';
import ConceptFlow from './ConceptFlow';
import ConceptTypeForm from './ConceptTypeForm';

const ConnectConcept = () => {
    return (
        <div>
            <PageNavbar
                icon={<Network className=" text-black" />}
                title="Interactive Concept Maps"
                subtitle="Visualize and understand complex concepts with interactive concept maps"
                isAiEnhanced={false}
            />

            <div className='w-full h-[calc(100vh-110px)] flex items-center  overflow-y-auto '>
                <div className=' w-3/4 '>
   
                    <ConceptFlow />
                </div>

                <div className=' w-1/4 h-full bg-[#F5F7FA] z-[999px] px-2 flex items-start justify-center pt-5 '>
                    <ConceptTypeForm />
                </div>

            </div>
        </div>
    );
};

export default ConnectConcept;