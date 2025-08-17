import React from 'react';

interface ChatSession {
  title: string;
  date: string;
}

// Define props type
interface PreviousChatSessionProps {
  chatSessions: ChatSession[];
} 

const PreviousChatSession: React.FC<PreviousChatSessionProps> = ({ chatSessions }) => {
    return (
        <div className=' flex items-center justify-center'>
            <div className="lg:mt-8 mt-4 lg:w-1/2 w-full text-[#000000]/50">
                <div className="flex justify-between items-center lg:mb-4 mb-3">
                    <h2 className="lg:text-[15px] text-[10px] font-semibold ">Previous Chat Sessions</h2>
                    <button className="lg:text-[15px] text-[10px] font-medium">Show All</button>
                </div>

                <div className="lg:space-y-4 space-y-2">
                    {chatSessions.map((session:{title:string , date:string}, index:number) => (
                        <div key={index} className="flex justify-between items-center ">
                            <span className="font-normal lg:text-sm text-[10px]">{session.title}</span>
                            <span className="lg:text-sm text-[10px] ">{session.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreviousChatSession;