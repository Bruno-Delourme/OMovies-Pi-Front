export interface UserState {
    user: any;
    token: string | null;
    id: number;
    pseudo: string;
    email: string;
    password: string;
    birthday: string;
    updated_at: string;
    //list: number;
  }

  interface UserFormData {
    id: number | null;
    pseudo: string;
    email: string;
    birthday: string;
    password: string;
    token: string | null;
  }
