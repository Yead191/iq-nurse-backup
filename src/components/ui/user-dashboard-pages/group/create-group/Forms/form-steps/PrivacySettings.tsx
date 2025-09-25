import { Col, Row, Form, Select, Radio, Space } from "antd";

const styles = {
    container: {
        padding: "24px",
        background: "#ffff",
        borderRadius: "8px"
    },
    header: {
        marginBottom: "32px"
    },
    headerTitle: {
        display: "flex",
        alignItems: "center",
        marginBottom: "8px"
    },
    emoji: {
        fontSize: "18px",
        marginRight: "8px"
    },
    title: {
        margin: 0,
        fontSize: "18px",
        fontWeight: "600",
        color: "#262626"
    },
    description: {
        margin: 0,
        color: "#595959",
        fontSize: "14px"
    },
    formLabel: {
        fontWeight: "500",
        color: "#262626",
        fontSize: "14px",
        marginBottom: "12px",
        display: "block"
    },
    radioOption: {
        display: "block",
        padding: "16px",
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        margin: 0
    },
    radioContent: {
        marginLeft: "8px"
    },
    radioHeader: {
        display: "flex",
        alignItems: "center",
        marginBottom: "4px"
    },
    radioTitle: {
        fontSize: "14px",
        color: "#262626"
    },
    radioDescription: {
        margin: 0,
        fontSize: "13px",
        color: "#595959",
        lineHeight: "1.4"
    },
    select: {
        width: "100%",
        borderRadius: "6px"
    }
};

export const PrivacySettings = () => {
    const groupSizeOptions = [
        { value: "small", label: "Small (5 members)" },
        { value: "medium", label: "Medium (15 members)" },
        { value: "large", label: "Large (30 members)" },
        { value: "extra-large", label: "Extra Large (50+ members)" },
    ];

    const privacyOptions = [
        {
            value: "public",
            icon: "🌍",
            title: "Public Group",
            description: "Anyone can find and join your group. Great for building a large community.",
            isHighlighted: true
        },
        {
            value: "private",
            icon: "🔒",
            title: "Private Group",
            description: "Only invited members can join. Perfect for close study circles",
            isHighlighted: false
        },
        {
            value: "school",
            icon: "🏫",
            title: "School Only",
            description: "Only students from your school can find and join",
            isHighlighted: false
        }
    ];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.headerTitle}>
                    <span style={styles.emoji}>🔒</span>
                    <h3 style={styles.title}>Privacy Settings</h3>
                </div>
                <p style={styles.description}>Set up how your group will operate</p>
            </div>
            <div style={{ marginBottom: "32px" }}>
                <Form.Item
                    name="groupPrivacy"
                    label={<span style={styles.formLabel}>Group Privacy</span>}
                    rules={[{ required: true, message: "Please select group privacy setting" }]}
                    style={{ marginBottom: "24px" }}
                >
                    <Radio.Group className="w-full">
                        <Space direction="vertical" className="w-full" size={12}>
                            {privacyOptions.map(option => (
                                <Radio
                                    key={option.value}
                                    value={option.value}
                                    style={{
                                        ...styles.radioOption,
                                        display: 'flex'
                                    }}
                                >
                                    <div style={{
                                        ...styles.radioContent,
                                        flex: 1
                                    }}>
                                        <div style={{
                                            ...styles.radioHeader,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start'
                                        }}>
                                            <span style={styles.emoji}>{option.icon}</span>
                                            <span style={styles.radioTitle}>{option.title}</span>
                                        </div>
                                    </div>
                                    <p style={styles.radioDescription}>{option.description}</p>

                                </Radio>

                            ))}
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </div>

            <div>
                <Form.Item
                    name="maxGroupSize"
                    label={<span style={styles.formLabel}>Maximum Group Size</span>}
                    rules={[{ required: true, message: "Please select maximum group size" }]}
                >
                    <Select
                        placeholder="Medium (15 members)"
                        size="large"
                        options={groupSizeOptions}
                        style={{
                            borderRadius: "8px"
                        }}
                    />
                </Form.Item>
            </div>
        </div>
    );
};