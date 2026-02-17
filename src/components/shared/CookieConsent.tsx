"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";
import { Button } from "antd";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set("cookie_consent", "all", { expires: 365 });
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    Cookies.set("cookie_consent", "necessary", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[900px] z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-50/50 overflow-hidden">
        <div className="p-4 lg:p-6  flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2C5F8D]">
              <Cookie size={24} />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#1e3a5f]">
                We value your privacy
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[700px]">
                We use cookies to enhance your experience, analyze site traffic,
                and assist in our marketing efforts. By clicking "Accept All",
                you consent to our use of cookies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                onClick={handleAcceptAll}
                className="!bg-primary !text-white !border-none h-8 lg:!h-11 !px-8 !rounded-xl !font-semibold hover:!opacity-90 transition-opacity"
              >
                Accept All
              </Button>
              <Button
                onClick={handleNecessaryOnly}
                variant="outlined"
                className="h-8 lg:!h-11 !px-6 !rounded-xl !border-gray-200 !text-gray-600 !font-semibold hover:!border-primary hover:!text-primary"
              >
                Necessary Only
              </Button>
              <Button
                type="text"
                className="h-8 lg:!h-11 !px-4 !text-gray-500 !font-semibold hover:!text-primary"
              >
                Customize
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
