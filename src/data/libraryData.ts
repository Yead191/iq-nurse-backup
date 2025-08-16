import { LibraryData } from "./types";

export const libraryData: LibraryData = {
  folders: [
    {
      id: "1",
      name: "Medical Surgical",
      color: "blue",
      topicCount: 5,
      pages: [
        {
          id: "1-1",
          title: "Airway and lungs",
          subtitle: "Respiratory system fundamentals",
          isBookmarked: true,
          content: {
            image:
              "https://i.ibb.co.com/RkXVFTGd/73d3eb193bd100349992b45cba786c7b72633220.png",
          },
        },
        {
          id: "1-2",
          title: "Cardiovascular System",
          subtitle: "Heart and blood vessels",
          isBookmarked: false,
          content: {
            image:
              "https://i.ibb.co.com/RkXVFTGd/73d3eb193bd100349992b45cba786c7b72633220.png",
          },
        },
      ],
    },
    {
      id: "2",
      name: "Pharmacology",
      color: "orange",
      topicCount: 3,
      pages: [
        {
          id: "2-1",
          title: "Drug Classifications",
          subtitle: "Basic pharmacology principles",
          isBookmarked: true,
          content: {
            image:
              "https://i.ibb.co.com/RkXVFTGd/73d3eb193bd100349992b45cba786c7b72633220.png",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Mental Health",
      color: "blue",
      topicCount: 8,
      pages: [],
    },
    {
      id: "4",
      name: "OB/Maternity",
      color: "orange",
      topicCount: 5,
      pages: [],
    },
    {
      id: "5",
      name: "My",
      color: "red",
      topicCount: 3,
      pages: [],
    },
  ],
};
