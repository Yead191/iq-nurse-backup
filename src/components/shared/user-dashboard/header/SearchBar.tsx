import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import VoiceToText from "../../VoiceToText";

export default function SearchBar() {
  const [text, setText] = useState<string>("");

  return (
    <Input
      size="large"
      allowClear
      placeholder="What do you want to study.."
      prefix={<SearchOutlined style={{ color: "#7B7B7B", fontSize: 20 }} />}
      suffix={<VoiceToText setText={setText} />}
      style={{
        backgroundColor: "#F6F7F8",
      }}
      className="h-12 max-w-[500px] rounded-2xl  outline-none"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
