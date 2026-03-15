import Image from "next/image";
const ecgIcon = "/assets/icons/ecg/ecgIcon.svg";
export interface EcgItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: EcgItem[];
}

export const ecgItems: EcgItem[] = [
  {
    id: "foundations",
    label: "Foundations",
    icon: (
      <Image
        width={20}
        height={20}
        src={ecgIcon}
        alt=""
        className="h-[20px] w-fit object-contain"
      />
    ),
    children: [
      { id: "intro-conduction", label: "Intro to Conduction System" },
      { id: "ecg-waveforms", label: "ECG Waveforms & Intervals" },
      { id: "lead-placement", label: "ECG Lead Placement" },
      { id: "artifacts", label: "Artifacts & Troubleshooting" },
    ],
  },
  {
    id: "normal-sinus",
    label: "Normal & Sinus Rhythms",
    icon: (
      <Image
        width={20}
        height={20}
        src={ecgIcon}
        alt=""
        className="h-[20px] w-fit object-contain"
      />
    ),
    children: [
      { id: "nsr", label: "Normal Sinus Rhythm (NSR)" },
      { id: "sinus-tachycardia", label: "Sinus Tachycardia" },
      { id: "sinus-bradycardia", label: "Sinus Bradycardia" },
    ],
  },
  {
    id: "atrial-arrhythmias",
    label: "Atrial Arrhythmias",
    icon: (
      <Image
        width={20}
        height={20}
        src={ecgIcon}
        alt=""
        className="h-[20px] w-fit object-contain"
      />
    ),
    children: [
      { id: "afib", label: "Atrial Fibrillation (A-fib)" },
      { id: "aflutter", label: "Atrial Flutter" },
      { id: "svt", label: "Supraventricular Tachycardia (SVT)" },
      { id: "pac", label: "Premature Atrial Contraction (PAC)" },
      { id: "mat", label: "Multifocal Atrial Tachycardia (MAT)" },
      { id: "wap", label: "Wandering Atrial Pacemaker (WAP)" },
    ],
  },
  {
    id: "heart-blocks",
    label: "Heart Blocks",
    icon: (
      <Image
        width={20}
        height={20}
        src={ecgIcon}
        alt=""
        className="h-[20px] w-fit object-contain"
      />
    ),
    children: [
      { id: "first-degree", label: "First-Degree AV Block" },
      { id: "second-degree", label: "Second-Degree AV Block" },
      { id: "third-degree", label: "Third-Degree AV Block" },
    ],
  },
];
