import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function SearchBar() {
  return (
    <Input
      size="large"
      allowClear
      placeholder="What do you want to study.."
      prefix={<SearchOutlined style={{ color: "#7B7B7B" }} />}
      suffix={
        <Button
          type="text"
          icon={<AudioOutlined />}
          style={{
            backgroundColor: "#0038771A",
            borderRadius: 4,
            padding: 8,
            color: "#003877",
          }}
        />
      }
      className="h-12 max-w-2xl rounded-2xl bg-[#F6F7F8] outline-none"
    />
  );
}
