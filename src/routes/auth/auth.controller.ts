import { Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';

@Controller(Routes.AUTH)
export class AuthController {
  // Inject authservice here
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}

  // Create a new user account
  @Post('signup')
  signup() {
    return 'This is signup ';
  }

  // Login an existing user
  @Post('login')
  login() {
    return 'This is login user';
  }

  //Get status of user
  @Get('status')
  status() {
    return 'This is status';
  }

  // Logout already logged in user
  @Post('logout')
  logout() {
    return 'This is logout';
  }
}
