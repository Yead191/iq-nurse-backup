import GroupChatPageInfo from "@/components/ui/user-dashboard-pages/group/chat";

const GroupChatPage = ({ params }: { params: { groupId: string } }) => {
    return (
        <GroupChatPageInfo groupId={params.groupId} />
    );
};

export default GroupChatPage;
