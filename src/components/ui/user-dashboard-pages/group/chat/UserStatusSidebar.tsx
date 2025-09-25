import { useState } from "react";

interface User {
    id: string;
    name: string;
}


const UserStatusSidebar = () => {

    const [onlineUsers] = useState<User[]>([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "3", name: "Mike Johnson" },
        { id: "6", name: "Alice Cooper" },
        { id: "7", name: "Bob Wilson" },
        { id: "8", name: "Carol Taylor" },
        { id: "9", name: "David Miller" },
        { id: "10", name: "Eve Anderson" },
        { id: "11", name: "Frank Thomas" },
        { id: "12", name: "Grace Lee" },
        { id: "13", name: "Henry Clark" },
        { id: "14", name: "Iris White" },
        { id: "15", name: "Jack Brown" },
    ]);
    const [offlineUsers] = useState<User[]>([
        { id: "4", name: "Sarah Williams" },
        { id: "5", name: "Tom Brown" },
        { id: "16", name: "Linda Martinez" },
        { id: "17", name: "Peter Wright" },
        { id: "18", name: "Susan Jones" },
        { id: "19", name: "Ryan Davis" },
        { id: "20", name: "Emma Wilson" },
        { id: "21", name: "James Taylor" },
        { id: "22", name: "Olivia Moore" },
        { id: "23", name: "William Harris" },
        { id: "24", name: "Sophie Turner" },
        { id: "25", name: "Daniel Lewis" }
    ]);

    const [activeUsers] = useState<User[]>([
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
        { id: "26", name: "Michael Chen" },
        { id: "27", name: "Rachel Green" },
        { id: "28", name: "Kevin Park" },
        { id: "29", name: "Anna Thompson" },
        { id: "30", name: "Chris Martin" },
        { id: "31", name: "Diana Ross" },
        { id: "32", name: "George Baker" },
        { id: "33", name: "Helen Young" },
        { id: "34", name: "Ian Foster" },
        { id: "35", name: "Julia Reed" }
    ]);

    return (
        <div className=" bg-gray-100 p-4 h-[calc(100vh-120px)] w-[170px] overflow-y-auto">
            <div className="mb-6">
                <h3 className="font-semibold mb-2">ONLINE (4)</h3>
                <div className="space-y-2">
                    {onlineUsers.map(user => (
                        <div key={user.id} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">OFFLINE (4) </h3>
                <div className="space-y-2">
                    {offlineUsers.map(user => (
                        <div key={user.id} className="flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-2">ACTIVE (3)</h3>
                <div className="space-y-2">
                    {activeUsers.map(user => (
                        <div key={user.id} className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserStatusSidebar;
