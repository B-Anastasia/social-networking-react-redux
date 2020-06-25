import { v1 } from "uuid";

let rerenderEntierTree: Function = () => {
  console.log("State was changed");
};

export type IPostType = {
  id: string;
  text: string;
  count: number;
};

export type IDialogType = {
  id: string;
  name: string;
  src: string;
};

export type IMessageType = {
  id: string;
  text: string;
  name: string;
  img: string;
  img_name: string;
  time: string;
};

export type IProfilePageType = {
  posts: Array<IPostType>;
  profile: IDialogType;
  newPostText: string;
};

export type IDialogsPageType = {
  dialogs: Array<IDialogType>;
  messages: Array<IMessageType>;
};

export type IStateType = {
  profilePage: IProfilePageType;
  dialogsPage: IDialogsPageType;
  sidebar: ISidebarType;
};

export type IFriendType = {
  id: string;
  name: string;
  src: string;
};

export type ISidebarType = {
  friends: Array<IFriendType>;
};

export const users = [
  {
    id: v1(),
    name: "Dima",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Andr",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Aleks",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Kira",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Sem",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Felix",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Artur",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
  {
    id: v1(),
    name: "Den",
    src:
      "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  },
];

let state: IStateType = {
  profilePage: {
    profile: {
      id: v1(),
      name: "Den Fox",
      src:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    },
    posts: [
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 10,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 20,
      },
    ],
    newPostText: "value1",
  },
  dialogsPage: {
    dialogs: users,
    messages: [
      {
        id: v1(),
        img:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
        name: "Alisa",
        img_name: "Avatar",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
        time: "11:00",
      },
      {
        id: v1(),
        img:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
        name: "Alisa",
        img_name: "Avatar",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
        time: "11:00",
      },
      {
        id: v1(),
        img:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
        name: "Alisa",
        img_name: "Avatar",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
        time: "11:00",
      },
      {
        id: v1(),
        img:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
        name: "Alisa",
        img_name: "Avatar",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
        time: "11:00",
      },
      {
        id: v1(),
        img:
          "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
        name: "Alisa",
        img_name: "Avatar",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
        time: "11:00",
      },
    ],
  },
  sidebar: {
    friends: users,
  },
};

export const addNewPost = () => {
  const newPost: IPostType = {
    id: v1(),
    text: state.profilePage.newPostText,
    count: 0,
  };
  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntierTree();
};

export const updateInputValue = (value: string) => {
  state.profilePage.newPostText = value;
  rerenderEntierTree();
};

export const addNewMessage = (
  text: string,
  name: string,
  imgUrl = "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
  img_name = "Avatar"
) => {
  const newMessage = {
    id: v1(),
    text: text,
    name: name,
    img: imgUrl,
    img_name: img_name,
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntierTree();
};

export const subscribe = (observer: Function) => {
  rerenderEntierTree = observer; //pattern=observer
};
console.log(rerenderEntierTree);

export default state;
