import Header from "@/components/shared/user-dashboard/header/Header";
import OldMobileHeader from "@/components/ui/old-components/OldMobileHeader";
import CreateGroupSteps from "@/components/ui/user-dashboard-pages/group/create-group/CreateGroupPage";

const createGroupPage = () => {
  return (
    <section className="relative">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <OldMobileHeader />
      </div>
      <section className="pt-4 lg:pt-8 lg:pb-0 px-4  lg:px-5">
        <CreateGroupSteps />
      </section>
    </section>
  );
};

export default createGroupPage;
