import GroupChatPageInfo from "@/components/ui/user-dashboard-pages/group/chat";

interface GroupChatPageProps {
    params: Promise<{
        groupId: string;
    }>;
}

const GroupChatPage = async ({ params }: GroupChatPageProps) => {
    const { groupId } = await params;

    return <GroupChatPageInfo groupId={groupId} />;
};

export default GroupChatPage;
