import { useState } from "react";
import { X, Copy, Mail, MessageCircle, Check } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicName: string;
}

export function ShareModal({ isOpen, onClose, topicName }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}${window.location.pathname}`;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`NCLEX Study Notes: ${topicName}`);
    const body = encodeURIComponent(
      `Check out these NCLEX study notes on ${topicName}:\n\n${shareUrl}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleSMSShare = () => {
    const text = encodeURIComponent(
      `Check out these NCLEX study notes on ${topicName}: ${shareUrl}`,
    );
    window.location.href = `sms:?body=${text}`;
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Share Study Notes
            </h2>
            <p className="text-xs text-gray-600 mt-1">"{topicName}"</p>
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
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
              Share Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Share Options */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
              Share Via
            </label>
            <div className="space-y-2">
              <button
                onClick={handleEmailShare}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#2C5F8D]" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-xs text-gray-500">Share via email</p>
                </div>
              </button>

              <button
                onClick={handleSMSShare}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#2C5F8D]" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-700">
                    Text Message
                  </p>
                  <p className="text-xs text-gray-500">Share via SMS</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
