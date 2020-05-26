export type HomeStackParams = {
  Home: undefined;
};

export type StudyNotebookListStackParams = {
  StudyNotebookList: undefined;
};

export type UserDetailsStackParams = {
  UserDetails: undefined;
};

export type DrawerStackParams = {
  HomeStack: HomeStackParams;
  StudyNotebookListStack: StudyNotebookListStackParams;
  UserDetailsStack: UserDetailsStackParams;
  SubcategoryListStackScreen: SubcategoryStackParams;
};

export type RootStackParams = {
  DrawerStack: undefined;
  QuestionDetails: {
    idQuestion: number;
  };
  QuestionList: {
    idSubcategory: number;
  };
  SubcategoryDetails: {
    id: number;
  };
  SubcategoryExplication: {
    id: number;
  };
};

export type AccountStackParams = {
  Login: undefined;
  RegisterForm: undefined;
};

export type SubcategoryStackParams = {
  SubcategoryList: undefined;
};
