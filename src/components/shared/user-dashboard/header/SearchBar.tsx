import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export default function SearchBar() {
  return (
    <Input
      size="large"
      allowClear
      placeholder="What do you want to study.."
      prefix={<SearchOutlined style={{ color: "#7B7B7B", fontSize: 20 }} />}
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
      style={{
        backgroundColor: "#F6F7F8",
      }}
      className="h-12 max-w-[500px] rounded-2xl  outline-none"
    />
  );
}
