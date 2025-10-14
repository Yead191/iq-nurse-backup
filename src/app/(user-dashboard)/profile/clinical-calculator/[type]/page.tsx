import CalculatorMainPanel from "@/components/ui/user-dashboard-pages/clinical-calculator/calculators";

interface PageProps {
  params: { type: string }
}

const calculatorPage = async ({ params }: PageProps) => {
    const { type } = await params;

    return <CalculatorMainPanel type={type} />;
}


export default calculatorPage;
