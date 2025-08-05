export interface featuresProps {
  id: any;
  title: string;
  description: string;
  iconBg?: string;
  borderColor?: string;
}
export const features: featuresProps[] = [
  {
    id: 1,
    title: "Fermentum amet",
    description:
      "Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.",
    iconBg: "bg-red-500",
    borderColor: "border-red-300",
  },
  {
    id: 2,
    title: "Dignissim quam",
    description:
      "Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.",
    iconBg: "bg-yellow-500",
    borderColor: "border-yellow-300",
  },
  {
    id: 3,
    title: "Risus morbi",
    description:
      "Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est elit odio at augue consequat.",
    iconBg: "bg-blue-500",
    borderColor: "border-blue-300",
  },
];
