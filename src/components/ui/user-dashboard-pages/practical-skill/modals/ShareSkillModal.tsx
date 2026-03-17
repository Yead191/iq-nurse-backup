import { useState } from "react";
import { X, Copy, Check, Mail, MessageSquare } from "lucide-react";

interface ShareSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
  skillId: string;
}

export function ShareSkillModal({
  isOpen,
  onClose,
  skillName,
  skillId,
}: ShareSkillModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Create shareable link (in a real app, this would be your actual domain)
  const shareUrl = `${window.location.origin}?skill=${skillId}`;
  const shareText = `Check out this nursing skill: ${skillName}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Clinical Skill: ${skillName}`);
    const body = encodeURIComponent(
      `I wanted to share this clinical nursing skill with you:\n\n${skillName}\n\nView it here: ${shareUrl}`,
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  const handleSMSShare = () => {
    const body = encodeURIComponent(`${shareText}\n${shareUrl}`);
    window.open(`sms:?body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Share Skill</h2>
              <p className="text-sm text-gray-600 mt-1">"{skillName}"</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>
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
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-md transition-colors font-medium flex items-center gap-2 ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-[#2C5F8D] text-white hover:bg-[#234a6d]"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="size-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
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
                className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-colors"
              >
                <Mail className="size-6 text-[#2C5F8D]" />
                <span className="text-sm font-medium text-gray-700">Email</span>
              </button>

              {/* SMS */}
              <button
                onClick={handleSMSShare}
                className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-colors"
              >
                <MessageSquare className="size-6 text-[#2C5F8D]" />
                <span className="text-sm font-medium text-gray-700">SMS</span>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-gray-700">
              <span className="font-semibold text-[#2C5F8D]">💡 Tip:</span>{" "}
              Share this skill with your study group or classmates to help them
              learn too!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
