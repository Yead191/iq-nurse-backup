import { Form, Input, Button, Tag, Space, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useLayoutEffect, useState } from "react";

export const InvitePeople = () => {
    const {invitedEmails} = JSON.parse(localStorage.getItem('formData') || '{}');
    const [inviteEmails, setInviteEmails] = useState<string[]>(invitedEmails || []);
    const [currentEmail, setCurrentEmail] = useState<string>("");

    const form = Form.useFormInstance();

    // Handle adding email to invite list
    const handleAddEmail = () => {
        if (currentEmail && !inviteEmails.includes(currentEmail)) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(currentEmail)) {
                setInviteEmails([...inviteEmails, currentEmail]);
                setCurrentEmail("");
            }
        }
    };

    console.log(inviteEmails.toString())
    // Handle removing email from invite list
    const handleRemoveEmail = (emailToRemove: string) => {
        setInviteEmails(inviteEmails.filter(email => email !== emailToRemove));
    };

    useLayoutEffect(() => {
        form.setFieldsValue({ invitedEmails: inviteEmails });
    }, [inviteEmails.length])


    return (
        <div style={{
            padding: "24px",
            background: "#ffff",
            borderRadius: "8px",
        }}>
            {/* Header Section */}
            <div style={{ marginBottom: "32px" }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px"
                }}>
                    <span style={{ fontSize: "18px", marginRight: "8px" }}>👥</span>
                    <h3 style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#262626"
                    }}>
                        Invite Members
                    </h3>
                </div>
                <p style={{
                    margin: 0,
                    color: "#595959",
                    fontSize: "14px"
                }}>
                    Start building your study community
                </p>
            </div>

            {/* Invite by Email Section */}
            <div style={{ marginBottom: "24px" }}>
                <Form.Item
                    name="invitedEmails"
                    label={
                        <span style={{
                            fontWeight: "500",
                            color: "#262626",
                            fontSize: "14px"
                        }}>
                            Invite by Email
                            <span style={{ color: "#ff4d4f", marginLeft: "2px" }}>*</span>
                        </span>
                    }
                    style={{ marginBottom: "16px" }}
                >
                    <div style={{ display: "flex", gap: "8px" }}>
                        <Input
                            placeholder="Enter Email Address"
                            size="large"
                            value={currentEmail}
                            onChange={(e) => setCurrentEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddEmail();
                                }
                            }}
                            style={{
                                flex: 1,
                                borderRadius: "6px",
                                border: "1px solid #d9d9d9"
                            }}
                        />
                        <Button
                            type="primary"
                            size="large"
                            icon={<PlusOutlined />}
                            onClick={handleAddEmail}
                        >
                            Add
                        </Button>
                    </div>
                </Form.Item>
            </div>

            {/* Invite Members List */}
            <div style={{ marginBottom: "24px" }}>
                <div style={{
                    marginBottom: "12px"
                }}>
                    <span style={{
                        fontWeight: "500",
                        color: "#262626",
                        fontSize: "14px"
                    }}>
                        Invite Members
                        <span style={{ color: "#ff4d4f", marginLeft: "2px" }}>*</span>
                    </span>
                </div>

                {/* Email List Display */}
                <div style={{
                    minHeight: "48px",
                    padding: "12px",
                    border: "1px solid #d9d9d9",
                    borderRadius: "6px",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                }}>
                    {inviteEmails.length === 0 ? (
                        <span style={{
                            color: "#bfbfbf",
                            fontSize: "14px",
                            fontStyle: "italic"
                        }}>
                            No emails added yet. Add emails above to invite members.
                        </span>
                    ) : (
                        inviteEmails.map((email, index) => (
                            <div key={index} style={{
                                padding: "8px 12px",
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #e8e8e8",
                                borderRadius: "4px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <span style={{ fontSize: "13px", color: "#666" }}>
                                    {email}
                                </span>
                                <Button
                                    size="small"
                                    danger
                                    style={{
                                        fontSize: "12px",
                                        height: "24px",
                                        borderRadius: "4px"
                                    }}
                                    onClick={() => handleRemoveEmail(email)}
                                >
                                    Remove
                                </Button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Hidden form item to store emails for form submission */}
            <Form.Item name="invitedEmails" >
                <Input value={JSON.stringify(inviteEmails)} type="hidden" />
            </Form.Item>
        </div>
    );
};