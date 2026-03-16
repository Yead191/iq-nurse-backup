import { useState } from "react";
import { X, Copy, Check, Mail, MessageCircle, Share2 } from "lucide-react";
import { Button } from "antd";

interface ShareTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
}

export function ShareTopicModal({
  isOpen,
  onClose,
  topicTitle,
}: ShareTopicModalProps) {
  const [copied, setCopied] = useState(false);

  // Generate a shareable link (in a real app, this would be a proper URL)
  const shareUrl = `${window.location.origin}${window.location.pathname}?topic=${encodeURIComponent(topicTitle)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(
      `Check out this NCLEX study topic: ${topicTitle}`,
    );
    const body = encodeURIComponent(
      `I found this helpful study topic on Diagnostic Tests & Laboratory Values:\n\n${topicTitle}\n\n${shareUrl}`,
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  const handleSMSShare = () => {
    const text = encodeURIComponent(
      `Check out this NCLEX study topic: ${topicTitle}\n${shareUrl}`,
    );
    window.open(`sms:?body=${text}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5 text-[#2C5F8D]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Share Topic
              </h2>
              <p className="text-sm text-gray-600">{topicTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Copy Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 text-gray-600 focus:outline-none"
              />
              <Button
                onClick={handleCopyLink}
                size="small"
                className={`${
                  copied
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-[#2C5F8D] hover:bg-[#234a6d] "
                } text-white transition-colors !h-10`}
              >
                {copied ? (
                  <div className="flex items-center justify-center h-full">
                    <Check className="w-4 h-4 mr-1" />
                    Copied
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Share Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Share via
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Email */}
              <button
                onClick={handleEmailShare}
                className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-gray-600 group-hover:text-[#2C5F8D]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#2C5F8D]">
                  Email
                </span>
              </button>

              {/* SMS */}
              <button
                onClick={handleSMSShare}
                className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-gray-600 group-hover:text-[#2C5F8D]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#2C5F8D]">
                  Message
                </span>
              </button>
            </div>
          </div>

          {/* Info Text */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-800">
              💡 Share this topic with your study group or classmates to help
              them prepare for the NCLEX exam!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <Button onClick={onClose} variant="outlined" className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
