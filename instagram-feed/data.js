const initialData = {
  profile: {
    avatar: require("../assets/instagram-feed/avatar1.png"),
  },
  stories: [
    {
      id: 2,
      avatar: require("../assets/instagram-feed/avatar2.png"),
      name: "Steven Pielberg",
      isSeen: false,
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed/avatar3.png"),
      name: "Jurassic Park",
      isSeen: false,
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed/avatar4.png"),
      name: "Britney Pears",
      isSeen: true,
    },
  ],
  articles: [
    {
      id: 1,
      avatar: require("../assets/instagram-feed/avatar1.png"),
      name: "John Doe",
      image: require("../assets/instagram-feed/img1.jpg"),
      likes: 3,
      commentCount: 10,
      comments: "View all 0 comments",
    },
    {
      id: 2,
      avatar: require("../assets/instagram-feed/avatar2.png"),
      name: "Steven Pielberg",
      image: require("../assets/instagram-feed/img2.jpg"),
      likes: 4,
      commentCount: 2,
      comments: "View all 0 comments",
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed/avatar3.png"),
      name: "Jurassic Park",
      image: require("../assets/instagram-feed/img3.jpg"),
      likes: 543,
      commentCount: 54,
      comments: "View all 0 comments",
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed/avatar4.png"),
      name: "Britney Pears",
      image: require("../assets/instagram-feed/img4.jpg"),
      likes: 3,
      commentCount: 199,
      comments: "View all 0 comments",
    },
  ],
};

const data = {
  ...initialData,
  articles: initialData.articles.map((article) => {
    return {
      ...article,
      comments: `View all ${article.commentCount} comments`,
    };
  }),
};

export default data;
