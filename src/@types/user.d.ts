export interface UserState {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    date_of_birth: string;
    updated_at: string;
    list: number;
  }

  interface UserFormData {
    pseudo: string;
    email: string;
    date_of_birth: string;
    password: string;
  }
