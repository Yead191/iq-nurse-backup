 export  const tabs = [
        {
            title: "Generate a comprehensive care plan with medications    ",
            iconImg: "/assets/user-dashboard-images/nurse-q/carePlan.png"
        },
        {
            title: "Generate a nursing drug card",
            iconImg: "/assets/user-dashboard-images/nurse-q/drugCard.png"
        },
        {
            title: "Help me solve this dosage calculation problem ",
            iconImg: "/assets/user-dashboard-images/nurse-q/calculation.png"
        },
        {
            title: "Review my essay and give me feedback   ",
            iconImg: "/assets/user-dashboard-images/nurse-q/essay.png"
        },
        {
            title: "Help me review the uploaded document and make it easy to understand ",
            iconImg: "/assets/user-dashboard-images/nurse-q/help.png"
        },
        {
            title: "How does my calendar look like today",
            iconImg: "/assets/user-dashboard-images/nurse-q/calendar.png"
        },
    ];


 export  const tabsData = {
        carePlanSessions: [
            { title: "Nursing Drug Card for Hypertension", date: "jul 28, 10:06 PM" },
            { title: "Nursing Drug Card for Diabetes", date: "jul 29, 08:30 AM" }
        ],
        drugCardSessions: [
            { title: "IV Fluid Dosage Calculation", date: "jul 28, 10:06 PM" },
            { title: "Insulin Dosage Calculation", date: "jul 29, 09:15 AM" }
        ],
        reviewEssaySessions: [
            { title: "Essay on Nursing Ethics", date: "jul 27, 03:45 PM" },
            { title: "Essay on Patient Safety", date: "jul 28, 06:00 PM" }
        ],
        dosageCalculationSessions: [
            { title: "Hypertension Care Plan and Medications", date: "jul 28, 10:06 PM" },
            { title: "IV Fluid Dosage Calculation", date: "jul 28, 10:06 PM" },
            { title: "Hypertension Care Plan and Medications", date: "jul 28, 10:06 PM" },
            { title: "IV Fluid Dosage Calculation", date: "jul 28, 10:06 PM" }
        ],
        uploadDocumentSessions: [
            { title: "Practice Questions for Hypertension", date: "jul 28, 10:06 PM" },
            { title: "Practice Questions for IV Fluids", date: "jul 28, 10:06 PM" }
        ],
        myCalenderSessions: [
            { title: "Today's Nursing Appointments", date: "jul 28, 08:00 AM" },
            { title: "Patient Consultations", date: "jul 28, 11:00 AM" }
        ]
    }; 


  export  const chatDetailsData = [
    {
        id: 1,
        question: "From here the user should have the ability to free chat with AI, load a single document and chat with that document or create a project which will bring them to the “My Projects” page allowing them to create a new project by uploading the data sources.",
        answer: <div className="text-[#000000] text-[12px] space-y-2 tracking-wide">  
            <div className=" text-sm font-medium"> Describing a system where users can interact with AI in three ways: </div>
            <div> <span className="font-medium"> Free Chat with AI – </span>  Users can directly chat with the AI without uploading any documents or creating a project. This is a general-purpose AI interaction. </div>
            <div> <span className="font-medium"> Chat with a Single Document –  </span> Users can upload one document and engage with the AI to extract insights, summarize, or ask specific questions related to that document. </div>
            <div> <span className="font-medium">  Create a Project – </span> This option takes users to the &quot;My Projects&quot; page, where they can set up a new project by uploading multiple data sources. This could be useful for managing multiple documents, datasets, or structured files. 
            </div>
            <div> <span className="font-medium">  Create a Project – </span> This option takes users to the &quot;My Projects&quot; page, where they can set up a new project by uploading multiple data sources. This could be useful for managing multiple documents, datasets, or structured files. 
            </div>
            <div className="font-semibold">  Implementation Considerations: </div>
            <div className=" pb-3"> <span className="font-medium">  User Flow: </span> The system should have a clear way to navigate between these options, such as a home screen with three distinct buttons. </div>
            <div className=" pb-3"><span className="font-medium">  Data Management: </span>  If users create a project, they should have a structured way to manage and revisit their uploaded data sources. </div>
            <div className=" pb-3"> <span className="font-medium">  AI Chat UX: </span>  For both free chat and document chat, a seamless interface with a text input, file viewer (for documents), and response history would be helpful. </div>
            <div className=" pb-3"> <span className="font-medium"> Security: </span>  Implementing secure authentication and authorization would be crucial to protect user data and privacy. </div>
            <div> <span className="font-medium">ChatGPT – </span>  For free AI chat experience</div>
            <div><span className="font-medium"> Chat with PDFs – </span>  Example of interacting with a single document</div>
            <div><span className="font-medium">  Notion AI – </span> Example of integrating AI with structured document-based workflows</div>
        </div>
    }
]
