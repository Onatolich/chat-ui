/* eslint-disable no-unused-vars */

type UserT = {
  avatar: string,
  name: string,
};

type MessageT = {
  avatar: string,
  username: string,
  message: string,
};

type MessagesListT = Array<MessageT>;

type ActionT = {
  type: string,
  payload: any,
};

type ActionCreatorT = (payload: any) => ActionT;
