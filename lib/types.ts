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

export type User = {
  bio?: string;
  certificates: [
    {
      id: string;
      userId: number;
      programId?: string;
      programTitle?: string;
      grade?: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  country?: string;
  createdAt: Date;
  dateOfBirth?: string;
  email: string;
  emailVerified?: string;
  enrolled: [
    {
      courseId: string;
      courseSlug: string;
      createdAt: Date;
      id: number;
      isActive: boolean;
      progress?: string;
      mode?: string;
      modulesTook?: string;
      updatedAt: Date;
      userid: number;
    }
  ];
  programEnrolled: [
    {
      programId: string;
      programSlug: string;
      createdAt: Date;
      id: number;
      isActive: boolean;
      progress?: string;
      mode?: string;
      modulesTook?: string;
      updatedAt: Date;
      userid: number;
    }
  ];
  for?: String[];
  gender?: String;
  id: Number;
  image?: String;
  language: String;
  lastLogin?: Date;
  ocupation?: String;
  role: String;
  updatedAt: Date;
};

export type Certificates = {
  createdAt: Date;
  grade?: String;
  id: String;
  programId: String;
  programTitle: String;
  updatedAt: Date;
  user: {
    bio?: String;
    country?: String;
    createdAt: Date;
    dateOfBirth?: String;
    email: String;
    emailVerified?: Date;
    id: Number;
    for?: String;
    gender: null;
    image?: String;
    language?: String;
    lastLogin: Date;
    name: String;
    ocupation?: String;
    password?: String;
    role: String;
    updatedAt: Date;
  };
  userId: Number;
};

export enum TestState {
  Initial,
  Inprocess,
  submiting,
  Result,
  Review,
}
export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type AppContextType = {
  name: string;
  author: string;
  url: string;
};
