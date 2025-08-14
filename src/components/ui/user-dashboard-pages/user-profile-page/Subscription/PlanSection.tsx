const PlanSection = () => (
    <div className="bg-white p-6 rounded-lg  w-1/4 ml-6  border border-gray-200 ">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Current Plan</h2>
        <div className="text-green-600 mb-2">✓ You're subscribed to Studify Premium</div>
        <div className="text-gray-600 mb-4">Your subscription will expire on: <span className=" text-[#003877]"> December 22, 2025 </span>  
        </div>
        <button className="w-full bg-[#003877] text-white py-2 rounded mb-2 ">Renew Subscription</button>
        <button className="w-full bg-[#003877] text-white py-2 rounded mb-2 ">Cancel Subscription</button>
        <button className="w-full bg-[#003877] text-white py-2 rounded ">Upgrade Subscription</button>
    </div>
);

export default PlanSection;
