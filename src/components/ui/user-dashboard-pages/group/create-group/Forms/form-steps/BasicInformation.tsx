import { Col, Row, Form, Input, Select } from "antd";

export const BasicInformation = () => {
  // Define form fields configuration matching the screenshot
  const formFieldsConfig = [
    {
      name: "groupName",
      label: "Group Name",
      type: "input",
      required: true,
      colSpan: 24,
      placeholder: "e.g Pharmacology Warriors, Nclex prep squad",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      colSpan: 24,
      placeholder: "Tell others what your group is about.....",
      rows: 4,
    },
    {
      name: "school",
      label: "Your School/Program",
      type: "select",
      required: true,
      colSpan: 24,
      placeholder: "Select your school",
      options: [
        { value: "harvard-medical", label: "Harvard Medical School" },
        { value: "johns-hopkins", label: "Johns Hopkins University" },
        { value: "stanford-medicine", label: "Stanford School of Medicine" },
        { value: "mayo-clinic", label: "Mayo Clinic Alix School of Medicine" },
        { value: "ucla-medicine", label: "UCLA David Geffen School of Medicine" },
        { value: "other", label: "Other" },
      ],
    },
    {
      name: "yearLevel",
      label: "Your Year/Level",
      type: "select",
      required: true,
      colSpan: 24,
      placeholder: "Select your level",
      options: [
        { value: "year-1", label: "Year 1 / First Year" },
        { value: "year-2", label: "Year 2 / Second Year" },
        { value: "year-3", label: "Year 3 / Third Year" },
        { value: "year-4", label: "Year 4 / Fourth Year" },
        { value: "resident", label: "Resident" },
        { value: "fellow", label: "Fellow" },
        { value: "practicing", label: "Practicing Professional" },
      ],
    },
  ];

  return (
    <div style={{ 
      padding: "24px",
      background: "#ffff",
      borderRadius: "8px",
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          marginBottom: "8px" 
        }}>
          <span style={{ fontSize: "18px", marginRight: "8px" }}>📝</span>
          <h3 style={{ 
            margin: 0, 
            fontSize: "18px", 
            fontWeight: "600",
            color: "#262626"
          }}>
            Basic Information
          </h3>
        </div>
        <p style={{ 
          margin: 0, 
          color: "#595959",
          fontSize: "14px"
        }}>
          Let's start with the basics about your study group.
        </p>
      </div>

      {/* Form Fields */}
      <Row >
        {formFieldsConfig.map((field, index) => (
          <Col xs={24} key={index}>
            <Form.Item
              name={field.name}
              label={
                <span style={{ 
                  fontWeight: "500",
                  color: "#262626",
                  fontSize: "14px"
                }}>
                  {field.label}
                </span>
              }
              rules={
                field.required
                  ? [{ 
                      required: true, 
                      message: `${field.label} is required` 
                    }]
                  : []
              }
              style={{ marginBottom: "20px" }}
            >
              {field.type === "input" && (
                <Input 
                  placeholder={field.placeholder}
                  size="large"
                  style={{
                    borderRadius: "6px",
                    border: "1px solid #d9d9d9"
                  }}
                />
              )}

              {field.type === "textarea" && (
                <Input.TextArea 
                  rows={field.rows || 4} 
                  placeholder={field.placeholder}
                  size="large"
                  style={{
                    borderRadius: "6px",
                    border: "1px solid #d9d9d9",
                    resize: "none"
                  }}
                />
              )}

              {field.type === "select" && (
                <Select
                  placeholder={field.placeholder}
                  size="large"
                  options={field.options}
                  style={{
                    borderRadius: "6px"
                  }}
                />
              )}
            </Form.Item>
          </Col>
        ))}
      </Row>
    </div>
  );
};