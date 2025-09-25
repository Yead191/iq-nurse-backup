import { Col, Row, Form, Select, Checkbox } from "antd";

export const StudyFocus = () => {
  // Study areas with emojis
  const studyAreas = [
    { value: "nclex", label: "📝 NCLEX Preparation", emoji: "📝" },
    { value: "pharmacology", label: "💊 Pharmacology", emoji: "💊" },
    { value: "pathophysiology", label: "🔬 Pathophysiology", emoji: "🔬" },
    { value: "medical-surgical", label: "🏥 Medical-Surgical", emoji: "🏥" },
    { value: "pediatrics", label: "Pediatrics", emoji: "" },
    { value: "maternity", label: "🤰 Maternity/OB", emoji: "🤰" }
  ];

  // Schedule preference options
  const scheduleOptions = [
    { value: "morning", label: "Morning (6 AM - 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM - 6 PM)" },
    { value: "evening", label: "Evening (6 PM - 12 AM)" },
    { value: "late-night", label: "Late Night (12 AM - 6 AM)" },
    { value: "weekdays", label: "Weekdays Only" },
    { value: "weekends", label: "Weekends Only" },
    { value: "flexible", label: "Flexible / Any Time" }
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
          <span style={{ fontSize: "18px", marginRight: "8px" }}>🎯</span>
          <h3 style={{ 
            margin: 0, 
            fontSize: "18px", 
            fontWeight: "600",
            color: "#262626"
          }}>
            Study Focus
          </h3>
        </div>
        <p style={{ 
          margin: 0, 
          color: "#595959",
          fontSize: "14px"
        }}>
          What will your group focus on?(Select all that apply)
        </p>
      </div>

      {/* Primary Study Areas */}
      <div style={{ marginBottom: "28px" }}>
        <Form.Item
          name="primaryStudyAreas"
          label={
            <span style={{ 
              fontWeight: "500",
              color: "#262626",
              fontSize: "14px"
            }}>
              Primary Study Areas
            </span>
          }
          rules={[
            { 
              required: true, 
              message: "Please select at least one study area" 
            }
          ]}
        >
          <Checkbox.Group style={{ width: "100%" }}>
            <Row gutter={[16, 16]}>
              {studyAreas.map((area, index) => (
                <Col xs={24} sm={12} key={area.value}>
                  <div style={{
                    border: "1px solid #e8e8e8",
                    borderRadius: "6px",
                    backgroundColor: "#fafafa",
                    padding: "4px"
                  }}>
                    <Checkbox 
                      value={area.value}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                        width: "100%",
                        fontSize: "14px"
                      }}
                    >
                      <span style={{ marginLeft: "8px" }}>
                        {area.emoji && <span style={{ marginRight: "6px" }}>{area.emoji}</span>}
                        {area.label.replace(/^[^a-zA-Z]*\s*/, '')}
                      </span>
                    </Checkbox>
                  </div>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </div>

      {/* Study Schedule Preference */}
      <div>
        <Form.Item
          name="studySchedule"
          label={
            <span style={{ 
              fontWeight: "500",
              color: "#262626",
              fontSize: "14px"
            }}>
              Study Schedule Preference
            </span>
          }
          rules={[
            { 
              required: true, 
              message: "Please select your study schedule preference" 
            }
          ]}
        >
          <Select
            placeholder="When do you prefer to study?"
            size="large"
            options={scheduleOptions}
            style={{
              width: "100%",
              borderRadius: "6px"
            }}
            styles={{
              popup: {
                root: {
                  borderRadius: "8px"
                }
              }
            }}
          />
        </Form.Item>
      </div>
    </div>
  );
};