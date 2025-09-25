export interface InstagramPost {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image:
      "https://i.ibb.co.com/S4B2HXVq/32520188b16b6dd053031bdb13cf044ef627f4ce.jpg",
    caption: "Today's study focus: Cardiac medications and their...",
    likes: 524,
    comments: 8,
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/sJPQQyGM/f033651dd7b7f188a0c1b0820b01d7f4d34b14d7.jpg",
    caption: "Essential skills check-off day! IV insertion practice with...",
    likes: 324,
    comments: 12,
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/jvHfFsX6/ac770225733bc4196e8369bfa4710a5113244c66.jpg",
    caption: "Colour-coding my notes helps me remember key...",
    likes: 456,
    comments: 15,
  },
  {
    id: 4,
    image:
      "https://i.ibb.co.com/xtBsyRft/aaf4811753e18f9fd6dbc091cb772ec4c7a8d1f5.jpg",
    caption: "Learning to identify different heart sounds today. S1, S2...",
    likes: 678,
    comments: 23,
  },
  {
    id: 5,
    image:
      "https://i.ibb.co.com/fYWDNGtz/27342ac6292fb7d2b87647841f5fab093bda09f6.jpg",
    caption: "Lab day! Practicing wound care techniques with my...",
    likes: 389,
    comments: 9,
  },
  {
    id: 6,
    image:
      "https://i.ibb.co.com/3mHKFPXN/c5bba381ec1080ba08e8311684ffaa3e1b2ee3b0.jpg",
    caption: "NCLEX Prep mode activated! 100 questions a day keeps...",
    likes: 712,
    comments: 18,
  },
];