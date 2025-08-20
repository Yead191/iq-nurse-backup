
const TitleBanner = () => {
    return (
        <div className=" w-full flex items-center justify-between">
            <div className="w-full">
                <h1 className="lg:text-xl text-lg font-medium pb-1 ">Flashcard </h1>
                <p className="lg:text-xs text-[10px] font-medium text-[#7B7B7B] "> Manage ,Create and review your flashcards  </p>
            </div>

            <div className=" w-full flex lg:justify-end justify-center ">
                <img
                    src="/assets/auth-images/brain-illustration.png"
                    alt="Brain character with glasses and lightbulb"
                    className=" w-[100px] h-[100px] md:w-[144px] lg:h-[144px] object-fit"
                />
            </div>
        </div>
    );
};

export default TitleBanner;