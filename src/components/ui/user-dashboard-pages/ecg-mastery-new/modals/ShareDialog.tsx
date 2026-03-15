import { useState } from "react";
import { X, Copy, Check, Mail, Link2, MessageCircle } from "lucide-react";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  topicName: string;
  topicId: string;
}

export function ShareDialog({
  isOpen,
  onClose,
  topicName,
  topicId,
}: ShareDialogProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}/ecg-study/${topicId}`;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailShare = () => {
    const subject = `ECG Study Notes: ${topicName}`;
    const body = `Check out these study notes on ${topicName}:\n\n${shareUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSMSShare = () => {
    const message = `Check out these ECG study notes on ${topicName}: ${shareUrl}`;
    window.location.href = `sms:?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Share Topic</h2>
            <p className="text-sm text-gray-600 mt-1">"{topicName}"</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Share Link */}
        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share Link
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-sm"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="px-6 pb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Share Via
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={handleEmailShare}
              className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <Mail className="size-6 text-gray-600 group-hover:text-blue-600" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                Email
              </span>
            </button>

            <button
              onClick={handleSMSShare}
              className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <MessageCircle className="size-6 text-gray-600 group-hover:text-blue-600" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                SMS
              </span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors group"
            >
              <Link2 className="size-6 text-gray-600 group-hover:text-blue-600" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                Copy Link
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
