"use client";

import type React from "react";
import { useState } from "react";
import { Modal, message } from "antd";
import EventCard from "./EventCard";
import { eventTypes } from "@/data/eventTypes";
import AddTaskModal from "./AddTaskModal";
import AddClassesModal from "./AddClassesModal";
import AddAssignmentModal from "./AddAssignmentModal";
import AddStudyTimeModal from "./AddStudyTimeModal";
import AddExamModal from "./AddExamModal";
import AddMeTimeModal from "./AddMeTimeModal";
import AddMeetingModal from "./AddMeetingModal";

interface AddEventsModalProps {
  visible: boolean;
  onClose: () => void;
}

// Clipboard with pencil icon component

const AddEventsModal: React.FC<AddEventsModalProps> = ({
  visible,
  onClose,
}) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [classesModalOpen, setClassesModalOpen] = useState(false);
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [studyTimeModalOpen, setStudyTimeModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [meTimeModalOpen, setMeTimeModalOpen] = useState(false);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);

  const handleEventAdd = async (eventType: string) => {
    setLoadingStates((prev) => ({ ...prev, [eventType]: true }));

    try {
      // You can add your specific logic here for each event type
      switch (eventType) {
        case "Add a Tasks":
          // Handle tasks logic
          setTaskModalOpen(true);
          // console.log("task clicked");
          break;
        case "Add Classes":
          // Handle classes logic
          // console.log("Classes clicked");
          setClassesModalOpen(true);
          break;
        case "Add Assignment":
          // Handle assignment logic
          setAssignmentModalOpen(true);
          break;
        case "Add Study Time":
          // Handle study time logic
          setStudyTimeModalOpen(true);
          break;
        case "Add Exams":
          // Handle exams logic
          setExamModalOpen(true);
          break;
        case "Add Clinical":
          // Handle clinical logic

          break;
        case "Add Me Time":
          // Handle clinical logic
          setMeTimeModalOpen(true);
          break;
        case "Add Meetings":
          // Handle clinical logic
          setMeetingModalOpen(true);
          break;
        default:
          break;
      }
    } catch (error) {
      message.error(`Failed to add ${eventType}`);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [eventType]: false }));
    }
  };

  return (
    <>
      <Modal
        title={
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">
              Add Events
            </span>
          </div>
        }
        open={visible}
        onCancel={onClose}
        footer={null}
        width={800}
        centered
        className="add-events-modal"
      >
        <div className="py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 h-[70vh] overflow-auto">
          {eventTypes.map((event, index) => (
            <div key={index}>
              <EventCard
                event={event}
                onAdd={() => handleEventAdd(event.title)}
                loading={loadingStates[event.title]}
              />
            </div>
          ))}
        </div>
      </Modal>
      <AddTaskModal
        open={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
      />
      <AddClassesModal
        open={classesModalOpen}
        onClose={() => setClassesModalOpen(false)}
      />
      <AddAssignmentModal
        open={assignmentModalOpen}
        onClose={() => setAssignmentModalOpen(false)}
      />
      <AddStudyTimeModal
        open={studyTimeModalOpen}
        onClose={() => setStudyTimeModalOpen(false)}
      />
      <AddExamModal
        open={examModalOpen}
        onClose={() => setExamModalOpen(false)}
      />
      <AddMeTimeModal
        open={meTimeModalOpen}
        onClose={() => setMeTimeModalOpen(false)}
      />
      <AddMeetingModal
        open={meetingModalOpen}
        onClose={() => setMeetingModalOpen(false)}
      />
    </>
  );
};

export default AddEventsModal;
