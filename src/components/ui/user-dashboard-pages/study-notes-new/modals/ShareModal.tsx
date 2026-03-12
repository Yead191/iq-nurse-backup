import { useState } from "react";
import { X, Link2, Mail, MessageSquare, Check, Copy } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
}

export function ShareModal({ isOpen, onClose, topicTitle }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  // Generate a shareable link (in a real app, this would be a proper URL)
  const shareUrl = `https://iq-nurse.vercel.app/profile/study-notes/${topicTitle.toLowerCase().replace(/\s+/g, "-")}`;

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`NCLEX Study Note: ${topicTitle}`);
    const body = encodeURIComponent(
      `Check out this NCLEX study topic: ${shareUrl}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleSMSShare = () => {
    const message = encodeURIComponent(
      `NCLEX Study: ${topicTitle} - ${shareUrl}`,
    );
    window.location.href = `sms:?body=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-[#2C5F8D]">Share Topic</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-1">Sharing:</p>
            <p className="font-medium text-gray-900">{topicTitle}</p>
          </div>

          {/* Copy Link */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Share Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-600"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-md transition-all font-medium ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-[#2C5F8D] text-white hover:bg-[#234a6d]"
                }`}
              >
                {copied ? (
                  <Check className="size-5" />
                ) : (
                  <Copy className="size-5" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 mt-2">
                Link copied to clipboard!
              </p>
            )}
          </div>

          {/* Share Options */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Or share via:
            </p>

            <button
              onClick={handleEmailShare}
              className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors"
            >
              <div className="size-10 rounded-full bg-[#2C5F8D]/10 flex items-center justify-center">
                <Mail className="size-5 text-[#2C5F8D]" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-xs text-gray-500">Share via email</p>
              </div>
            </button>

            <button
              onClick={handleSMSShare}
              className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors"
            >
              <div className="size-10 rounded-full bg-[#FE5E7E]/10 flex items-center justify-center">
                <MessageSquare className="size-5 text-[#FE5E7E]" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Message</p>
                <p className="text-xs text-gray-500">Share via text message</p>
              </div>
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors"
            >
              <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center">
                <Link2 className="size-5 text-gray-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Copy Link</p>
                <p className="text-xs text-gray-500">Copy to clipboard</p>
              </div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6  bg-gray-50">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-[#2C5F8D] text-white rounded-md hover:bg-[#234a6d] transition-colors font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
