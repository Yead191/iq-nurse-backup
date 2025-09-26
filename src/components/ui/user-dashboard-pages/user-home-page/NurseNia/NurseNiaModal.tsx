import { Modal } from "antd";
import React from "react";
import NurseChat from "../../nurse-q/NurseChat";

export default function NurseNiaModal({ open, onClose }: any) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={1200}
      title={
        <span className="text-lg font-semibold text-gray-800">
          👋 Hi,Sarah!Ready to ace your nursing studies today?
        </span>
      }
      centered
    >
      <NurseChat />
    </Modal>
  );
}
