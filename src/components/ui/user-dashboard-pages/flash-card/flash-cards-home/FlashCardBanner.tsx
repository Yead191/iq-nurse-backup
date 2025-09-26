import { Button } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const flashCards = [
    {
        id: 1,
        logo: '/assets/flashcard/logo3.png',
        title: 'NCLEX-Focused',
        description: 'Content aligned with the latest NCLEX test plan to ensure you\'re studying what matters most.',
        path: '/profile/flash-card/nclex-stduy',
    },
    {
        id: 2,
        logo: '/assets/flashcard/logo2.png',
        title: 'Manual Creation',
        description: 'Create flashcards one by one with your own content',
        buttonText: 'Start Creating',
        buttonStyle: 'primary',
        btnColor: 'rgba(0, 56, 119, 1)',
        path: '/profile/flash-card/create-flash/start-scratch'
    },
    {
        id: 3,
        logo: '/assets/flashcard/logo1.png',
        title: 'AI Assistant',
        description: 'Let our AI help you generate flashcards from your notes or topics',
        buttonText: 'Use AI Help',
        buttonStyle: 'success',
        btnColor: 'rgba(111, 179, 184, 1)',
        path: '/profile/flash-card/creat-flash-with-ai'
    }
];

const FlashCardBanner = () => {
    const router = useRouter();

    const handleCardClick = (path: string) => {
        router.push(path);
    };

    return (
        <div className=" p-6">
            {/* Header Section */}
            <div className="bg-white rounded-lg p-6 mb-6" style={{ boxShadow: '3.83px 3.83px 47.91px 0px rgba(0, 0, 0, 0.11)' }}>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">My Flashcards</h1>
                <p className="text-sm text-gray-600">
                    Access and manage all your created and saved flashcards
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {flashCards.map(({ logo, title, description, id, buttonText, btnColor, path }) => {
                    const hasBtnColor = !!btnColor;
                    return (
                        <div
                            key={id}
                            className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex flex-col ${!hasBtnColor ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                            style={{ boxShadow: '3.83px 3.83px 47.91px 0px rgba(0, 0, 0, 0.11)' }}
                            onClick={() => !hasBtnColor && path && handleCardClick(path)}
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                    {/* Use actual logo image */}
                                    <Image
                                        src={logo}
                                        alt={`${title} logo`}
                                        width={28}
                                        height={28}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
                            </div>

                            {/* Button */}
                            {buttonText && hasBtnColor && (
                                <div className="mt-auto">
                                    <Button
                                        type={btnColor === 'primary' ? 'primary' : 'default'}
                                        style={{
                                            backgroundColor: btnColor,
                                            borderColor: btnColor,
                                            color: btnColor ? '#fff' : undefined
                                        }}
                                        size="middle"
                                        className='hover:scale-110 transition'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            path && handleCardClick(path);
                                        }}
                                    >
                                        {buttonText}
                                    </Button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlashCardBanner;