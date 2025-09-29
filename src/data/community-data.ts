export interface IPost {
  id: number;
  author: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  avatar: string;
  header: string;
}


export interface StudyGroup {
  id: number;
  name: string;
  newMessages: number;
}

export const demoPosts = [
    {
      id: 1,
      user: 'Sarah',
      username: 'Sarah_RN2025',
      avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
      timeAgo: '3h',
      content: '\n\nAfter a semester of building competency, I finally conquered the NCLEX! Here is my detailed breakdown of what worked, what didn\'t, and the mindful preparation leading up to the actual event. My tips for all. \n#NCLEX #StudyTips',
      likes: 156,
      header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
      comments: 24,
      shares: 12,
      bookmarks: 45,
      isLiked: true,
      isBookmarked: false,
      tags: ['NCLEX', 'Study Tips'],
      commentsData: [
        {
          id: 1,
          user: 'John Doe',
          username: 'john.doe',
          avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
          content: 'This is exactly what I was looking for! I\'m taking my NCLEX in 2 weeks and feeling super nervous. Your breakdown was very reassuring and helpful! Thanks for sharing! ❤️',
          timeAgo: '2h',
          header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
          likes: 12,
          isLiked: false,
          replies: [
            {
              id: 1,
              user: 'Sarah',
              username: 'Sarah_RN2025',
              avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
              content: 'You\'ve got this! Good luck! 💪',
              timeAgo: '1h',
              likes: 5,
              isLiked: true
            }
          ]
        },
        {
          id: 2,
          user: 'Jane Smith',
          username: 'jane.smith99',
          avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
          content: 'Can you give us some keywords, the where you purchased books? Looking your asked to use the first night in Chicago? I also think you if it interested in people you ask me about them? ight for you!',
          timeAgo: '1h',
          header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
          likes: 3,
          isLiked: false,
          replies: []
        }
      ]
    },
    {
      id: 2,
      user: 'Sarah',
      username: 'Sarah_RN2025',
      avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
      timeAgo: '5h',
      content: 'After a semester of building competency, I finally conquered the NCLEX! Here is my detailed breakdown of what worked, what didn\'t, and the mindful preparation leading up to the actual event. My tips for all. \n#NCLEX #StudyTips',
      likes: 89,
      comments: 18,
      shares: 7,
      bookmarks: 23,
      isLiked: false,
      isBookmarked: true,
      tags: ['NCLEX', 'Study Tips'],
      header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
      commentsData: []
    },
    {
      id: 3,
      user: 'Sarah',
      username: 'Sarah_RN2025',
      avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
      header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
      timeAgo: '5h',
      content: 'After a semester of building competency, I finally conquered the NCLEX! Here is my detailed breakdown of what worked, what didn\'t, and the mindful preparation leading up to the actual event. My tips for all. \n#NCLEX #StudyTips',
      likes: 89,
      comments: 18,
      shares: 7,
      bookmarks: 23,
      isLiked: false,
      isBookmarked: true,
      tags: ['NCLEX', 'Study Tips'],
      commentsData: []
    },
    {
      id: 4,
      user: 'Sarah',
      username: 'Sarah_RN2025',
      avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
      timeAgo: '5h',
      header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
      content: 'After a semester of building competency, I finally conquered the NCLEX! Here is my detailed breakdown of what worked, what didn\'t, and the mindful preparation leading up to the actual event. My tips for all. \n#NCLEX #StudyTips',
      likes: 89,
      comments: 18,
      shares: 7,
      bookmarks: 23,
      isLiked: false,
      isBookmarked: true,
      tags: ['NCLEX', 'Study Tips'],
      commentsData: []
    },
    {
      id: 5,
      user: 'Sarah',
      username: 'Sarah_RN2025',
      avatar: 'https://img.freepik.com/premium-photo/happy-3d-business-man-transparent-white-background_457222-3029.jpg',
      timeAgo: '5h',
      header:'Posted: NCLEX-RN test attempt! My complete study strategy breakdown.',
      content: 'After a semester of building competency, I finally conquered the NCLEX! Here is my detailed breakdown of what worked, what didn\'t, and the mindful preparation leading up to the actual event. My tips for all. \n#NCLEX #StudyTips',
      likes: 89,
      comments: 18,
      shares: 7,
      bookmarks: 23,
      isLiked: false,
      isBookmarked: true,
      tags: ['NCLEX', 'Study Tips'],
      commentsData: []
    }
  ]

