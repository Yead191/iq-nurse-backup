"use client";
import { Button, Grid } from "antd";
import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

interface VoiceToTextProps {
  setText: (text: string) => void;
  isChatBot?: boolean;
}
const VoiceToText = ({ setText, isChatBot }: VoiceToTextProps) => {
  const { lg } = Grid.useBreakpoint();
  const [listening, setListening] = useState<boolean>(false);
  let recognition = null;

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-us"; // only English
    // recognition.lang = "bn-in"; // only bangla
    // recognition.lang = "de-DE"; // only dutch
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setText(speechResult);
      setListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <Button
      onClick={startListening}
      disabled={listening}
      type="text"
      icon={<AudioOutlined />}
      style={
        isChatBot
          ? {
              backgroundColor: "transparent",
              borderRadius: 50,
              padding: "10px 14px",
              color: listening ? "red" : "#003877",
            //   border: listening ? "1px solid red" : "1px solid transparent",
            }
          : {
              backgroundColor: "#0038771A",
              borderRadius: lg ? 4 : 16,
              padding: 8,
              color: listening ? "red" : "#003877",
            }
      }
    />
  );
};

export default VoiceToText;
