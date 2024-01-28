export const initialValues = {
  nick: "",
  email: "",
  password: "",
};

export type IRegisterValues = typeof initialValues;

export type ITokens = {
  access_token: string;
  refresh_token: string;
};
