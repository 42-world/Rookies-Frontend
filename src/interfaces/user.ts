enum USER_ROLE {
  ADMIN = "ADMIN",
  CADET = "CADET",
  GUEST = "GUEST",
  NOVICE = "NOVICE",
}

type Role = USER_ROLE;

export interface User {
  id: number;
  nickname: string;
  role: Role;
  character: number;
  createdAt: Date;
  updatedAt: Date;
}
