export const initialValues = {
  email: "",
  password: "",
};

export type ILoginValues = typeof initialValues;

export type ITokens = {
  access_token: string;
  refresh_token: string;
};
