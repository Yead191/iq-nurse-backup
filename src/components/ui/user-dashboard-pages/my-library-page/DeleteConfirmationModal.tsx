"use client";

import { Modal } from "antd";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={380}
      className="custom-delete-modal"
    >
      <h2 className="text-lg font-semibold text-red-600 mb-4 text-center">
        Delete Folder
      </h2>

      <div className="text-center mb-6">
        <p className="text-gray-900 font-medium mb-2">
          Sure you want to delete folder?
        </p>
        <p className="text-gray-500 text-sm">
          You will lose all material and progress.
        </p>
        <p className="text-gray-500 text-sm">This action cannot be undone.</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
        >
          Yes, Delete
        </button>
      </div>
    </Modal>
  );
}
