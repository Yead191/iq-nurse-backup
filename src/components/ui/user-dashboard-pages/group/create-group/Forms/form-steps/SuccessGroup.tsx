import { Button } from "antd";

export const SuccessGroup = () => {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-12 bg-white rounded-xl text-center">
      {/* Celebration Icon */}
      <div className="mb-8 text-[80px] -rotate-15">
        🎉
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold text-[#262626] mb-4 leading-tight max-w-[600px]">
        Study Group Created Successfully!
      </h1>

      <p className="text-lg text-[#595959] mb-10 leading-relaxed max-w-[500px]">
        Your study group is now live and invitations have been sent!
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 border-blue-500 rounded-lg h-12 px-8 text-base font-medium"
          onClick={() => {
            // Navigate to group page
            console.log("Navigate to my group");
          }}
        >
          Go to My Group
        </Button>

        <Button
          size="large"
          className="rounded-lg h-12 px-8 text-base font-medium bg-gray-600 border-gray-600 text-white"
          onClick={() => {
            // Reset form or navigate to create another
            console.log("Create another group");
          }}
        >
          Create Another
        </Button>
      </div>

      {/* Optional: Add some floating decorative elements */}
      <div className="absolute top-[20%] left-[15%] text-2xl opacity-30 animate-float">
        ✨
      </div>
      
      <div className="absolute top-[30%] right-[20%] text-xl opacity-30 animate-float-reverse">
        🎊
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};