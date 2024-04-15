export interface UserState {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    birthday: string;
    updated_at: string;
    list: number;
  }

  interface UserFormData {
    pseudo: string;
    email: string;
    birthday: string;
    password: string;
  }
