import { de } from "date-fns/locale"
import { title } from "process"

export const DashboardCardData = [
    {
        id: 1,
        title: "Start from Scratch",
        description: "Create a blank concept map and muild it your way",
        imgUrl: "/assets/concept-map/card1.png",
        link: "#",
        buttonText: "Create Blank Map"
    },
    {
        id: 2,
        title: "Use a Template",
        description: "Start with a pre-built template for common conditions",
        imgUrl: "/assets/concept-map/card2.png",
        link: "#",
        buttonText: "Browse Templates"
    }
]


export const RecentMapData = [
    {
        id: 1,
        title: "Diabetes Type 2",
        lastEdited: "Today",
        imgUrl: "/assets/concept-map/recentMapImg1.svg",
    },
    {
        id: 2,
        title: "COPD",
        lastEdited: "2 days ago",
        imgUrl: "/assets/concept-map/recentMapImg2.svg",
    },
    {
        id: 3,
        title: "Hypertension ",
        lastEdited: "3 days ago",
        imgUrl: "/assets/concept-map/recentMapImg3.svg",
    },
    {
        id: 4,
        title: "Stroke",
        lastEdited: "an hour ago",
        imgUrl: "/assets/concept-map/recentMapImg4.svg",
    },
]  

export const DiseaseTemplatesData = [
    {
        id:1 , 
        title: "Pneumonia", 
        description: "Respiratory infection template",
    },
    {
        id:2 , 
        title: "Diabetes", 
        description: "Metabolic disorder template",
    },
    {
        id:3 , 
        title: "Hypertension", 
        description: "Cardiovascular template",
    },
    {
        id:4 , 
        title: "COPD", 
        description: "Respiratory disease template",
    },
    {
        id:1 , 
        title: "CHF", 
        description: "Heart disease template",
    },
    {
        id:1 , 
        title: "More Templates", 
        description: "Browse all available template",
    },
]



export const sortOptions = [
  { value: "recently-modified", label: "Recently Modified" },
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "date-created", label: "Date Created" },
  { value: "size", label: "Size" },
]

export const typeOptions = [
  { value: "all-types", label: "All Types" },
  { value: "document", label: "Document" },
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "audio", label: "Audio" },
  { value: "folder", label: "Folder" },
] 

export const MyMapsData = [
    {
        id: 1,
        title: "Diabetes Type 2",
        lastEdited: "Today",
        imgUrl: "/assets/concept-map/recentMapImg1.svg",
    },
    {
        id: 2,
        title: "COPD",
        lastEdited: "2 days ago",
        imgUrl: "/assets/concept-map/recentMapImg2.svg",
    },
    {
        id: 3,
        title: "Hypertension ",
        lastEdited: "3 days ago",
        imgUrl: "/assets/concept-map/recentMapImg3.svg",
    },
    {
        id: 4,
        title: "Stroke",
        lastEdited: "an hour ago",
        imgUrl: "/assets/concept-map/recentMapImg4.svg",
    }, 
        {
        id: 5,
        title: "Diabetes Type 2",
        lastEdited: "Today",
        imgUrl: "/assets/concept-map/recentMapImg1.svg",
    },
    {
        id: 6,
        title: "COPD",
        lastEdited: "2 days ago",
        imgUrl: "/assets/concept-map/recentMapImg2.svg",
    },
]  