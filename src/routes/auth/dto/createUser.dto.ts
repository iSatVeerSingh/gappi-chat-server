import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  fullName: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @MinLength(4, {
    message: 'Username must be atleast 4 characters long',
  })
  @IsNotEmpty({
    message: 'Username is required',
  })
  username: string;

  @MinLength(8, {
    message: 'Password must be atleast 8 characters long',
  })
  @IsNotEmpty({
    message: 'Password is required',
  })
  password: string;

  @IsNotEmpty({
    message: 'Confirm password is required',
  })
  confirmPassword: string;
}
