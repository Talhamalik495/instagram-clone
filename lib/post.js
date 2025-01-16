export const posts = [
  {
    id: 1,
    user: {
      username: "john_doe",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null, // Null if no video
    },
    likes: 150,
    comments: [
      { user: "mary_smith", text: "Great post!" },
      { user: "jane_doe", text: "Love this photo!" },
    ],
    timestamp: "2025-01-07T12:30:00Z",
    caption: "A beautiful day in the park #nature",
  },
  {
    id: 2,
    user: {
      username: "susan_lee",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 200,
    comments: [{ user: "john_doe", text: "Such a lovely view!" }],
    timestamp: "2025-01-07T14:45:00Z",
    caption: "The sunset is magical! 🌅",
  },
  {
    id: 3,
    user: {
      username: "mike_wilson",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg", // For a video post
    },
    likes: 300,
    comments: [
      { user: "emma_jones", text: "Amazing shot!" },
      { user: "lucas_white", text: "Stunning video!" },
    ],
    timestamp: "2025-01-07T15:00:00Z",
    caption: "Adventure time! #travel #explore",
  },
  {
    id: 4,
    user: {
      username: "lucy_brown",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 120,
    comments: [{ user: "peter_clark", text: "This is so cute!" }],
    timestamp: "2025-01-07T16:00:00Z",
    caption: "My little puppy! 🐶❤️",
  },
  {
    id: 5,
    user: {
      username: "alex_lee",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 350,
    comments: [{ user: "laura_kim", text: "Love this place!" }],
    timestamp: "2025-01-07T17:10:00Z",
    caption: "Breakfast at my favorite cafe 🍽️",
  },
  {
    id: 6,
    user: {
      username: "clara_king",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 250,
    comments: [{ user: "david_shaw", text: "Looks so delicious!" }],
    timestamp: "2025-01-07T18:25:00Z",
    caption: "Lunch at the beach #foodie #beachvibes",
  },
  {
    id: 7,
    user: {
      username: "james_fox",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 500,
    comments: [{ user: "kate_williams", text: "Incredible!" }],
    timestamp: "2025-01-07T19:00:00Z",
    caption: "Hiking through the mountains #adventure",
  },
  {
    id: 8,
    user: {
      username: "olivia_lee",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 400,
    comments: [{ user: "michael_smith", text: "Gorgeous!" }],
    timestamp: "2025-01-07T20:15:00Z",
    caption: "Sunset at the beach 🌅 #vacation",
  },
  {
    id: 9,
    user: {
      username: "chris_johnson",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 130,
    comments: [{ user: "jenny_lee", text: "Nice capture!" }],
    timestamp: "2025-01-07T21:45:00Z",
    caption: "Coffee and chill 🍵",
  },
  {
    id: 10,
    user: {
      username: "emily_martin",
      profile_picture:
        "https://www.shutterstock.com/image-photo/handsome-indian-young-man-posing-260nw-2440478803.jpg",
    },
    content: {
      image:
        "https://i.pinimg.com/474x/09/9e/f6/099ef6d555e2407c0040e215d4b7edcb.jpg",
      video: null,
    },
    likes: 220,
    comments: [{ user: "sophie_davis", text: "Such a cozy vibe!" }],
    timestamp: "2025-01-07T22:00:00Z",
    caption: "Cozy vibes by the fireplace #winter #cozy",
  },
];

// images
export const images = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 1",
    description: "Description of image 1",
  },
  {
    id: 2,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 2",
    description: "Description of image 2",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 3",
    description: "Description of image 3",
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 4",
    description: "Description of image 4",
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 5",
    description: "Description of image 5",
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 6",
    description: "Description of image 6",
  },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 7",
    description: "Description of image 7",
  },
  {
    id: 8,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 8",
    description: "Description of image 8",
  },
  {
    id: 9,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 9",
    description: "Description of image 9",
  },
  {
    id: 10,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 10",
    description: "Description of image 10",
  },
  {
    id: 11,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 11",
    description: "Description of image 11",
  },
  {
    id: 12,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 12",
    description: "Description of image 12",
  },
  {
    id: 13,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 13",
    description: "Description of image 13",
  },
  {
    id: 14,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 14",
    description: "Description of image 14",
  },
  {
    id: 15,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 15",
    description: "Description of image 15",
  },
  {
    id: 16,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 16",
    description: "Description of image 16",
  },
  {
    id: 17,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 17",
    description: "Description of image 17",
  },
  {
    id: 18,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 18",
    description: "Description of image 18",
  },
  {
    id: 19,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image 19",
    description: "Description of image 19",
  },
  {
    id: 20,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hUIbn76ctIULUWYAeWZY21U94vFoDJfriQ&s",
    title: "Image20",
    description: "Description of image 20",
  },
];
