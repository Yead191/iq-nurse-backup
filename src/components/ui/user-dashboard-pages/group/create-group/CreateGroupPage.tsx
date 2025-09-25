"use client";
import { BasicInformation } from './Forms/form-steps/BasicInformation';
import { InvitePeople } from './Forms/form-steps/InvitePeople';
import { PrivacySettings } from './Forms/form-steps/PrivacySettings';
import { Review } from './Forms/form-steps/Review';
import { StudyFocus } from './Forms/form-steps/StudyFocus';
import { StepperForm } from './Forms/SteperForm';

export interface StepItem {
    title: string;
    content: React.ReactNode;
    description?: string;
}
const CreateGroupSteps: React.FC = () => {
    const steps: StepItem[] = [
        {
            title: 'Basic Information',
            content: <BasicInformation />,
        },
        {
            title: 'Study Focus',
            content: <StudyFocus />,
        },
        {
            title: 'Privacy',
            content: <PrivacySettings />
        },
        {
            title: 'Invite Members',
            content: <InvitePeople />
        },
        {
            title: 'Review',
            content: <Review />
        }
    ];

    const handleSubmit = (data: any) => {
        console.log("✅ Submitted data:", data);
    };

    return (

        <div className='max-w-5xl mx-auto relative'>
            <StepperForm steps={steps} onSubmit={handleSubmit} />
        </div>
    );
};

export default CreateGroupSteps;
