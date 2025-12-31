import { CalendarEvent } from "@/data/calendarData";
import { Modal } from "antd";
import moment from "moment";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";

interface EventDetailsModalProps {
  event: CalendarEvent | null;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setSelectedEvent: (event: CalendarEvent | null) => void;
}

const EventDetailsModal = ({
  event,
  showModal,
  setShowModal,
  setSelectedEvent,
}: EventDetailsModalProps) => {
  if (!showModal || !event) return null;
  const formatTime = (date: Date) => {
    return moment(date).format("h:mm a");
  };

  const formatDate = (date: Date) => {
    return moment(date).format("D MMMM yyyy");
  };

  return (
    <Modal
      open={showModal}
      onCancel={() => {
        setShowModal(false), setSelectedEvent(null);
      }}
      width={400}
      closable={false}
      centered
      footer={false}
    >
      <div className=" flex items-center justify-center ">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className=" font-medium text-lg  text-black">{event.title}</h2>
            <div className="flex items-center gap-3">
              <button className="text-primary transition-colors">
                <FiEdit2 size={18} />
              </button>
              <button className="text-red-600 transition-colors">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-[#7B7B7B] text-sm flex items-center gap-2 ">
              <span>
                {" "}
                <FaRegClock />{" "}
              </span>
              <span className="">{formatTime(event.start)}</span>
              <span> - </span>
              <span className="">{formatTime(event.end)}</span>
            </div>

            <div className="text-gray-900  flex items-center gap-2 ">
              <span>
                {" "}
                <IoCalendarOutline />{" "}
              </span>
              <span className="">{formatDate(event.start)}</span>
              <span> - </span>
              <span className="">{formatDate(event.end)}</span>
            </div>

            {event.description && (
              <div>
                <span className="font-medium text-black">Description:</span>
                <p className="text-gray-800">{event.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => setShowModal(false)}
          className="bg-red-600 font-medium text-white px-4 py-1 rounded cursor-pointer"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default EventDetailsModal;
