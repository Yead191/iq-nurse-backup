"use client";

import { Button } from "antd";
import { ChevronDown } from "lucide-react";
import ConceptTypeForm from "./ConceptTypeForm";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
}
interface FormValues {
  name: string;
  age: string;
  title: string;
  type: string;
  color: string;
  description: string;
  connectionStyle?: "straight" | "dotted" | "smoothstep" | "bezier";
}

interface MobileNotesDrawerProps {
  showForm: boolean;
  onToggleNotes: () => void;
  setFormData: (data: Partial<FormValues>) => void;
  addConceptNode: any;
}

export default function MobileFormDrawer({
  setFormData,
  showForm,
  onToggleNotes,
  addConceptNode,
}: MobileNotesDrawerProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white  transition-transform duration-300 ease-in-out ${
        showForm ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "90vh" }}
    >
      <div
        onClick={onToggleNotes}
        className="p-4 border-b border-gray-300  rounded-t-2xl bg-gray-100 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-gray-900">
          Tabs Information
        </h3>
        <Button size="small" className="!bg-primary !text-white">
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-4 max-h-[calc(100vh-240px)] overflow-y-auto ">
        <ConceptTypeForm setFormData={setFormData} onAddNode={addConceptNode} />
      </div>
    </div>
  );
}
