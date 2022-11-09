export interface IUser {
  name: string;
  photo: string;
  online: boolean;
  age: number;
  registration: string;
}

export interface IVideo {
  embed: string;
  text?: string;
  link: string;
}

export interface IData {
  video: IVideo;
  users: IUser[];
}
