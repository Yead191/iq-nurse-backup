import {
  Heart,
  Wind,
  Brain,
  Utensils,
  Activity,
  Bone,
  Scan,
  Droplet,
  ShieldPlus,
  Ear,
} from "lucide-react";
import { GiKidneys } from "react-icons/gi";

export const systemIcons = {
  cardiovascular: <Heart size={20} />,
  respiratory: <Wind size={20} />,
  neurological: <Brain size={20} />,
  gastrointestinal: <Utensils size={20} />,
  genitourinary: <GiKidneys size={20} className="text-xl" />,
  endocrine: <Activity size={20} />,
  musculoskeletal: <Bone size={20} />,
  integumentary: <Scan size={20} />,
  hematologic: <Droplet size={20} />,
  immune: <ShieldPlus size={20} />,
  heent: <Ear size={20} />,
};
