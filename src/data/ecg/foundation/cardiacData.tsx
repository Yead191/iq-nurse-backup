import { Check, Stethoscope, Star } from "lucide-react";

const anatomySections = [
  {
    number: 1,
    title: "Sinoatrial (SA) Node",
    location: "Right atrium, near the superior vena cava",
    function:
      "The heart's natural pacemaker, generating electrical impulses at a rate of 60-100 beats per minute in adults. The SA node initiates each heartbeat by spontaneously depolarizing, creating an electrical impulse that spreads through both atria.",
    clinical:
      "When the SA node functions properly, the heart maintains normal sinus rhythm. Dysfunction can lead to sinus bradycardia, sinus tachycardia, or sick sinus syndrome.",
  },
  {
    number: 2,
    title: "Atrial Pathways",
    location: "Throughout both atria",
    function:
      "Specialized conduction pathways (Bachmann's bundle, internodal pathways) rapidly transmit the electrical impulse from the SA node throughout both atria, causing coordinated atrial contraction.",
    clinical:
      "Disruption of atrial pathways can lead to atrial arrhythmias such as atrial fibrillation or atrial flutter.",
  },
  {
    number: 3,
    title: "Atrioventricular (AV) Node",
    location: "Floor of the right atrium, near the interatrial septum",
    function:
      'Acts as a "gatekeeper" between the atria and ventricles. The AV node deliberately slows the electrical impulse (creating the PR interval on ECG), allowing time for the atria to fully contract and fill the ventricles with blood before ventricular contraction begins. The AV node can also serve as a backup pacemaker at 40-60 beats per minute if the SA node fails.',
    clinical:
      "AV node dysfunction results in heart blocks (first, second, or third degree), which can compromise cardiac output.",
  },
  {
    number: 4,
    title: "Bundle of His",
    location: "Interventricular septum",
    function:
      "A short bundle of specialized conduction fibers that transmits the impulse from the AV node into the ventricles. It quickly divides into the right and left bundle branches.",
    clinical:
      "Damage to the Bundle of His can cause complete heart block or bundle branch blocks.",
  },
  {
    number: 5,
    title: "Right and Left Bundle Branches",
    location:
      "Right bundle branch travels down the right side of the interventricular septum; left bundle branch divides into anterior and posterior fascicles on the left side",
    function:
      "Rapidly conduct the electrical impulse to the respective ventricles, ensuring synchronized ventricular contraction.",
    clinical:
      "Bundle branch blocks cause widened QRS complexes and altered ventricular depolarization patterns.",
  },
  {
    number: 6,
    title: "Purkinje Fibers",
    location: "Throughout the ventricular myocardium",
    function:
      "The final component of the conduction system, these fibers rapidly distribute the electrical impulse throughout the ventricular muscle, causing coordinated ventricular contraction from apex to base. Purkinje fibers can serve as a backup pacemaker at 20-40 beats per minute if higher pacemakers fail.",
    clinical:
      "Purkinje fiber irritability can cause premature ventricular contractions (PVCs) or ventricular arrhythmias.",
  },
];

const keyComponents = {
  title: "Key Components",
  defaultColor: "#22c55e",
  Icon: Check,
  description:
    "The cardiac conduction system consists of specialized cardiac muscle cells that can generate and conduct electrical impulses:",
  features: [],
};

const conductionSequence = {
  title: "Normal Conduction Sequence",
  defaultColor: "#1e5d8e",
  features: [
    "SA Node generates impulse (60-100 bpm)",
    "Atrial Pathways spread impulse through both atria → Atrial contraction",
    "AV Node delays impulse (0.12-0.20 seconds)",
    "Bundle of His transmits impulse to ventricles",
    "Bundle Branches conduct to left and right ventricles",
    "Purkinje Fibers distribute impulse throughout ventricles → Ventricular contraction",
  ],
};

const nursingImplications = {
  title: "Nursing Implications",
  defaultColor: "#3b82f6",
  Icon: Stethoscope,
  features: [
    "Monitor for conduction abnormalities: Changes in heart rate or rhythm may indicate conduction system dysfunction",
    "Assess medication effects: Many cardiac medications affect the conduction system (beta-blockers, calcium channel blockers, digoxin)",
    "Recognize backup pacemaker activation: Slower heart rates may indicate lower pacemaker sites taking over",
    "Understand pacemaker hierarchy: The fastest pacemaker normally controls the heart rate",
    "Identify risk factors: Ischemia, electrolyte imbalances, and structural heart disease can disrupt conduction",
  ],
};

const highYieldPoints = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "SA Node = Primary Pacemaker: Normal rate 60-100 bpm; failure leads to bradycardia",
    "AV Node Delay: Creates PR interval (0.12-0.20 sec); allows atrial kick for ventricular filling",
    "Pacemaker Hierarchy: SA node → AV node (40-60 bpm) → Purkinje fibers (20-40 bpm)",
    "Heart Blocks: Result from AV node dysfunction; third-degree is most serious",
    "Bundle Branch Blocks: Cause wide QRS (>0.12 sec); may indicate cardiac disease",
    "Medications Affecting Conduction: Beta-blockers, calcium channel blockers, and digoxin slow AV conduction",
    "Electrolyte Effects: Hyperkalemia slows conduction; hypokalemia increases irritability",
  ],
};

export {
  anatomySections,
  keyComponents,
  conductionSequence,
  nursingImplications,
  highYieldPoints,
};
