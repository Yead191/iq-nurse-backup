"use client";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
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
      </div>
    </div>
  );
}
