import Header from "@/components/shared/user-dashboard/header/Header";
import CreateGroupSteps from "@/components/ui/user-dashboard-pages/group/create-group/CreateGroupPage";

const createGroupPage = () => {
    return (
        <>
            <Header />
            <section className="lg:pt-8 lg:pb-0 px-4  lg:px-5">

                <CreateGroupSteps />
            </section>
        </>
    );
};

export default createGroupPage;
