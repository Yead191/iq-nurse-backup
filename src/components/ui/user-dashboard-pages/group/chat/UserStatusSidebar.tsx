import { Avatar } from "antd";
import { useState } from "react";

interface User {
    id: string;
    name: string;
}


const UserStatusSidebar = () => {

    const [onlineUsers] = useState<User[]>([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
    ]);
    const [offlineUsers] = useState<User[]>([
        { id: "4", name: "Sarah Williams" },
        { id: "5", name: "Tom Brown" },
    ]);

    const [activeUsers] = useState<User[]>([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "26", name: "Michael Chen" },

    ]);

    return (
        <div className=" bg-gray-100 p-4 h-[calc(100vh-70px)] w-[200px] overflow-y-auto hidden md:block ">
            <div className="mb-6">
                <h3 className="font-semibold mb-2">ONLINE (4)</h3>
                <div className="space-y-2">
                    {onlineUsers.map(user => (
                        <div key={user.id} className="flex items-center gap-2">
                            <Avatar size="default" style={{ backgroundColor: '#52c41a' }}>
                                {user.name.charAt(0)}
                            </Avatar>
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">OFFLINE (4) </h3>
                <div className="space-y-2">
                    {offlineUsers.map(user => (
                        <div key={user.id} className="flex items-center gap-2">
                            <Avatar size="default" style={{ backgroundColor: '#ddd' }}>
                                {user.name.charAt(0)}
                            </Avatar>
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">ACTIVE (3)</h3>
                <div className="space-y-2">
                    {activeUsers.map(user => (
                        <div key={user.id} className="flex items-center gap-2">
                            <Avatar size="default" style={{ backgroundColor: '#1890ff' }}>
                                {user.name.charAt(0)}
                            </Avatar>
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserStatusSidebar;
