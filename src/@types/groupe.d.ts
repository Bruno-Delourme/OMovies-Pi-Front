interface Group {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    users: UserFormData[]; // groupe have now list of users where every user is represented by the object UserFormData
  }