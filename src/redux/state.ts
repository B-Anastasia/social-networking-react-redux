import { v1 } from "uuid";

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

export default state;
