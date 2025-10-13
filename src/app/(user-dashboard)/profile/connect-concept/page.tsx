import Spinner from "@/components/shared/Spinner";
import ConceptFlow from "@/components/ui/user-dashboard-pages/connect-concept/concept-flow/ConceptFlow";
import React, { Suspense } from "react";

const ConnectConceptPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ConceptFlow />
    </Suspense>
  );
};

export default ConnectConceptPage;
