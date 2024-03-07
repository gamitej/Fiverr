export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  isSeller: boolean;
}

export interface RegisterRequest {
  img: string;
  desc: string;
  email: string;
  country: string;
  username: string;
  password: string;
  isSeller: boolean;
}
