export interface IMessage {
  messageText: string;
  messageImages: string[];
}

export interface IUser {
  id: string; // UUID
  userName: string;
}
export interface IPost {
  id: string; // UUID
  userName: string;
  postMessage: IMessage;
  postedAt: Date; // Data e hora do post
}
