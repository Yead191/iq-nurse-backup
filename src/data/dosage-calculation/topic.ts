export type Topic =
  | "overview"
  | "practice-test"
  | "basic-dosage"
  | "iv-drip-rates"
  | "weight-based"
  | "pediatric"
  | "unit-conversion"
  | "insulin"
  | "concentration"
  | "titration";

import {
  Calculator,
  Droplet,
  Weight,
  Baby,
  ArrowRightLeft,
  Syringe,
  Beaker,
  TrendingUp,
  Home,
} from "lucide-react";

export const topics = [
  { id: "overview" as Topic, label: "Overview", icon: Home },
  {
    id: "basic-dosage" as Topic,
    label: "Basic Dosage Calculations",
    icon: Calculator,
  },
  { id: "iv-drip-rates" as Topic, label: "IV Drip Rates", icon: Droplet },
  { id: "weight-based" as Topic, label: "Weight-Based Dosing", icon: Weight },
  { id: "pediatric" as Topic, label: "Pediatric Dosages", icon: Baby },
  {
    id: "unit-conversion" as Topic,
    label: "Unit Conversions",
    icon: ArrowRightLeft,
  },
  { id: "insulin" as Topic, label: "Insulin Calculations", icon: Syringe },
  {
    id: "concentration" as Topic,
    label: "Concentration & Dilution",
    icon: Beaker,
  },
  {
    id: "titration" as Topic,
    label: "Titration Calculations",
    icon: TrendingUp,
  },
];
