export interface IUser {
  name: string;
  email: string;
  password: string;
  birth_date: Date;
  zodiac: string;
  createdAt?: Date;
  updatedAt?: Date;
}