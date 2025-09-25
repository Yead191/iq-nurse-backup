import { Card, Alert } from "antd";
import { CheckCircleOutlined, RocketOutlined } from "@ant-design/icons";

export const Review = () => {
    const {groupName,groupPrivacy,school} = JSON.parse(localStorage.getItem('formData') || '{}');

    return (
        <div className="p-6 bg-white rounded-lg">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex items-center mb-2">
                    <CheckCircleOutlined className="text-lg mr-2 !text-green-500" />
                    <h3 className="m-0 text-lg font-semibold text-gray-800">
                        Review & Create
                    </h3>
                </div>
                <p className="m-0 text-gray-600 text-sm">
                    Review your study group details
                </p>
            </div>

            {/* Review Summary Card */}
            <Card
                className="mb-5 border border-gray-200 rounded-lg"
                styles={{ body: { padding: "16px" } }}
            >
                <div className="flex flex-col gap-3">
                    {/* Group Name */}
                    <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm">
                            Group Name:
                        </span>
                        <span className="text-gray-600 text-sm text-right max-w-[200px]">
                            {groupName || "Your Group Name"}
                        </span>
                    </div>

                    {/* School */}
                    <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm">
                            School:
                        </span>
                        <span className="text-gray-600 text-sm text-right max-w-[200px]">
                            {school || "Your Group"}
                        </span>
                    </div>

                    {/* Privacy */}
                    <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm">
                            Privacy:
                        </span>
                        <span className="text-gray-600 text-sm">
                            {groupPrivacy || "Public Group"}
                        </span>
                    </div>

                    {/* Max Size */}
                    <div className="flex justify-between py-2">
                        <span className="font-medium text-gray-800 text-sm">
                            Max Size:
                        </span>
                        <span className="text-gray-600 text-sm">
                            15 members
                        </span>
                    </div>
                </div>
            </Card>

            {/* Ready to Create Alert */}
            <div className="py-4">
                <Alert
                    message={
                        <div className="flex items-center ">
                            <RocketOutlined className="mr-2 text-blue-500" />
                            <span className="font-medium text-blue-500">
                                Ready to create your group!
                            </span>
                        </div>
                    }
                    description={
                        <span className="text-blue-500 text-sm">
                            Click "Create Group" to finalize and send invitations to your members.
                        </span>
                    }
                    type="info"
                    showIcon={false}
                    className="bg-blue-50 border border-blue-200 rounded-lg"
                />
            </div>
        </div>
    );
};