import { Button } from "antd";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AddEvent() {
  return (
    <div className="p-2">
      <div className="min-h-[70vh] flex flex-col gap-4 justify-center items-center ">
        <Image
          src={"/assets/auth-images/brain-illustration.png"}
          alt="brain illustration"
          width={246}
          height={246}
          className="w-full "
        />
        <div className="text-center">
          <h3 className="text-[18px] text-[#333333] ">No Upcoming Events</h3>
          <div className="flex justify-center item-center mt-3">
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                height: 38,
                backgroundColor: "#003877",
                color: "#FFFFFF",
                borderRadius: 10,
              }}
              icon={<Plus size={16} className="mt-1.5" />}
            >
              Add Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
