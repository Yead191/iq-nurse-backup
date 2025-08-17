import SearchInput from "../SearchInput";
import Conversations from "./Conversations";

const ChatDetails = () => {
    return (
    <div className="w-full lg:h-[calc(100vh-140px)] h-[calc(100vh-192px)] flex flex-col ">
      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto">
        <Conversations />
      </div>

      {/* Input fixed at bottom */}
      <div className="w-full bg-white">
        <SearchInput />
      </div>
    </div>
    );
};

export default ChatDetails;