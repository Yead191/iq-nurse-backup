import { Button, Empty } from "antd";
import { FaClock, FaRedoAlt, FaVideo } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IProps {
  skills: any[];
  setIsSideBarSelect?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClinicalSkills({ skills, setIsSideBarSelect }: IProps) {
  const router = useRouter();

  if (!skills?.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-190px)] overflow-y-auto space-y-4">
        <Empty description="No skills found" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-0 relative mt-2 md:mt-0 max-h-[calc(100vh-70px)] md:max-h-[calc(100vh-125px)] overflow-y-auto">
      <div className="w-full">
        <div>
          {skills.map(({ id, name, description, duration, status }, index) => (
            <div
              onClick={() => router.push(`/profile/clinicals/details/${id}`)}
              key={index + 1}
              className="cursor-pointer"
            >
              <div className="border border-gray-300 mb-3 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:shadow-md transition-shadow">
                {/* Left section */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex items-center gap-2 w-[32px] ">
                    <Image
                      src="/assets/icons/header/task.svg"
                      alt="NCLEX"
                      width={50}
                      height={50}
                      draggable={false}
                      className="w-full md:w-fit h-[24px] object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-1 text-wrap">
                      {description.length > 50
                        ? description.slice(0, 100) + "..."
                        : description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                      <span className="flex items-center gap-1">
                        <FaClock /> 5 min
                      </span>
                      <span className="flex items-center gap-1">
                        <FaRedoAlt /> 8/5 attempts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100">
                    <FaVideo /> Tutorials
                  </button>
                  <button
                    className={
                      "flex items-center gap-1 rounded-md px-4 py-2 font-medium whitespace-nowrap    text-white bg-gradient-to-r to-blue-900 from-blue-600 shadow-md hover:opacity-90 hover:scale-[1.02]   transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/4 "
                    }
                  >
                    {status === "completed" && (
                      <>
                        <FaCircleCheck className="text-white" /> Completed
                      </>
                    )}

                    {status === "in_progress" && "In Progress"}
                    {status === "not_started" && "Not Started"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
