export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export type SignInResponse = {
  error?: string;
  status: number;
  ok: boolean;
  url: string | null;
};
